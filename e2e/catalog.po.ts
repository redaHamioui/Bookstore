import { By, element } from 'protractor';

export class CatalogPage {

  getRows() {
    return element.all(By.css('.catalog-row'));
  }
  getRowsCount() {
    return this.getRows().count();
  }
  getInRow(rowIndex: number, cssSelector: string) {
    return this.getRows().get(rowIndex)
      .element(By.css(cssSelector));
  }

  buyBook(rowIndex: number) {
    const buyButton = this.getInRow(rowIndex, 'app-buy-button button');
    buyButton.click();
  }
}
