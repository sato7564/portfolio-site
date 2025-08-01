import { test, expect } from '@playwright/test';

test.describe('RollingGallery Comparison: Local vs Deployed', () => {
  test('Compare RollingGallery between local and deployed sites', async ({ browser }) => {
    // Create two browser contexts for parallel comparison
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
      console.log('Navigating to local site...');
      await localPage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
      
      console.log('Navigating to deployed site...');
      await deployedPage.goto('https://witty-naha-8507.greater.jp/admin/oka_recruit', { waitUntil: 'networkidle' });

      // Wait for both pages to load completely
      await localPage.waitForTimeout(3000);
      await deployedPage.waitForTimeout(3000);

      // Take initial full page screenshots
      await localPage.screenshot({ 
        path: 'tests/screenshots/comparison-local-home.png',
        fullPage: true 
      });
      await deployedPage.screenshot({ 
        path: 'tests/screenshots/comparison-deployed-home.png',
        fullPage: true 
      });

      // Navigate to Works page on both sites
      console.log('Navigating to Works page on both sites...');
      
      // Try different selectors for Works navigation
      const worksSelectors = [
        'a[href="/works"]',
        'a[href="#works"]', 
        'nav a:has-text("Works")',
        'a:has-text("Works")',
        '[data-testid="works-link"]',
        '.nav-link:has-text("Works")'
      ];

      let localWorksFound = false;
      let deployedWorksFound = false;

      for (const selector of worksSelectors) {
        try {
          if (!localWorksFound && await localPage.locator(selector).isVisible({ timeout: 1000 })) {
            await localPage.click(selector);
            localWorksFound = true;
            console.log(`Local: Found Works link with selector: ${selector}`);
          }
        } catch (e) {
          // Continue to next selector
        }

        try {
          if (!deployedWorksFound && await deployedPage.locator(selector).isVisible({ timeout: 1000 })) {
            await deployedPage.click(selector);
            deployedWorksFound = true;
            console.log(`Deployed: Found Works link with selector: ${selector}`);
          }
        } catch (e) {
          // Continue to next selector
        }
      }

      // If navigation didn't work, try scrolling to find Works section
      if (!localWorksFound) {
        console.log('Local: Trying to scroll to find Works section...');
        await localPage.evaluate(() => {
          const worksElement = Array.from(document.querySelectorAll('*')).find(
            el => el.textContent?.toLowerCase().includes('works') || 
                  el.textContent?.toLowerCase().includes('作品') ||
                  el.id?.toLowerCase().includes('works')
          );
          if (worksElement) {
            worksElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      if (!deployedWorksFound) {
        console.log('Deployed: Trying to scroll to find Works section...');
        await deployedPage.evaluate(() => {
          const worksElement = Array.from(document.querySelectorAll('*')).find(
            el => el.textContent?.toLowerCase().includes('works') || 
                  el.textContent?.toLowerCase().includes('作品') ||
                  el.id?.toLowerCase().includes('works')
          );
          if (worksElement) {
            worksElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      // Wait for navigation/scrolling to complete
      await localPage.waitForTimeout(3000);
      await deployedPage.waitForTimeout(3000);

      // Look for RollingGallery component with multiple possible selectors
      const gallerySelectors = [
        '[class*="RollingGallery"]',
        '[data-testid*="gallery"]',
        '[class*="rolling-gallery"]',
        '[class*="gallery"]',
        'canvas',
        '[class*="three"]',
        '[class*="webgl"]',
        '.transform-gpu',
        '[style*="transform"]'
      ];

      let localGalleryElement = null;
      let deployedGalleryElement = null;

      for (const selector of gallerySelectors) {
        try {
          const localElements = await localPage.locator(selector).all();
          const deployedElements = await deployedPage.locator(selector).all();
          
          if (localElements.length > 0) {
            localGalleryElement = localElements[0];
            console.log(`Local: Found gallery element with selector: ${selector}`);
          }
          
          if (deployedElements.length > 0) {
            deployedGalleryElement = deployedElements[0];
            console.log(`Deployed: Found gallery element with selector: ${selector}`);
          }
        } catch (e) {
          // Continue to next selector
        }
      }

      // Take screenshots of current state (Works page or after scrolling)
      await localPage.screenshot({ 
        path: 'tests/screenshots/comparison-local-works.png',
        fullPage: true 
      });
      await deployedPage.screenshot({ 
        path: 'tests/screenshots/comparison-deployed-works.png',
        fullPage: true 
      });

      // If gallery elements found, take focused screenshots
      if (localGalleryElement) {
        console.log('Taking focused screenshot of local gallery...');
        await localGalleryElement.screenshot({ 
          path: 'tests/screenshots/comparison-local-gallery-focused.png' 
        });
      }

      if (deployedGalleryElement) {
        console.log('Taking focused screenshot of deployed gallery...');
        await deployedGalleryElement.screenshot({ 
          path: 'tests/screenshots/comparison-deployed-gallery-focused.png' 
        });
      }

      // Test drag functionality if gallery elements exist
      if (localGalleryElement && deployedGalleryElement) {
        console.log('Testing drag functionality...');
        
        // Get bounding boxes
        const localBox = await localGalleryElement.boundingBox();
        const deployedBox = await deployedGalleryElement.boundingBox();
        
        if (localBox && deployedBox) {
          // Test drag on local
          await localPage.mouse.move(localBox.x + localBox.width / 2, localBox.y + localBox.height / 2);
          await localPage.mouse.down();
          await localPage.mouse.move(localBox.x + localBox.width / 2 + 100, localBox.y + localBox.height / 2);
          await localPage.mouse.up();
          await localPage.waitForTimeout(1000);
          
          // Test drag on deployed
          await deployedPage.mouse.move(deployedBox.x + deployedBox.width / 2, deployedBox.y + deployedBox.height / 2);
          await deployedPage.mouse.down();
          await deployedPage.mouse.move(deployedBox.x + deployedBox.width / 2 + 100, deployedBox.y + deployedBox.height / 2);
          await deployedPage.mouse.up();
          await deployedPage.waitForTimeout(1000);

          // Take screenshots after drag
          await localGalleryElement.screenshot({ 
            path: 'tests/screenshots/comparison-local-after-drag.png' 
          });
          await deployedGalleryElement.screenshot({ 
            path: 'tests/screenshots/comparison-deployed-after-drag.png' 
          });
        }
      }

      // Get computed styles and element information
      const localInfo = await localPage.evaluate(() => {
        const gallerySelectors = [
          '[class*="RollingGallery"]',
          '[data-testid*="gallery"]', 
          '[class*="rolling-gallery"]',
          '[class*="gallery"]',
          'canvas',
          '[class*="three"]',
          '[class*="webgl"]',
          '.transform-gpu',
          '[style*="transform"]'
        ];
        
        let element = null;
        let selector = '';
        
        for (const sel of gallerySelectors) {
          const elements = document.querySelectorAll(sel);
          if (elements.length > 0) {
            element = elements[0] as HTMLElement;
            selector = sel;
            break;
          }
        }
        
        if (!element) return { found: false };
        
        const styles = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        
        return {
          found: true,
          selector,
          className: element.className,
          id: element.id,
          tagName: element.tagName,
          dimensions: {
            width: rect.width,
            height: rect.height,
            x: rect.x,
            y: rect.y
          },
          styles: {
            position: styles.position,
            transform: styles.transform,
            opacity: styles.opacity,
            display: styles.display,
            visibility: styles.visibility,
            background: styles.background,
            backgroundColor: styles.backgroundColor,
            zIndex: styles.zIndex
          },
          hasCanvas: element.tagName === 'CANVAS',
          hasWebGL: element.tagName === 'CANVAS' && !!(element as HTMLCanvasElement).getContext('webgl'),
          childCount: element.children.length
        };
      });

      const deployedInfo = await deployedPage.evaluate(() => {
        const gallerySelectors = [
          '[class*="RollingGallery"]',
          '[data-testid*="gallery"]',
          '[class*="rolling-gallery"]', 
          '[class*="gallery"]',
          'canvas',
          '[class*="three"]',
          '[class*="webgl"]',
          '.transform-gpu',
          '[style*="transform"]'
        ];
        
        let element = null;
        let selector = '';
        
        for (const sel of gallerySelectors) {
          const elements = document.querySelectorAll(sel);
          if (elements.length > 0) {
            element = elements[0] as HTMLElement;
            selector = sel;
            break;
          }
        }
        
        if (!element) return { found: false };
        
        const styles = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        
        return {
          found: true,
          selector,
          className: element.className,
          id: element.id,
          tagName: element.tagName,
          dimensions: {
            width: rect.width,
            height: rect.height,
            x: rect.x,
            y: rect.y
          },
          styles: {
            position: styles.position,
            transform: styles.transform,
            opacity: styles.opacity,
            display: styles.display,
            visibility: styles.visibility,
            background: styles.background,
            backgroundColor: styles.backgroundColor,
            zIndex: styles.zIndex
          },
          hasCanvas: element.tagName === 'CANVAS',
          hasWebGL: element.tagName === 'CANVAS' && !!(element as HTMLCanvasElement).getContext('webgl'),
          childCount: element.children.length
        };
      });

      // Log comparison results
      console.log('\n=== RollingGallery Comparison Results ===');
      console.log('Local site info:', JSON.stringify(localInfo, null, 2));
      console.log('Deployed site info:', JSON.stringify(deployedInfo, null, 2));

      // Take final full page screenshots
      await localPage.screenshot({ 
        path: 'tests/screenshots/comparison-local-final.png',
        fullPage: true 
      });
      await deployedPage.screenshot({ 
        path: 'tests/screenshots/comparison-deployed-final.png',
        fullPage: true 
      });

    } catch (error) {
      console.error('Test error:', error);
      
      // Take error screenshots
      await localPage.screenshot({ 
        path: 'tests/screenshots/comparison-local-error.png',
        fullPage: true 
      });
      await deployedPage.screenshot({ 
        path: 'tests/screenshots/comparison-deployed-error.png',
        fullPage: true 
      });
      
      throw error;
    } finally {
      await localContext.close();
      await deployedContext.close();
    }
  });
});