@echo off
REM Windows用デプロイスクリプト

echo 🚀 Starting deployment to Lolipop server...

REM ビルドを実行
echo 📦 Building production files...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    exit /b 1
)

echo ✅ Build completed!

REM SCPでアップロード
echo 📤 Uploading files...

echo   - Uploading index.html...
scp -P 2222 dist\index.html greater.jp-witty-naha-8507@ssh.lolipop.jp:~/web/

echo   - Uploading .htaccess...
scp -P 2222 dist\.htaccess greater.jp-witty-naha-8507@ssh.lolipop.jp:~/web/

echo   - Uploading assets folder...
scp -P 2222 -r dist\assets greater.jp-witty-naha-8507@ssh.lolipop.jp:~/web/

echo ✅ Deployment completed!
echo 🌐 Check your site at: https://greater.jp/
pause