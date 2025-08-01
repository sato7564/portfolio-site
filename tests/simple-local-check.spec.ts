import { test, expect, Page } from '@playwright/test';

test('Simple Local RollingGallery Check', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  
  // ページが完全に読み込まれるまで待機
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000);
  
  // 全体のスクリーンショットを撮影
  await page.screenshot({ 
    path: 'tests/screenshots/simple-local-full-page.png',
    fullPage: true 
  });
  
  // ページのHTMLソースを確認してRollingGalleryの存在を調べる
  const pageContent = await page.content();
  const hasRollingGallery = pageContent.includes('RollingGallery') || 
                           pageContent.includes('perspective') ||
                           pageContent.includes('transform-style');
  
  console.log('Has RollingGallery indicators:', hasRollingGallery);
  
  // すべてのクラス名を含む要素を検索
  const elementsWithPerspective = await page.locator('[style*="perspective"]').count();
  const elementsWithTransform = await page.locator('[style*="transform"]').count();
  const galleryImages = await page.locator('img[alt="gallery"]').count();
  
  console.log('Elements with perspective:', elementsWithPerspective);
  console.log('Elements with transform:', elementsWithTransform);
  console.log('Gallery images:', galleryImages);
  
  // すべてのimg要素を確認
  const allImages = await page.locator('img').count();
  console.log('Total images on page:', allImages);
  
  // ページ上のすべての重要な情報を取得
  const pageInfo = await page.evaluate(() => {
    const perspectiveElements = document.querySelectorAll('[style*="perspective"]');
    const transformElements = document.querySelectorAll('[style*="transform"]');
    const allImages = document.querySelectorAll('img');
    
    return {
      title: document.title,
      url: window.location.href,
      perspectiveCount: perspectiveElements.length,
      transformCount: transformElements.length,
      imageCount: allImages.length,
      perspectiveElements: Array.from(perspectiveElements).map(el => ({
        tagName: el.tagName,
        className: el.className,
        style: el.getAttribute('style'),
      })),
      transformElements: Array.from(transformElements).slice(0, 5).map(el => ({
        tagName: el.tagName,
        className: el.className,
        style: el.getAttribute('style'),
      })),
      allImageSources: Array.from(allImages).slice(0, 10).map(img => ({
        src: img.src,
        alt: img.alt,
        className: img.className,
      })),
    };
  });
  
  console.log('\n=== PAGE ANALYSIS ===');
  console.log(JSON.stringify(pageInfo, null, 2));
  
  // 特定の要素が見つかった場合はスクリーンショットを撮影
  if (elementsWithPerspective > 0) {
    const perspectiveElement = page.locator('[style*="perspective"]').first();
    await perspectiveElement.screenshot({ 
      path: 'tests/screenshots/simple-perspective-element.png' 
    });
  }
  
  if (elementsWithTransform > 0) {
    const transformElement = page.locator('[style*="transform"]').first();
    await transformElement.screenshot({ 
      path: 'tests/screenshots/simple-transform-element.png' 
    });
  }
});