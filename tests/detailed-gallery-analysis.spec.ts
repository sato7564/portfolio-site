import { test, expect, Page } from '@playwright/test';

test('Detailed RollingGallery Analysis', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  // RollingGalleryコンポーネントの詳細分析
  const galleryAnalysis = await page.evaluate(() => {
    // RollingGalleryコンテナを特定
    const galleryContainer = document.querySelector('.flex.h-full.cursor-grab.items-center.justify-center');
    const parentContainer = galleryContainer?.parentElement;
    const grandparentContainer = parentContainer?.parentElement;
    
    // 背景とグラデーション要素
    const gradientElements = document.querySelectorAll('[style*="linear-gradient"]');
    
    // 画像とその親要素
    const galleryImages = document.querySelectorAll('img[alt="gallery"]');
    const imageContainers = document.querySelectorAll('.group.absolute.flex.h-fit.items-center.justify-center');
    
    return {
      // コンテナ階層情報
      galleryContainer: galleryContainer ? {
        className: galleryContainer.className,
        style: galleryContainer.getAttribute('style'),
        computedStyle: {
          width: window.getComputedStyle(galleryContainer).width,
          height: window.getComputedStyle(galleryContainer).height,
          transform: window.getComputedStyle(galleryContainer).transform,
          transformStyle: window.getComputedStyle(galleryContainer).transformStyle,
          perspective: window.getComputedStyle(galleryContainer).perspective,
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
        }
      } : null,
      
      grandparentContainer: grandparentContainer ? {
        className: grandparentContainer.className,
        style: grandparentContainer.getAttribute('style'),
        computedStyle: {
          perspective: window.getComputedStyle(grandparentContainer).perspective,
          height: window.getComputedStyle(grandparentContainer).height,
          overflow: window.getComputedStyle(grandparentContainer).overflow,
          background: window.getComputedStyle(grandparentContainer).background,
        }
      } : null,
      
      // グラデーション情報
      gradients: Array.from(gradientElements).map((grad, index) => ({
        index,
        className: grad.className,
        style: grad.getAttribute('style'),
        computedStyle: {
          background: window.getComputedStyle(grad).background,
          width: window.getComputedStyle(grad).width,
          height: window.getComputedStyle(grad).height,
          position: window.getComputedStyle(grad).position,
          zIndex: window.getComputedStyle(grad).zIndex,
        }
      })),
      
      // 画像コンテナ情報
      imageContainerSample: Array.from(imageContainers).slice(0, 3).map((container, index) => ({
        index,
        className: container.className,
        style: container.getAttribute('style'),
        computedStyle: {
          width: window.getComputedStyle(container).width,
          height: window.getComputedStyle(container).height,
          transform: window.getComputedStyle(container).transform,
          backfaceVisibility: window.getComputedStyle(container).backfaceVisibility,
        },
        childImageSrc: container.querySelector('img')?.src || null,
      })),
      
      // 画像情報
      imageSample: Array.from(galleryImages).slice(0, 5).map((img, index) => ({
        index,
        src: img.src.includes('localhost') ? 
             img.src.replace('http://localhost:5173', '[LOCAL]') : 
             img.src.length > 50 ? img.src.substring(0, 50) + '...' : img.src,
        alt: img.alt,
        className: img.className,
        computedStyle: {
          maxWidth: window.getComputedStyle(img).maxWidth,
          maxHeight: window.getComputedStyle(img).maxHeight,
          objectFit: window.getComputedStyle(img).objectFit,
        },
        parentBackground: img.parentElement ? 
                         window.getComputedStyle(img.parentElement).backgroundColor : null,
      })),
      
      // 統計情報
      stats: {
        totalImages: galleryImages.length,
        totalImageContaivers: imageContainers.length,
        totalGradients: gradientElements.length,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
      }
    };
  });
  
  console.log('=== DETAILED ROLLING GALLERY ANALYSIS ===');
  console.log(JSON.stringify(galleryAnalysis, null, 2));
  
  // RollingGalleryのフル画面キャプチャ（デスクトップ）
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(1000);
  
  // 全体のスクリーンショット
  await page.screenshot({ 
    path: 'tests/screenshots/detailed-full-desktop.png',
    fullPage: true 
  });
  
  // RollingGalleryエリアのみ（より精密に）
  const galleryElement = page.locator('.flex.h-full.cursor-grab.items-center.justify-center').first();
  if (await galleryElement.isVisible()) {
    await galleryElement.screenshot({ 
      path: 'tests/screenshots/detailed-gallery-only.png' 
    });
    
    // 親コンテナも含めてキャプチャ
    const parentElement = page.locator('.flex.h-full.items-center.justify-center').first();
    if (await parentElement.isVisible()) {
      await parentElement.screenshot({ 
        path: 'tests/screenshots/detailed-gallery-with-parent.png' 
      });
    }
  }
  
  // モバイルでのテスト
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(1000);
  
  await page.screenshot({ 
    path: 'tests/screenshots/detailed-mobile-full.png',
    fullPage: true 
  });
  
  if (await galleryElement.isVisible()) {
    await galleryElement.screenshot({ 
      path: 'tests/screenshots/detailed-mobile-gallery.png' 
    });
  }
  
  // タブレットでのテスト
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(1000);
  
  if (await galleryElement.isVisible()) {
    await galleryElement.screenshot({ 
      path: 'tests/screenshots/detailed-tablet-gallery.png' 
    });
  }
  
  // インタラクションテスト（デスクトップに戻す）
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(1000);
  
  if (await galleryElement.isVisible()) {
    console.log('Testing gallery interactions...');
    
    // 初期状態
    await galleryElement.screenshot({ 
      path: 'tests/screenshots/detailed-interaction-initial.png' 
    });
    
    // ドラッグ操作のテスト
    const galleryBox = await galleryElement.boundingBox();
    if (galleryBox) {
      const startX = galleryBox.x + galleryBox.width * 0.3;
      const startY = galleryBox.y + galleryBox.height * 0.5;
      const endX = galleryBox.x + galleryBox.width * 0.7;
      
      await page.mouse.move(startX, startY);
      await page.mouse.down();
      await page.mouse.move(endX, startY, { steps: 15 });
      await galleryElement.screenshot({ 
        path: 'tests/screenshots/detailed-interaction-during-drag.png' 
      });
      await page.mouse.up();
      
      // ドラッグ後の状態
      await page.waitForTimeout(1000);
      await galleryElement.screenshot({ 
        path: 'tests/screenshots/detailed-interaction-after-drag.png' 
      });
      
      // 逆方向のドラッグ
      await page.mouse.move(endX, startY);
      await page.mouse.down();
      await page.mouse.move(startX, startY, { steps: 15 });
      await page.mouse.up();
      await page.waitForTimeout(1000);
      await galleryElement.screenshot({ 
        path: 'tests/screenshots/detailed-interaction-reverse-drag.png' 
      });
    }
    
    console.log('✅ Gallery interaction tests completed');
  }
  
  // 背景色の詳細チェック
  const backgroundInfo = await page.evaluate(() => {
    const body = document.body;
    const html = document.documentElement;
    const galleryParent = document.querySelector('.relative.h-\\[180px\\].sm\\:h-\\[320px\\].w-full.overflow-hidden');
    
    return {
      bodyBackground: window.getComputedStyle(body).backgroundColor,
      htmlBackground: window.getComputedStyle(html).backgroundColor,
      galleryParentBackground: galleryParent ? window.getComputedStyle(galleryParent).backgroundColor : null,
      galleryParentClass: galleryParent?.className || null,
    };
  });
  
  console.log('=== BACKGROUND ANALYSIS ===');
  console.log(JSON.stringify(backgroundInfo, null, 2));
});