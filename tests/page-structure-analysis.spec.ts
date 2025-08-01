import { test, expect, Page } from '@playwright/test';

test('Complete Page Structure Analysis', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000);
  
  // ページ全体のHTML構造を分析
  const pageStructure = await page.evaluate(() => {
    // すべてのクラス名を含む要素を収集
    const allElements = document.querySelectorAll('*');
    const uniqueClasses = new Set();
    const elementsWithId = [];
    const elementsWithDataAttr = [];
    
    Array.from(allElements).forEach(el => {
      // クラス名を収集
      if (el.className) {
        el.className.split(' ').forEach(cls => {
          if (cls.trim()) uniqueClasses.add(cls.trim());
        });
      }
      
      // ID付き要素
      if (el.id) {
        elementsWithId.push({
          tag: el.tagName,
          id: el.id,
          classes: el.className
        });
      }
      
      // data属性付き要素
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.startsWith('data-')) {
          elementsWithDataAttr.push({
            tag: el.tagName,
            attr: attr.name,
            value: attr.value,
            classes: el.className
          });
        }
      });
    });
    
    // RollingGallery関連の要素を特別に検索
    const rollingGalleryElements = [];
    const perspectiveElements = document.querySelectorAll('[style*="perspective"]');
    const transformElements = document.querySelectorAll('[style*="transform"]');
    const galleryImages = document.querySelectorAll('img[alt="gallery"]');
    const cursorGrabElements = document.querySelectorAll('[class*="cursor-grab"]');
    const preserveElements = document.querySelectorAll('[class*="preserve-3d"]');
    
    // 各タイプの要素を詳細に記録
    [perspectiveElements, transformElements, galleryImages, cursorGrabElements, preserveElements]
      .forEach((nodeList, index) => {
        const types = ['perspective', 'transform', 'gallery-img', 'cursor-grab', 'preserve-3d'];
        Array.from(nodeList).forEach(el => {
          rollingGalleryElements.push({
            type: types[index],
            tag: el.tagName,
            classes: el.className,
            style: el.getAttribute('style'),
            id: el.id || null,
            textContent: el.textContent?.substring(0, 50) || null,
            parentClasses: el.parentElement?.className || null,
          });
        });
      });
    
    return {
      url: window.location.href,
      title: document.title,
      uniqueClassCount: uniqueClasses.size,
      uniqueClasses: Array.from(uniqueClasses).sort(),
      elementsWithId,
      elementsWithDataAttr: elementsWithDataAttr.slice(0, 10),
      rollingGalleryElements,
      bodyClasses: document.body.className,
      htmlClasses: document.documentElement.className,
      
      // ナビゲーション関連
      navElements: Array.from(document.querySelectorAll('nav, [role="navigation"]')).map(nav => ({
        tag: nav.tagName,
        classes: nav.className,
        textContent: nav.textContent?.substring(0, 100) || null,
      })),
      
      // リンク要素
      links: Array.from(document.querySelectorAll('a')).slice(0, 10).map(link => ({
        href: link.href,
        textContent: link.textContent?.trim(),
        classes: link.className,
      })),
      
      // 基本統計
      stats: {
        totalElements: allElements.length,
        totalImages: document.querySelectorAll('img').length,
        totalDivs: document.querySelectorAll('div').length,
        totalButtons: document.querySelectorAll('button').length,
      }
    };
  });
  
  console.log('=== COMPLETE PAGE STRUCTURE ANALYSIS ===');
  console.log(JSON.stringify(pageStructure, null, 2));
  
  // ページのスクリーンショット
  await page.screenshot({ 
    path: 'tests/screenshots/structure-analysis-full.png',
    fullPage: true 
  });
  
  // 「作品を見る」ボタンがあるかチェックして、あればクリック
  const worksButton = page.locator('text=作品を見る');
  if (await worksButton.isVisible()) {
    console.log('Found "作品を見る" button, clicking...');
    await worksButton.click();
    await page.waitForTimeout(3000);
    
    // クリック後の分析
    const afterClickAnalysis = await page.evaluate(() => {
      const perspectiveElements = document.querySelectorAll('[style*="perspective"]');
      const transformElements = document.querySelectorAll('[style*="transform"]');
      const galleryImages = document.querySelectorAll('img[alt="gallery"]');
      
      return {
        url: window.location.href,
        perspectiveCount: perspectiveElements.length,
        transformCount: transformElements.length,
        galleryImageCount: galleryImages.length,
        
        // 詳細な要素情報
        perspectiveDetails: Array.from(perspectiveElements).map(el => ({
          tag: el.tagName,
          classes: el.className,
          style: el.getAttribute('style'),
        })),
        
        galleryImageDetails: Array.from(galleryImages).slice(0, 5).map(img => ({
          src: img.src.includes('localhost') ? '[LOCAL]' + img.src.substring(img.src.lastIndexOf('/')) : 
               img.src.length > 60 ? img.src.substring(0, 60) + '...' : img.src,
          alt: img.alt,
          classes: img.className,
        })),
      };
    });
    
    console.log('=== AFTER CLICKING 作品を見る ===');
    console.log(JSON.stringify(afterClickAnalysis, null, 2));
    
    await page.screenshot({ 
      path: 'tests/screenshots/structure-after-works-click.png',
      fullPage: true 
    });
    
    // RollingGalleryが見つかった場合の詳細キャプチャ
    if (afterClickAnalysis.galleryImageCount > 0) {
      console.log('✅ RollingGallery found after clicking! Taking detailed screenshots...');
      
      // 3D transform要素をキャプチャ
      const transformElements = page.locator('[style*="transform"]');
      const count = await transformElements.count();
      
      if (count > 0) {
        // 最初のtransform要素（おそらくRollingGalleryのメインコンテナ）
        const mainTransform = transformElements.first();
        await mainTransform.screenshot({ 
          path: 'tests/screenshots/structure-rolling-gallery-main.png' 
        });
        
        // 画像を含むtransform要素
        for (let i = 0; i < Math.min(count, 5); i++) {
          const element = transformElements.nth(i);
          const hasImage = await element.locator('img').count() > 0;
          if (hasImage) {
            await element.screenshot({ 
              path: `tests/screenshots/structure-gallery-element-${i}.png` 
            });
          }
        }
      }
      
      // レスポンシブテスト
      const viewports = [
        { name: 'mobile', width: 375, height: 667 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'desktop', width: 1920, height: 1080 },
      ];
      
      for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.waitForTimeout(1000);
        
        await page.screenshot({ 
          path: `tests/screenshots/structure-responsive-${viewport.name}.png`,
          clip: { x: 0, y: 0, width: viewport.width, height: Math.min(viewport.height, 800) }
        });
      }
    }
  } else {
    console.log('❌ "作品を見る" button not found');
    
    // 他の可能なナビゲーション要素を確認
    const allButtons = await page.locator('button').allTextContents();
    const allLinks = await page.locator('a').allTextContents();
    
    console.log('Available buttons:', allButtons);
    console.log('Available links:', allLinks);
  }
});