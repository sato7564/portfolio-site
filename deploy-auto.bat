@echo off
echo 🚀 Starting automated deployment...

REM ビルドを実行
echo 📦 Building production files...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    exit /b 1
)

echo ✅ Build completed!

REM SCPでアップロード（SSH鍵認証使用）
echo 📤 Uploading files...

echo   - Uploading index.html...
scp -o StrictHostKeyChecking=no -i C:\Users\sato7\.ssh\id_rsa_lolipop_nopass -P 2222 dist\index.html greater.jp-witty-naha-8507@ssh.lolipop.jp:~/web/

echo   - Uploading .htaccess...
scp -o StrictHostKeyChecking=no -i C:\Users\sato7\.ssh\id_rsa_lolipop_nopass -P 2222 dist\.htaccess greater.jp-witty-naha-8507@ssh.lolipop.jp:~/web/

echo   - Uploading assets folder...
scp -o StrictHostKeyChecking=no -i C:\Users\sato7\.ssh\id_rsa_lolipop_nopass -P 2222 -r dist\assets greater.jp-witty-naha-8507@ssh.lolipop.jp:~/web/

echo ✅ Deployment completed!
echo 🌐 Check your site at: https://greater.jp/
pause