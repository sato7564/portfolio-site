import { test, expect, Page } from '@playwright/test';

test('Final Local RollingGallery Analysis', async ({ page }) => {
  console.log('=== FINAL LOCAL ROLLING GALLERY ANALYSIS ===');
  
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000);
  
  // スクリーンショット（初期ページ）
  await page.screenshot({ 
    path: 'tests/screenshots/final-home-page.png',
    fullPage: true 
  });
  
  // 現在のページでRollingGallery要素を検索
  const initialCheck = await page.evaluate(() => {
    const galleryImages = document.querySelectorAll('img[alt="gallery"]');
    const transformElements = document.querySelectorAll('[style*="transform"]');
    const perspectiveElements = document.querySelectorAll('[style*="perspective"]');
    const cursorGrab = document.querySelectorAll('[class*="cursor-grab"]');
    
    return {
      galleryImages: galleryImages.length,
      transformElements: transformElements.length,
      perspectiveElements: perspectiveElements.length,
      cursorGrab: cursorGrab.length,
      hasRollingGallery: galleryImages.length > 0 || cursorGrab.length > 0,
    };
  });
  
  console.log('Initial page RollingGallery check:', initialCheck);
  
  if (initialCheck.hasRollingGallery) {
    console.log('✅ RollingGallery found on home page!');
    
    // 詳細キャプチャ
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 667 },
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(1000);
      
      await page.screenshot({ 
        path: `tests/screenshots/final-home-${viewport.name}.png`,
        fullPage: true 
      });
      
      // ギャラリー要素のみ
      const galleryElement = page.locator('[class*="cursor-grab"]').first();
      if (await galleryElement.isVisible()) {
        await galleryElement.screenshot({ 
          path: `tests/screenshots/final-home-gallery-${viewport.name}.png` 
        });
      }
    }
  }
  
  // 「作品を見る」ボタンまたは類似のナビゲーションを探す
  const navigationButtons = await page.locator('button, a').allTextContents();
  console.log('Available navigation:', navigationButtons);
  
  // いくつかの可能なリンクを試す
  const possibleLinks = ['作品を見る', 'Works', 'プロジェクト', 'ポートフォリオ'];
  let navigationFound = false;
  
  for (const linkText of possibleLinks) {
    const element = page.locator(`text=${linkText}`);
    if (await element.isVisible({ timeout: 1000 })) {
      console.log(`Found navigation: ${linkText}`);
      await element.click();
      navigationFound = true;
      break;
    }
  }
  
  if (!navigationFound) {
    // URLハッシュでナビゲーションを試す
    await page.goto('http://localhost:5173/#works');
    await page.waitForTimeout(2000);
  }
  
  await page.waitForTimeout(3000);
  
  // ナビゲーション後の分析
  const afterNavigation = await page.evaluate(() => {
    const galleryImages = document.querySelectorAll('img[alt="gallery"]');
    const transformElements = document.querySelectorAll('[style*="transform"]');
    const perspectiveElements = document.querySelectorAll('[style*="perspective"]');
    const cursorGrab = document.querySelectorAll('[class*="cursor-grab"]');
    const gradients = document.querySelectorAll('[style*="linear-gradient"]');
    
    // 詳細な要素情報
    const galleryDetails = Array.from(galleryImages).slice(0, 5).map(img => ({
      src: img.src.includes('localhost') ? 
           '[LOCAL]' + img.src.substring(img.src.lastIndexOf('/')) : 
           img.src.length > 50 ? img.src.substring(0, 50) + '...' : img.src,
      alt: img.alt,
      className: img.className,
      parentStyle: img.parentElement?.getAttribute('style') || null,
    }));
    
    const transformDetails = Array.from(transformElements).slice(0, 3).map(el => ({
      tagName: el.tagName,
      className: el.className,
      style: el.getAttribute('style'),
    }));
    
    return {
      url: window.location.href,
      galleryImages: galleryImages.length,
      transformElements: transformElements.length,
      perspectiveElements: perspectiveElements.length,
      cursorGrab: cursorGrab.length,
      gradients: gradients.length,
      galleryDetails,
      transformDetails,
      hasRollingGallery: galleryImages.length > 0,
      
      // 背景色情報
      backgroundColor: window.getComputedStyle(document.body).backgroundColor,
      
      // ビューポート情報
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    };
  });
  
  console.log('After navigation analysis:', JSON.stringify(afterNavigation, null, 2));
  
  await page.screenshot({ 
    path: 'tests/screenshots/final-after-navigation.png',
    fullPage: true 
  });
  
  if (afterNavigation.hasRollingGallery) {
    console.log('✅ RollingGallery confirmed after navigation!');
    
    // 最終的な詳細キャプチャ
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 667 },
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(1000);
      
      await page.screenshot({ 
        path: `tests/screenshots/final-works-${viewport.name}.png`,
        fullPage: true 
      });
      
      // ギャラリー要素
      const galleryElement = page.locator('[class*="cursor-grab"]').first();
      if (await galleryElement.isVisible()) {
        await galleryElement.screenshot({ 
          path: `tests/screenshots/final-gallery-${viewport.name}.png` 
        });
        
        // インタラクション テスト（デスクトップのみ）
        if (viewport.name === 'desktop') {
          const box = await galleryElement.boundingBox();
          if (box) {
            // 初期状態
            await galleryElement.screenshot({ 
              path: 'tests/screenshots/final-interaction-initial.png' 
            });
            
            // ドラッグ操作
            await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5);
            await page.mouse.down();
            await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5, { steps: 10 });
            await page.mouse.up();
            
            await page.waitForTimeout(1000);
            await galleryElement.screenshot({ 
              path: 'tests/screenshots/final-interaction-after-drag.png' 
            });
            
            console.log('✅ Interaction test completed');
          }
        }
      }
    }
    
    // 技術的詳細の最終確認
    const technicalDetails = await page.evaluate(() => {
      const galleryContainer = document.querySelector('[class*="cursor-grab"]');
      const parentContainer = galleryContainer?.parentElement;
      
      return {
        galleryContainer: galleryContainer ? {
          className: galleryContainer.className,
          style: galleryContainer.getAttribute('style'),
          computedStyle: {
            width: window.getComputedStyle(galleryContainer).width,
            height: window.getComputedStyle(galleryContainer).height,
            transform: window.getComputedStyle(galleryContainer).transform,
            transformStyle: window.getComputedStyle(galleryContainer).transformStyle,
          }
        } : null,
        
        parentContainer: parentContainer ? {
          className: parentContainer.className,
          style: parentContainer.getAttribute('style'),
          computedStyle: {
            perspective: window.getComputedStyle(parentContainer).perspective,
            transformStyle: window.getComputedStyle(parentContainer).transformStyle,
            height: window.getComputedStyle(parentContainer).height,
            overflow: window.getComputedStyle(parentContainer).overflow,
            backgroundColor: window.getComputedStyle(parentContainer).backgroundColor,
          }
        } : null,
      };
    });
    
    console.log('=== TECHNICAL DETAILS ===');
    console.log(JSON.stringify(technicalDetails, null, 2));
    
  } else {
    console.log('❌ RollingGallery not found after navigation');
  }
  
  console.log('=== ANALYSIS COMPLETE ===');
});