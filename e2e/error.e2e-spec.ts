import {
  element,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Error', () => {
  it('should match previous screenshot for broken type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-broken-lg'
    });
  });

  it('should match previous screenshot for broken type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-broken');
    expect('#screenshot-error-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-broken-xs'
    });
  });

  it('should match previous screenshot for notfound type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-notfound').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-notfound-lg'
    });
  });

  it('should match previous screenshot for notfound type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-notfound');
    expect('#screenshot-error-notfound').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-notfound-xs'
    });
  });

  it('should match previous screenshot for construction type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-construction').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-construction-lg'
    });
  });

  it('should match previous screenshot for construction type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-construction');
    expect('#screenshot-error-construction').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-construction-xs'
    });
  });

  it('should match previous screenshot for security type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-security').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-security-lg'
    });
  });

  it('should match previous screenshot for security type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-security');
    expect('#screenshot-error-security').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-security-xs'
    });
  });

  it('should match previous screenshot for custom type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-custom').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-lg'
    });
  });

  it('should match previous screenshot for custom type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-custom');
    expect('#screenshot-error-custom').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-xs'
    });
  });

  it('should match previous screenshot for custom title and description', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-custom-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-broken-lg'
    });
  });

  it('should match previous screenshot for custom title and description (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-custom-broken');
    expect('#screenshot-error-custom-broken').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-custom-broken-xs'
    });
  });

  it('should match previous error modal form screenshot', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-error-modal')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-lg'
    });
  });

  it('should match previous error modal form screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-test-error-modal')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-xs'
    });
  });

  it('should match previous error modal form screenshot', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-error-modal-long-description')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-long-lg'
    });
  });

  it('should match previous error modal form screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-test-error-modal-long-description')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'error-modal-long-xs'
    });
  });
});
