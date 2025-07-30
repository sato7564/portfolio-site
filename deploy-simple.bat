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

REM SCPでアップロード（SSH configのlolipopエイリアスを使用）
echo 📤 Uploading files...

echo   - Uploading index.html...
scp dist\index.html lolipop:~/web/

echo   - Uploading .htaccess...
scp dist\.htaccess lolipop:~/web/

echo   - Uploading assets folder...
scp -r dist\assets lolipop:~/web/

echo ✅ Deployment completed!
echo 🌐 Check your site at: https://greater.jp/
pause