import { EnterpriseDashbaordPage } from './app.po';

describe('enterprise-dashbaord App', function() {
  let page: EnterpriseDashbaordPage;

  beforeEach(() => {
    page = new EnterpriseDashbaordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
