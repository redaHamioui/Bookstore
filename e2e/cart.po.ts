import { By, element } from 'protractor';

export class CartPage {

  getRows() {
    return element.all(By.css('.cart-row'));
  }
  getRowsCount() {
    return this.getRows().count();
  }
  getInRow(rowIndex: number, cssSelector: string) {
    return this.getRows().get(rowIndex)
      .element(By.css(cssSelector));
  }

}
