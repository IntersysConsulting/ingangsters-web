@ECHO OFF
cd %~dp0
net user | find /i "%UserName%" > nul
IF %ErrorLevel%==1 (
    GOTO shareFolder
)

REM Check if image exists
docker images | find /i "ingangsters-web" > nul
IF "%ERRORLEVEL%"=="0" (
    :attemptRun
    docker ps -a | find /i "ingangsters-web" > nul
    IF "%ERRORLEVEL%" == "0" (
        docker rm -f ingangsters-web > nul 2>&1
    )
    docker run -v %CD%:/app -p 3000:3000 --name ingangsters-web -it ingangsters-web
    FOR /F "tokens=*" %%g IN ('docker inspect ingangsters-web --format={{.State.ExitCode}}') do (SET dockerExitCode=%%g)
    ECHO --r ErrorLevel %ErrorLevel%
    ECHO --d ErrorLevel %dockerExitCode%
    IF NOT "%dockerExitCode%"=="0" (
        ECHO Sharing...
        goto :shareFolder
    ) ELSE (
        ECHO Running again...
        goto attemptRun
    )
) ELSE (   
    ECHO Preparing development environment, this may take a while....
    :build
    docker build . -t ingangsters-web
    ECHO --b ErrorLevel %ErrorLevel%
    IF NOT "%ErrorLevel%"=="0" (
        :shareFolder
        CALL shareFolder %CD% 
        GOTO :build
    )
    goto attemptRun
)