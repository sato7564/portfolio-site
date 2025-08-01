# PowerShell デプロイスクリプト
# 注意: パスワードを平文で保存するのはセキュリティ上推奨されません
# 本番環境では SSH 鍵認証の使用を推奨します

$Host_Server = "ssh.lolipop.jp"
$Port = "2222"
$User = "greater.jp-witty-naha-8507"
$RemoteDir = "~/web/"

Write-Host "🚀 Starting deployment to Lolipop server..." -ForegroundColor Cyan

# ビルドを実行
Write-Host "📦 Building production files..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed!" -ForegroundColor Green

# SCPでアップロード（各ファイルで手動でパスワード入力が必要）
Write-Host "📤 Uploading files..." -ForegroundColor Yellow
Write-Host "Note: You'll need to enter password for each file" -ForegroundColor Magenta

Write-Host "  - Uploading index.html..." -ForegroundColor White
scp -P $Port dist\index.html ${User}@${Host_Server}:${RemoteDir}

Write-Host "  - Uploading .htaccess..." -ForegroundColor White
scp -P $Port dist\.htaccess ${User}@${Host_Server}:${RemoteDir}

Write-Host "  - Uploading assets folder..." -ForegroundColor White
scp -P $Port -r dist\assets ${User}@${Host_Server}:${RemoteDir}

Write-Host "  - Uploading images folder..." -ForegroundColor White
scp -P $Port -r dist\images ${User}@${Host_Server}:${RemoteDir}

Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host "🌐 Check your site at: https://witty-naha-8507.greater.jp/" -ForegroundColor Cyan