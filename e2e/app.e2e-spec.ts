import { GeoscopePage } from './app.po';

describe('geoscope App', () => {
  let page: GeoscopePage;

  beforeEach(() => {
    page = new GeoscopePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
