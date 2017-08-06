import { NgkingPage } from './app.po';

describe('ngking App', () => {
  let page: NgkingPage;

  beforeEach(() => {
    page = new NgkingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
