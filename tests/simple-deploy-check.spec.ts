import { test, expect } from '@playwright/test';

test.describe('Deploy Verification', () => {
  test('Check if deployed site matches local changes', async ({ browser }) => {
    // Create contexts
    const localContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const deployedContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      httpCredentials: {
        username: 'admin',
        password: 'oka_recruit'
      }
    });

    const localPage = await localContext.newPage();
    const deployedPage = await deployedContext.newPage();

    try {
      // Navigate to both sites
      console.log('Loading local site...');
      await localPage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
      
      console.log('Loading deployed site...');
      await deployedPage.goto('https://witty-naha-8507.greater.jp/admin/oka_recruit', { waitUntil: 'networkidle' });

      // Wait for pages to fully load
      await localPage.waitForTimeout(2000);
      await deployedPage.waitForTimeout(2000);

      // Take full page screenshots
      await localPage.screenshot({ 
        path: 'tests/screenshots/local-full-page.png',
        fullPage: true 
      });
      await deployedPage.screenshot({ 
        path: 'tests/screenshots/deployed-full-page.png',
        fullPage: true 
      });

      // Look for RollingGallery elements
      const localGallery = await localPage.locator('[style*="transform"]').first();
      const deployedGallery = await deployedPage.locator('[style*="transform"]').first();

      // Check if galleries exist
      const localExists = await localGallery.count() > 0;
      const deployedExists = await deployedGallery.count() > 0;

      console.log('Local gallery found:', localExists);
      console.log('Deployed gallery found:', deployedExists);

      if (localExists && deployedExists) {
        // Take focused gallery screenshots
        await localGallery.screenshot({ 
          path: 'tests/screenshots/local-gallery.png' 
        });
        await deployedGallery.screenshot({ 
          path: 'tests/screenshots/deployed-gallery.png' 
        });

        // Get gallery dimensions
        const localBox = await localGallery.boundingBox();
        const deployedBox = await deployedGallery.boundingBox();

        console.log('Local gallery dimensions:', localBox);
        console.log('Deployed gallery dimensions:', deployedBox);
      }

      // Check for メービードゥーン project data
      const localContent = await localPage.content();
      const deployedContent = await deployedPage.content();

      const localHasVideo = localContent.includes('wd9o9eifRZk');
      const deployedHasVideo = deployedContent.includes('wd9o9eifRZk');

      console.log('Local has メービードゥーン video:', localHasVideo);
      console.log('Deployed has メービードゥーン video:', deployedHasVideo);

      console.log('Comparison complete. Check screenshots in tests/screenshots/');

    } catch (error) {
      console.error('Test error:', error);
      throw error;
    } finally {
      await localContext.close();
      await deployedContext.close();
    }
  });
});