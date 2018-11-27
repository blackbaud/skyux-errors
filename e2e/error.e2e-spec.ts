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
    expect('#screenshot-error-broken').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for broken type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-broken');
    expect('#screenshot-error-broken').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for notfound type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-notfound').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for notfound type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-notfound');
    expect('#screenshot-error-notfound').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for construction type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-construction').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for construction type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-construction');
    expect('#screenshot-error-construction').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for security type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-security').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for security type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-security');
    expect('#screenshot-error-security').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for custom type', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-custom').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for custom type (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-custom');
    expect('#screenshot-error-custom').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for custom type with a default image', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-error-custom-default-image').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot for custom type with a default image (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-error-custom-default-image');
    expect('#screenshot-error-custom-default-image').toMatchBaselineScreenshot(done);
  });

  it('should match previous error modal form screenshot', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-error-modal')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous error modal form screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-test-error-modal')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous error modal form screenshot', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-error-modal-long-description')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous error modal form screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/error');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-test-error-modal-long-description')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });
});
