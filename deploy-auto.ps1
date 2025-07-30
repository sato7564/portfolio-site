# PowerShell 自動デプロイスクリプト（SSH鍵認証版）

Write-Host "🚀 Starting automated deployment..." -ForegroundColor Cyan

# ビルドを実行
Write-Host "📦 Building production files..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed!" -ForegroundColor Green

# SCPでアップロード（SSH configのlolipopエイリアスを使用）
Write-Host "📤 Uploading files..." -ForegroundColor Yellow

Write-Host "  - Uploading index.html..." -ForegroundColor White
scp dist\index.html lolipop:~/web/

Write-Host "  - Uploading .htaccess..." -ForegroundColor White
scp dist\.htaccess lolipop:~/web/

Write-Host "  - Uploading assets folder..." -ForegroundColor White
scp -r dist\assets lolipop:~/web/

Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host "🌐 Check your site at: https://greater.jp/" -ForegroundColor Cyan