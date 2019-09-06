@ECHO OFF
setlocal

REM Check if user workaround exists
net user | find /i "%UserName%" > nul
IF %ErrorLevel%==1 (
    ECHO Warning! Alternative user does not exist, creating it now, you will be prompted for your password...
    net user /add %UserName% *
    net localgroup administrators %ComputerName%\%UserName% /add
)
IF "%~1"=="" goto printUsage

REM PARSING FOLDERS
:parseNext
IF EXIST %1 (
    ECHO   -- Granting access to %1....
    icacls %1 /t /c /q /grant %ComputerName%\%UserName%:F
) ELSE (
    ECHO   -- %1 does not exist
)

SHIFT
IF "%1"=="" (
    goto end
) ELSE (
    goto parseNext
) 

:end
ECHO Done
EXIT /b 0

:printUsage
ECHO Usage:
ECHO.
ECHO shell^>shareFolder path/to/my/folder [...more paths]
ECHO --------------------
ECHO. 
ECHO Example
ECHO.
ECHO shell^>shareFolder C:\Users\Me\Documents\projects\thisProject "C:\Users\Me\Documents\otherFolder\folder with spaces"

