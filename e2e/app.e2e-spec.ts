import { AngularStartPage } from './app.po';

describe('angular-start App', () => {
  let page: AngularStartPage;

  beforeEach(() => {
    page = new AngularStartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
