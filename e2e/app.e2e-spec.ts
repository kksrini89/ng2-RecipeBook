import { Ng2RecipeBookLatestPage } from './app.po';

describe('ng2-recipe-book-latest App', function() {
  let page: Ng2RecipeBookLatestPage;

  beforeEach(() => {
    page = new Ng2RecipeBookLatestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
