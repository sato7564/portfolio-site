import { test, expect, Page } from '@playwright/test';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';

// スクリーンショットとページ操作のヘルパー関数
async function waitForGalleryLoad(page: Page) {
  // RollingGalleryコンポーネントがロードされるまで待機
  await page.waitForSelector('[class*="perspective"]', { timeout: 10000 });
  // 画像の読み込みを待つ
  await page.waitForTimeout(3000);
}

async function captureGalleryScreenshots(page: Page, siteName: string) {
  // デスクトップビューでスクリーンショット
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.screenshot({ 
    path: `tests/screenshots/${siteName}-desktop-full.png`,
    fullPage: true 
  });
  
  // RollingGalleryエリアのみ
  const galleryElement = await page.locator('[class*="perspective"]').first();
  await galleryElement.screenshot({ 
    path: `tests/screenshots/${siteName}-gallery-desktop.png` 
  });

  // タブレットビュー
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(1000);
  await galleryElement.screenshot({ 
    path: `tests/screenshots/${siteName}-gallery-tablet.png` 
  });

  // モバイルビュー
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(1000);
  await galleryElement.screenshot({ 
    path: `tests/screenshots/${siteName}-gallery-mobile.png` 
  });
}

async function analyzeGalleryProperties(page: Page) {
  // RollingGalleryのプロパティを取得
  const galleryContainer = page.locator('[class*="perspective"]').first();
  
  const properties = await page.evaluate(() => {
    const container = document.querySelector('[class*="perspective"]');
    const motion = container?.querySelector('[style*="transform"]');
    const images = container?.querySelectorAll('img');
    const imageContainers = container?.querySelectorAll('[class*="group"]');
    
    // 背景色とスタイル情報を取得
    const containerStyle = container ? window.getComputedStyle(container) : null;
    const motionStyle = motion ? window.getComputedStyle(motion) : null;
    
    return {
      containerExists: !!container,
      motionExists: !!motion,
      imageCount: images?.length || 0,
      containerBackground: containerStyle?.backgroundColor || 'not found',
      containerHeight: containerStyle?.height || 'not found',
      motionTransform: motionStyle?.transform || 'not found',
      imageContainerCount: imageContainers?.length || 0,
      // 最初の画像コンテナのスタイル
      firstImageContainerStyle: imageContainers?.[0] ? {
        width: window.getComputedStyle(imageContainers[0]).width,
        height: window.getComputedStyle(imageContainers[0]).height,
        backgroundColor: window.getComputedStyle(imageContainers[0]).backgroundColor,
        borderRadius: window.getComputedStyle(imageContainers[0]).borderRadius,
      } : null,
    };
  });
  
  return properties;
}

test.describe('RollingGallery Comparison', () => {
  let localProperties: any;
  let deployedProperties: any;

  test.beforeAll(async () => {
    // スクリーンショット用ディレクトリを作成
    if (!existsSync('tests/screenshots')) {
      await mkdir('tests/screenshots', { recursive: true });
    }
  });

  test('Compare local vs deployed RollingGallery - Visual', async ({ browser }) => {
    const context = await browser.newContext();
    
    // ローカルサイトをテスト
    const localPage = await context.newPage();
    console.log('Loading local site...');
    
    try {
      await localPage.goto('http://localhost:5173/', { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      await waitForGalleryLoad(localPage);
      await captureGalleryScreenshots(localPage, 'local');
      localProperties = await analyzeGalleryProperties(localPage);
      console.log('Local site analysis complete');
    } catch (error) {
      console.error('Error with local site:', error);
      localProperties = { error: 'Failed to load local site' };
    }

    // デプロイされたサイトをテスト
    const deployedPage = await context.newPage();
    console.log('Loading deployed site...');
    
    try {
      await deployedPage.goto('https://witty-naha-8507.greater.jp/', { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      await waitForGalleryLoad(deployedPage);
      await captureGalleryScreenshots(deployedPage, 'deployed');
      deployedProperties = await analyzeGalleryProperties(deployedPage);
      console.log('Deployed site analysis complete');
    } catch (error) {
      console.error('Error with deployed site:', error);
      deployedProperties = { error: 'Failed to load deployed site' };
    }

    await context.close();

    // 結果をログ出力
    console.log('\n=== COMPARISON RESULTS ===');
    console.log('Local Properties:', JSON.stringify(localProperties, null, 2));
    console.log('Deployed Properties:', JSON.stringify(deployedProperties, null, 2));
    
    // 基本的な存在チェック
    if (localProperties.error) {
      console.log('❌ Local site failed to load');
    } else {
      console.log('✅ Local site loaded successfully');
    }
    
    if (deployedProperties.error) {
      console.log('❌ Deployed site failed to load');
    } else {
      console.log('✅ Deployed site loaded successfully');
    }
  });

  test('Analyze Animation and Interaction', async ({ browser }) => {
    const context = await browser.newContext();
    
    // アニメーションテスト用の関数
    async function testAnimation(page: Page, siteName: string) {
      const gallery = page.locator('[class*="perspective"]').first();
      const motionDiv = gallery.locator('[style*="transform"]').first();
      
      // 初期状態をキャプチャ
      await motionDiv.screenshot({ 
        path: `tests/screenshots/${siteName}-animation-initial.png` 
      });
      
      // ドラッグ操作をシミュレート
      const galleryBox = await motionDiv.boundingBox();
      if (galleryBox) {
        // 左から右へドラッグ
        await page.mouse.move(galleryBox.x + galleryBox.width * 0.3, galleryBox.y + galleryBox.height * 0.5);
        await page.mouse.down();
        await page.mouse.move(galleryBox.x + galleryBox.width * 0.7, galleryBox.y + galleryBox.height * 0.5, { steps: 10 });
        await page.mouse.up();
        
        // アニメーション後の状態をキャプチャ
        await page.waitForTimeout(1000);
        await motionDiv.screenshot({ 
          path: `tests/screenshots/${siteName}-animation-after-drag.png` 
        });
      }
      
      return true;
    }

    // ローカルサイトのアニメーションテスト
    const localPage = await context.newPage();
    try {
      await localPage.goto('http://localhost:5173/');
      await waitForGalleryLoad(localPage);
      await testAnimation(localPage, 'local');
    } catch (error) {
      console.error('Local animation test failed:', error);
    }

    // デプロイサイトのアニメーションテスト
    const deployedPage = await context.newPage();
    try {
      await deployedPage.goto('https://witty-naha-8507.greater.jp/');
      await waitForGalleryLoad(deployedPage);
      await testAnimation(deployedPage, 'deployed');
    } catch (error) {
      console.error('Deployed animation test failed:', error);
    }

    await context.close();
  });

  test('Responsive Design Comparison', async ({ browser }) => {
    const context = await browser.newContext();
    
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'laptop', width: 1366, height: 768 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile-large', width: 414, height: 896 },
      { name: 'mobile-small', width: 320, height: 568 }
    ];

    for (const viewport of viewports) {
      // ローカルサイト
      const localPage = await context.newPage();
      await localPage.setViewportSize({ width: viewport.width, height: viewport.height });
      
      try {
        await localPage.goto('http://localhost:5173/');
        await waitForGalleryLoad(localPage);
        
        const galleryElement = localPage.locator('[class*="perspective"]').first();
        await galleryElement.screenshot({ 
          path: `tests/screenshots/local-${viewport.name}-${viewport.width}x${viewport.height}.png` 
        });
        
        await localPage.close();
      } catch (error) {
        console.error(`Local ${viewport.name} test failed:`, error);
        await localPage.close();
      }

      // デプロイサイト
      const deployedPage = await context.newPage();
      await deployedPage.setViewportSize({ width: viewport.width, height: viewport.height });
      
      try {
        await deployedPage.goto('https://witty-naha-8507.greater.jp/');
        await waitForGalleryLoad(deployedPage);
        
        const galleryElement = deployedPage.locator('[class*="perspective"]').first();
        await galleryElement.screenshot({ 
          path: `tests/screenshots/deployed-${viewport.name}-${viewport.width}x${viewport.height}.png` 
        });
        
        await deployedPage.close();
      } catch (error) {
        console.error(`Deployed ${viewport.name} test failed:`, error);
        await deployedPage.close();
      }
    }

    await context.close();
  });
});