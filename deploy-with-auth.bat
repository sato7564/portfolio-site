@echo off
REM Windows用デプロイスクリプト（認証情報付き）
REM 注意: 本番環境では認証情報を平文で保存しないでください

echo 🚀 Starting deployment to Lolipop server...

REM ビルドを実行
echo 📦 Building production files...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    exit /b 1
)

echo ✅ Build completed!

REM 手動デプロイの指示
echo 📤 Manual deployment required...
echo.
echo Please manually upload the following files to https://user.lolipop.jp/
echo Username: admin
echo Password: oka_recruit
echo.
echo Files to upload to ~/web/:
echo   1. dist\index.html
echo   2. dist\assets\ (entire folder)
echo   3. dist\images\ (entire folder)
echo.
echo After upload, check your site at: https://witty-naha-8507.greater.jp/
pause