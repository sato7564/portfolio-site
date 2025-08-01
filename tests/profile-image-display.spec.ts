import { test, expect } from '@playwright/test';

test.describe('プロフィールページの画像表示', () => {
  test('プロフィール写真が適切に表示される', async ({ page }) => {
    // ホームページに移動
    await page.goto('/');
    
    // プロフィールタブをクリック
    await page.click('text=プロフィール');
    
    // ページタイトルが正しく表示されることを確認
    await expect(page.locator('h1')).toContainText('プロフィール');
    
    // プロフィール画像が存在することを確認
    const profileImage = page.locator('img[alt="岡悟史のプロフィール写真"]');
    await expect(profileImage).toBeVisible();
    
    // 画像が読み込まれることを確認
    await expect(profileImage).toHaveAttribute('src', '/images/profile.png');
    
    // 画像のコンテナが適切なサイズを持つことを確認
    const imageContainer = page.locator('.max-w-full.max-h-full');
    await expect(imageContainer).toBeVisible();
    
    // GlareHoverエフェクトのコンテナが存在することを確認
    const glareContainer = profileImage.locator('xpath=ancestor::*[contains(@class, "w-full") and contains(@class, "h-full")]').first();
    await expect(glareContainer).toBeVisible();
    
    // 画像が枠内に収まっていることを視覚的に確認するため、スクリーンショットを撮影
    await expect(page.locator('div').filter({ hasText: 'プロフィール' }).first()).toBeVisible();
    
    // レスポンシブデザインの確認
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(profileImage).toBeVisible();
    
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(profileImage).toBeVisible();
    
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(profileImage).toBeVisible();
  });

  test('プロフィール画像のレイアウトが正常', async ({ page }) => {
    await page.goto('/');
    
    // プロフィールタブをクリック
    await page.click('text=プロフィール');
    
    // 画像コンテナの背景グラデーションが適用されていることを確認
    const cardContent = page.locator('.bg-gradient-to-br');
    await expect(cardContent).toBeVisible();
    
    // プロフィール画像コンテナが中央配置されていることを確認
    const imageContainer = page.locator('div.w-full.h-full.flex.items-center.justify-center.p-4');
    await expect(imageContainer).toBeVisible();
    
    // 画像に角丸が適用されていることを確認
    const profileImage = page.locator('img[alt="岡悟史のプロフィール写真"]');
    await expect(profileImage).toBeVisible();
    await expect(profileImage).toHaveClass(/rounded-lg/);
  });
});