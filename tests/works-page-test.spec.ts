import { test, expect, Page } from '@playwright/test';

test('Works Page RollingGallery Test', async ({ page }) => {
  // ホームページから開始
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');
  
  // 「作品を見る」ボタンをクリック
  const worksButton = page.locator('text=作品を見る');
  if (await worksButton.isVisible()) {
    await worksButton.click();
  } else {
    // 直接Worksページにアクセス
    await page.goto('http://localhost:5173/#works');
  }
  
  await page.waitForTimeout(3000);
  
  // 全体スクリーンショット
  await page.screenshot({ 
    path: 'tests/screenshots/works-page-full.png',
    fullPage: true 
  });
  
  // RollingGallery関連の要素を検索
  const perspectiveElements = await page.locator('[style*="perspective"]').count();
  const transformElements = await page.locator('[style*="transform"]').count();
  const galleryImages = await page.locator('img[alt="gallery"]').count();
  const unsplashImages = await page.locator('img[src*="unsplash"]').count();
  
  console.log('=== WORKS PAGE ANALYSIS ===');
  console.log('Perspective elements:', perspectiveElements);
  console.log('Transform elements:', transformElements);
  console.log('Gallery images:', galleryImages);
  console.log('Unsplash images:', unsplashImages);
  
  // 詳細な分析
  const worksPageInfo = await page.evaluate(() => {
    const perspectiveElements = document.querySelectorAll('[style*="perspective"]');
    const transformElements = document.querySelectorAll('[style*="transform"]');
    const allImages = document.querySelectorAll('img');
    const unsplashImages = document.querySelectorAll('img[src*="unsplash"]');
    
    return {
      url: window.location.href,
      perspectiveCount: perspectiveElements.length,
      transformCount: transformElements.length,
      totalImages: allImages.length,
      unsplashImages: unsplashImages.length,
      
      // RollingGallery関連の要素
      perspectiveElements: Array.from(perspectiveElements).map(el => ({
        tagName: el.tagName,
        className: el.className,
        style: el.getAttribute('style'),
        innerHTML: el.innerHTML.length > 500 ? el.innerHTML.substring(0, 500) + '...' : el.innerHTML,
      })),
      
      // 最初の数個のtransform要素
      sampleTransformElements: Array.from(transformElements).slice(0, 3).map(el => ({
        tagName: el.tagName,
        className: el.className,
        style: el.getAttribute('style'),
      })),
      
      // 画像のサンプル
      sampleImages: Array.from(allImages).slice(0, 5).map(img => ({
        src: img.src.length > 100 ? img.src.substring(0, 100) + '...' : img.src,
        alt: img.alt,
        className: img.className,
      })),
      
      // Unsplash画像の詳細
      unsplashImageDetails: Array.from(unsplashImages).slice(0, 5).map(img => ({
        src: img.src.length > 100 ? img.src.substring(0, 100) + '...' : img.src,
        alt: img.alt,
        className: img.className,
        parentClassName: img.parentElement ? img.parentElement.className : null,
      })),
    };
  });
  
  console.log(JSON.stringify(worksPageInfo, null, 2));
  
  // RollingGalleryが見つかった場合の詳細テスト
  if (perspectiveElements > 0) {
    console.log('✅ RollingGallery found! Taking detailed screenshots...');
    
    const perspectiveElement = page.locator('[style*="perspective"]').first();
    await perspectiveElement.screenshot({ 
      path: 'tests/screenshots/works-rolling-gallery.png' 
    });
    
    // 異なる画面サイズでのテスト
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 667 },
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(1000);
      
      await perspectiveElement.screenshot({ 
        path: `tests/screenshots/works-gallery-${viewport.name}.png` 
      });
    }
    
    // アニメーション/インタラクションテスト
    await page.setViewportSize({ width: 1920, height: 1080 });
    const motionElement = page.locator('[style*="transform"][style*="rotateY"]').first();
    
    if (await motionElement.isVisible()) {
      console.log('Testing gallery interaction...');
      
      // 初期状態
      await motionElement.screenshot({ 
        path: 'tests/screenshots/works-gallery-initial.png' 
      });
      
      // ドラッグ操作
      const box = await motionElement.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5, { steps: 10 });
        await page.mouse.up();
        
        await page.waitForTimeout(1000);
        await motionElement.screenshot({ 
          path: 'tests/screenshots/works-gallery-after-drag.png' 
        });
      }
    }
  } else {
    console.log('❌ RollingGallery not found on Works page');
  }
});