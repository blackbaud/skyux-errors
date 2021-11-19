import { element, by } from 'protractor';

import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

describe('Error', () => {
  it('should match previous screenshot for broken type', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-error-broken');
    expect('#screenshot-error-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-broken-lg',
    });
  });

  it('should match previous screenshot for broken type (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-error-broken');
    expect('#screenshot-error-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-broken-xs',
    });
  });

  it('should match previous screenshot for notfound type', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-error-notfound');
    expect('#screenshot-error-notfound').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-notfound-lg',
    });
  });

  it('should match previous screenshot for notfound type (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-error-notfound');
    expect('#screenshot-error-notfound').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-notfound-xs',
    });
  });

  it('should match previous screenshot for construction type', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-error-construction');
    expect('#screenshot-error-construction').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-construction-lg',
    });
  });

  it('should match previous screenshot for construction type (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-error-construction');
    expect('#screenshot-error-construction').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-construction-xs',
    });
  });

  it('should match previous screenshot for security type', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-error-security');
    expect('#screenshot-error-security').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-security-lg',
    });
  });

  it('should match previous screenshot for security type (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-error-security');
    expect('#screenshot-error-security').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-security-xs',
    });
  });

  it('should match previous screenshot for custom type', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-error-custom');
    expect('#screenshot-error-custom').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-lg',
    });
  });

  it('should match previous screenshot for custom type (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-error-custom');
    expect('#screenshot-error-custom').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-xs',
    });
  });

  it('should match previous screenshot for custom title and description', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-error-custom-broken');
    expect('#screenshot-error-custom-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-broken-lg',
    });
  });

  it('should match previous screenshot for custom title and description (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-error-custom-broken');
    expect('#screenshot-error-custom-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-broken-xs',
    });
  });

  it('should match previous error modal form screenshot', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await element(by.css('.sky-test-error-modal')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-lg',
    });
  });

  it('should match previous error modal form screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await element(by.css('.sky-test-error-modal')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-xs',
    });
  });

  it('should match previous error modal form screenshot', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await element(by.css('.sky-test-error-modal-long-description')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-long-lg',
    });
  });

  it('should match previous error modal form screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await element(by.css('.sky-test-error-modal-long-description')).click();
    await SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-long-xs',
    });
  });

  it('should match previous screenshot for a hidden image', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-error-hidden-image');
    expect('#screenshot-error-hidden-image').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-hidden-image-lg',
    });
  });

  it('should match previous screenshot for a hidden image (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/error');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-error-hidden-image');
    expect('#screenshot-error-hidden-image').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-hidden-image-xs',
    });
  });
});
