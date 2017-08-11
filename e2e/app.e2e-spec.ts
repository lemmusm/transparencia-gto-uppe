import { PlantillaAngularPage } from './app.po';

describe('plantilla-angular App', () => {
  let page: PlantillaAngularPage;

  beforeEach(() => {
    page = new PlantillaAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
