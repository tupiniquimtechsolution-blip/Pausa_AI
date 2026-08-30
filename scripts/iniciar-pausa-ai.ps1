$ErrorActionPreference = 'Stop'
$Host.UI.RawUI.WindowTitle = 'Pausa AI - Servidor'

$appDir = 'F:\CODEX\Pausa AI'
$nodeDir = 'F:\CODEX\programas\nodejs'
$port = 3000
$env:Path = "$nodeDir;$env:Path"
$env:NPM_CONFIG_CACHE = 'F:\CODEX\.cache\npm'
$env:NPM_CONFIG_PREFIX = 'F:\CODEX\programas\npm-global'
$env:NEXT_DIST_DIR = '.next-live-server'

Set-Location -LiteralPath $appDir

$ipconfigText = ipconfig | Out-String
$ip = [regex]::Matches($ipconfigText, '(?im)IPv4[^:]*:\s*(\d{1,3}(?:\.\d{1,3}){3})') |
    ForEach-Object { $_.Groups[1].Value } |
    Where-Object { $_ -match '^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.)' } |
    Select-Object -First 1

Clear-Host
Write-Host '============================================================' -ForegroundColor Cyan
Write-Host '                  PAUSA AI - SERVIDOR' -ForegroundColor Cyan
Write-Host '============================================================' -ForegroundColor Cyan
Write-Host "Projeto: $appDir"
Write-Host "Porta:   $port"
Write-Host "Local:   http://localhost:$port"
if ($ip) {
    Write-Host "Rede:    http://${ip}:$port" -ForegroundColor Green
    Set-Clipboard -Value "http://${ip}:$port"
} else {
    Write-Host 'Rede: IP nao encontrado; consulte ipconfig.' -ForegroundColor Red
}
Write-Host
Write-Host 'Iniciando diretamente, sem reinstalar dependencias.' -ForegroundColor Yellow
Write-Host 'Mantenha esta janela aberta.' -ForegroundColor Yellow
Write-Host 'Ctrl+C encerra o servidor.' -ForegroundColor Yellow
Write-Host '============================================================' -ForegroundColor Cyan
Write-Host

Write-Host 'Abrindo Next.js em 0.0.0.0:3000...' -ForegroundColor Yellow
& "$nodeDir\npm.cmd" run dev -- --webpack --hostname 0.0.0.0 --port $port

$exitCode = $LASTEXITCODE
Write-Host
Write-Host "Servidor encerrado. Codigo: $exitCode" -ForegroundColor Red
Read-Host 'Pressione Enter para fechar'
exit $exitCode
