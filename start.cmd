@echo off
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 (
  py -m http.server 4173 --bind 127.0.0.1 --directory dist
) else (
  python -m http.server 4173 --bind 127.0.0.1 --directory dist
)
pause
