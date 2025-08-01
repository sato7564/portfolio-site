import { test, expect, Page } from '@playwright/test';

test.describe('Local RollingGallery Detailed Analysis', () => {
  
  test('RollingGallery Component Analysis', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // ページが完全に読み込まれるまで待機
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // RollingGalleryコンポーネントの存在確認
    const galleryContainer = page.locator('.flex.h-full.items-center.justify-center').first();
    await expect(galleryContainer).toBeVisible();
    
    // 詳細な分析データを取得
    const analysisData = await page.evaluate(() => {
      // RollingGalleryコンテナを取得
      const perspectiveContainer = document.querySelector('[style*="perspective"]');
      const motionDiv = document.querySelector('[style*="transform"][style*="rotateY"]');
      const imageContainers = document.querySelectorAll('[class*="group"][class*="absolute"]');
      const images = document.querySelectorAll('img[alt="gallery"]');
      const gradients = document.querySelectorAll('[style*="linear-gradient"]');
      
      return {
        // コンテナ情報
        perspectiveExists: !!perspectiveContainer,
        perspectiveStyle: perspectiveContainer ? window.getComputedStyle(perspectiveContainer).cssText : null,
        
        // モーション要素情報
        motionExists: !!motionDiv,
        motionTransform: motionDiv ? window.getComputedStyle(motionDiv).transform : null,
        motionWidth: motionDiv ? window.getComputedStyle(motionDiv).width : null,
        
        // 画像情報
        imageCount: images.length,
        imageContainerCount: imageContainers.length,
        
        // 最初の画像コンテナの詳細
        firstImageContainer: imageContainers[0] ? {
          className: imageContainers[0].className,
          style: imageContainers[0].getAttribute('style'),
          computedStyle: {
            width: window.getComputedStyle(imageContainers[0]).width,
            height: window.getComputedStyle(imageContainers[0]).height,
            transform: window.getComputedStyle(imageContainers[0]).transform,
            backgroundColor: window.getComputedStyle(imageContainers[0]).backgroundColor,
          }
        } : null,
        
        // 画像の詳細
        firstImage: images[0] ? {
          src: images[0].src,
          className: images[0].className,
          computedStyle: {
            maxWidth: window.getComputedStyle(images[0]).maxWidth,
            maxHeight: window.getComputedStyle(images[0]).maxHeight,
            objectFit: window.getComputedStyle(images[0]).objectFit,
          }
        } : null,
        
        // グラデーション要素
        gradientCount: gradients.length,
        gradients: Array.from(gradients).map((grad, index) => ({
          index,
          style: grad.getAttribute('style'),
          computedBackground: window.getComputedStyle(grad).background,
        })),
        
        // 背景色情報
        bodyBackground: window.getComputedStyle(document.body).backgroundColor,
        htmlBackground: window.getComputedStyle(document.documentElement).backgroundColor,
        
        // ビューポート情報
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        
        // CSS変数（もしあれば）
        cssVariables: {
          backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--background'),
          foregroundColor: getComputedStyle(document.documentElement).getPropertyValue('--foreground'),
        }
      };
    });
    
    console.log('\n=== DETAILED LOCAL ANALYSIS ===');
    console.log(JSON.stringify(analysisData, null, 2));
    
    // スクリーンショットの撮影（異なる解像度で）
    const viewports = [
      { name: 'fullhd', width: 1920, height: 1080 },
      { name: 'laptop', width: 1366, height: 768 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 667 },
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(1000); // レイアウト調整を待つ
      
      // 全ページスクリーンショット
      await page.screenshot({ 
        path: `tests/screenshots/local-analysis-${viewport.name}-full.png`,
        fullPage: true 
      });
      
      // RollingGalleryエリアのみ
      const galleryElement = page.locator('[style*="perspective"]').first();
      if (await galleryElement.isVisible()) {
        await galleryElement.screenshot({ 
          path: `tests/screenshots/local-analysis-${viewport.name}-gallery.png` 
        });
      }
    }
    
    // アニメーションテスト
    await page.setViewportSize({ width: 1920, height: 1080 });
    const motionElement = page.locator('[style*="transform"][style*="rotateY"]').first();
    
    if (await motionElement.isVisible()) {
      // 初期状態
      await motionElement.screenshot({ 
        path: 'tests/screenshots/local-animation-initial.png' 
      });
      
      // ドラッグ操作のシミュレーション
      const box = await motionElement.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5, { steps: 10 });
        await page.mouse.up();
        
        await page.waitForTimeout(500);
        await motionElement.screenshot({ 
          path: 'tests/screenshots/local-animation-after-drag.png' 
        });
      }
    }
    
    // テスト結果の検証
    expect(analysisData.perspectiveExists).toBe(true);
    expect(analysisData.motionExists).toBe(true);
    expect(analysisData.imageCount).toBeGreaterThan(0);
    expect(analysisData.gradientCount).toBeGreaterThanOrEqual(2); // 左右のグラデーション
    
    console.log('✅ All RollingGallery components are working properly on local site');
  });
});