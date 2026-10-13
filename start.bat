@echo off
setlocal
cd /d "%~dp0"

if not exist "package.json" (
  echo Error: package.json was not found. Run this script from the project folder.
  exit /b 1
)

if not exist "node_modules" (
  echo Dependencies are not installed. Run npm install first.
  exit /b 1
)

call npm run dev
