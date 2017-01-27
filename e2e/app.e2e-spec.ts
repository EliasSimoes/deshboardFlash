import { DeshDoisPage } from './app.po';

describe('desh-dois App', function() {
  let page: DeshDoisPage;

  beforeEach(() => {
    page = new DeshDoisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
