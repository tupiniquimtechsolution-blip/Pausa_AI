@echo off
setlocal EnableExtensions
title Pausa AI - Next.js
color 0A

set "APP_DIR=F:\CODEX\Pausa AI"
set "NODE_DIR=F:\CODEX\programas\nodejs"
set "PATH=%NODE_DIR%;%PATH%"
set "NPM_CONFIG_CACHE=F:\CODEX\.cache\npm"
set "NPM_CONFIG_PREFIX=F:\CODEX\programas\npm-global"
set "NEXT_DIST_DIR=.next-lan"

cd /d "%APP_DIR%"
echo Iniciando Pausa AI em 0.0.0.0:3001...
echo.
"%NODE_DIR%\node.exe" "%APP_DIR%\node_modules\next\dist\bin\next" dev --hostname 0.0.0.0 --port 3001

set "EXIT_CODE=%ERRORLEVEL%"
echo.
echo O servidor foi encerrado com o codigo %EXIT_CODE%.
echo Pressione qualquer tecla para fechar esta janela.
pause >nul
exit /b %EXIT_CODE%
