import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { Miniflare, convertV4MiniflareOptions } from 'miniflare';

// Disposable protocol fixture: no external database, credentials or writes.
const i16 = n => { const b=Buffer.alloc(2); b.writeInt16BE(n); return b; };
const i32 = n => { const b=Buffer.alloc(4); b.writeInt32BE(n); return b; };
const message = (type, ...parts) => { const body=Buffer.concat(parts); return Buffer.concat([Buffer.from(type),i32(body.length+4),body]); };
const ready = () => message('Z',Buffer.from('I'));
const rowDescription = () => message('T',i16(1),Buffer.from('value\0'),i32(0),i16(0),i32(23),i16(4),i32(-1),i16(0));
const result = () => Buffer.concat([message('D',i16(1),i32(1),Buffer.from('1')),message('C',Buffer.from('SELECT 1\0'))]);
let connections=0, closedConnections=0;
const server=net.createServer(socket=>{
  connections++;
  socket.on('close',()=>closedConnections++);
  let buffer=Buffer.alloc(0), startup=true;
  socket.on('error',()=>{});
  socket.on('data',data=>{
    buffer=Buffer.concat([buffer,data]);
    while(buffer.length){
      if(startup){
        if(buffer.length<4)return;
        const length=buffer.readInt32BE();
        if(buffer.length<length)return;
        const packet=buffer.subarray(0,length); buffer=buffer.subarray(length);
        if(length===8 && packet.readInt32BE(4)===80877103){socket.write('N');continue;}
        startup=false;
        socket.write(Buffer.concat([message('R',i32(0)),message('S',Buffer.from('server_version\0'+'17.0\0')),message('S',Buffer.from('client_encoding\0UTF8\0')),message('K',i32(1),i32(1)),ready()]));
      }else{
        if(buffer.length<5)return;
        const length=buffer.readInt32BE(1);
        if(buffer.length<length+1)return;
        const type=String.fromCharCode(buffer[0]); buffer=buffer.subarray(length+1);
        if(type==='Q')socket.write(Buffer.concat([rowDescription(),result(),ready()]));
        if(type==='P')socket.write(message('1'));
        if(type==='B')socket.write(message('2'));
        if(type==='D')socket.write(rowDescription());
        if(type==='E')socket.write(result());
        if(type==='S')socket.write(ready());
        if(type==='X')socket.end();
      }
    }
  });
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const root=path.resolve('.cloudflare/output/v0/workers/default/bundle');
const modules=fs.readdirSync(root,{recursive:true}).filter(p=>p.endsWith('.js')||p.endsWith('.wasm')).map(p=>({type:p.endsWith('.wasm')?'CompiledWasm':'ESModule',path:path.join(root,p),contents:p.endsWith('.wasm')?fs.readFileSync(path.join(root,p)):fs.readFileSync(path.join(root,p),'utf8')}));
modules.sort((a,b)=>a.path===path.join(root,'index.js')?-1:b.path===path.join(root,'index.js')?1:0);
const mf=new Miniflare(convertV4MiniflareOptions({modules,modulesRoot:root,compatibilityDate:'2026-09-30',compatibilityFlags:['nodejs_compat'],bindings:{DATABASE_URL:`postgresql://test:test@127.0.0.1:${server.address().port}/test`,JWT_SECRET:'local-test-only-32-characters-secret',RATE_LIMIT_PEPPER:'local-test-only',APP_BASE_URL:'http://localhost'},serviceBindings:{ASSETS:async()=>new Response('not found',{status:404})}}));
try {
  for(let n=1;n<=4;n++){
    const response=await mf.dispatchFetch('http://localhost/api/health');
    const body=await response.text();
    console.log(JSON.stringify({request:n,status:response.status,connections,body:body.slice(0,1200)}));
    assert.equal(response.status,200);
  }
  const concurrent=await Promise.all(Array.from({length:6},async()=>{
    const response=await mf.dispatchFetch('http://localhost/api/health');
    assert.equal(response.status,200);
    assert.equal(JSON.parse(await response.text()).database,'ready');
  }));
  console.log(JSON.stringify({concurrentRequests:concurrent.length,connections,closedConnections}));
  assert.equal(connections,10);
}finally{
  await mf.dispose();
  server.close();
}

