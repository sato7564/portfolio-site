import { test, expect, Page } from '@playwright/test';

test('Deployed Site RollingGallery Test', async ({ page }) => {
  console.log('Attempting to access deployed site...');
  
  try {
    // 認証をスキップするオプションを試す
    await page.goto('https://witty-naha-8507.greater.jp/', { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    
    console.log('✅ Successfully accessed deployed site');
    await page.waitForTimeout(3000);
    
    // 全体スクリーンショット
    await page.screenshot({ 
      path: 'tests/screenshots/deployed-full-page.png',
      fullPage: true 
    });
    
    // RollingGallery要素を検索
    const deployedAnalysis = await page.evaluate(() => {
      const perspectiveElements = document.querySelectorAll('[style*="perspective"]');
      const transformElements = document.querySelectorAll('[style*="transform"]');
      const galleryImages = document.querySelectorAll('img[alt="gallery"]');
      const cursorGrabElements = document.querySelectorAll('[class*="cursor-grab"]');
      const gradientElements = document.querySelectorAll('[style*="linear-gradient"]');
      
      return {
        url: window.location.href,
        title: document.title,
        perspectiveCount: perspectiveElements.length,
        transformCount: transformElements.length,
        galleryImageCount: galleryImages.length,
        cursorGrabCount: cursorGrabElements.length,
        gradientCount: gradientElements.length,
        
        // 詳細情報
        perspectiveElements: Array.from(perspectiveElements).map(el => ({
          tag: el.tagName,
          classes: el.className,
          style: el.getAttribute('style'),
        })),
        
        galleryImages: Array.from(galleryImages).slice(0, 5).map(img => ({
          src: img.src.length > 60 ? img.src.substring(0, 60) + '...' : img.src,
          alt: img.alt,
          classes: img.className,
        })),
        
        gradients: Array.from(gradientElements).map(grad => ({
          classes: grad.className,
          style: grad.getAttribute('style'),
        })),
        
        // 背景情報
        bodyBackground: window.getComputedStyle(document.body).backgroundColor,
        htmlBackground: window.getComputedStyle(document.documentElement).backgroundColor,
      };
    });
    
    console.log('=== DEPLOYED SITE ANALYSIS ===');
    console.log(JSON.stringify(deployedAnalysis, null, 2));
    
    // RollingGalleryが見つかった場合
    if (deployedAnalysis.galleryImageCount > 0 || deployedAnalysis.perspectiveCount > 0) {
      console.log('✅ RollingGallery found on deployed site!');
      
      // 詳細スクリーンショット
      const viewports = [
        { name: 'desktop', width: 1920, height: 1080 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'mobile', width: 375, height: 667 },
      ];
      
      for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.waitForTimeout(1000);
        
        await page.screenshot({ 
          path: `tests/screenshots/deployed-${viewport.name}.png`,
          fullPage: true 
        });
        
        // RollingGallery要素のスクリーンショット
        if (deployedAnalysis.perspectiveCount > 0) {
          const perspectiveElement = page.locator('[style*="perspective"]').first();
          if (await perspectiveElement.isVisible()) {
            await perspectiveElement.screenshot({ 
              path: `tests/screenshots/deployed-gallery-${viewport.name}.png` 
            });
          }
        } else if (deployedAnalysis.cursorGrabCount > 0) {
          const galleryElement = page.locator('[class*="cursor-grab"]').first();
          if (await galleryElement.isVisible()) {
            await galleryElement.screenshot({ 
              path: `tests/screenshots/deployed-gallery-${viewport.name}.png` 
            });
          }
        }
      }
      
      // インタラクションテスト
      await page.setViewportSize({ width: 1920, height: 1080 });
      const interactiveElement = page.locator('[class*="cursor-grab"]').first();
      
      if (await interactiveElement.isVisible()) {
        console.log('Testing deployed site interaction...');
        
        await interactiveElement.screenshot({ 
          path: 'tests/screenshots/deployed-interaction-initial.png' 
        });
        
        const box = await interactiveElement.boundingBox();
        if (box) {
          await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5);
          await page.mouse.down();
          await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5, { steps: 10 });
          await page.mouse.up();
          
          await page.waitForTimeout(1000);
          await interactiveElement.screenshot({ 
            path: 'tests/screenshots/deployed-interaction-after-drag.png' 
          });
        }
      }
      
    } else {
      console.log('❌ RollingGallery not found on deployed site');
    }
    
  } catch (error) {
    console.error('❌ Failed to access deployed site:', error.message);
    
    // 認証が必要な場合の情報を記録
    if (error.message.includes('401') || error.message.includes('AUTH')) {
      console.log('📋 Site requires authentication. Manual comparison needed.');
    }
    
    // エラー情報を詳細に記録
    await page.screenshot({ 
      path: 'tests/screenshots/deployed-error-screenshot.png' 
    });
    
    throw error;
  }
});