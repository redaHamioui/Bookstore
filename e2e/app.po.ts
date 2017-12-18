import { browser, By, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(By.css('app-root h1')).getText();
  }

  getMenuLink(linkText: string) {
    return element(By.css('app-menu'))
      .element(By.linkText(linkText));
  }
}
