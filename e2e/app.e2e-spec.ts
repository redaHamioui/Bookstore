import { AppPage } from './app.po';
import {CatalogPage} from './catalog.po';
import {CartPage} from './cart.po';

describe('bookstore App', () => {
  const appPage = new AppPage();
  const catalogPage = new CatalogPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    appPage.navigateTo();
  });

  it('should display welcome message', () => {
    expect(appPage.getTitleText())
      .toEqual('Bookstore');
  });

  it('should display a list of more than 10 books', () => {
    expect(catalogPage.getRowsCount())
      .toBeGreaterThan(10);
  });

  fit('show add a book to cart', () => {
    const catalogAuthor0 = catalogPage.getInRow(0, '.catalog-author');
    expect(catalogAuthor0.getText()).toContain('Alain');
    catalogPage.buyBook(0);

    expect(cartPage.getRowsCount()).toEqual(1);
    const cartAuthor0 = cartPage.getInRow(0, '.cart-author');
    const cartQuantity0 = cartPage.getInRow(0, '.cart-quantity input');
    const cartAmount0 = cartPage.getInRow(0, '.cart-amount');
    expect(cartAuthor0.getText()).toContain('Alain');
    expect(cartQuantity0.getAttribute('value')).toEqual('1');
    expect(cartAmount0.getText()).toEqual('10,90 €');

    cartQuantity0.clear();
    cartQuantity0.sendKeys('2');
    expect(cartAmount0.getText()).toEqual('21,80 €');

    const catalogMenuLink = appPage.getMenuLink('Catalogue');
    catalogMenuLink.click();
    catalogPage.buyBook(1);

    expect(cartPage.getRowsCount()).toEqual(2);
  });


});
