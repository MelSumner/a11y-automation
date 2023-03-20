import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class AaNavComponent extends Component {
  @tracked isDarkTheme;
  @tracked isMobileMenuClosed = true;

  toggleDarkTheme(match) {
      this.isDarkTheme = match;
      document.querySelector('html').classList.toggle('dark', match);
  }

  constructor() {
      super(...arguments);
      if (typeof Window != "undefined") {
          this.isDarkTheme = (localStorage.theme === "dark");
      }
  }

  @action
  toggleMobileMenu() {
    this.isMobileMenuClosed = !this.isMobileMenuClosed;
    console.log(`isMobileMenuClosed: ${this.isMobileMenuClosed}`);
  }

  @action
  onChangeTheme() {
      if (localStorage.theme === 'dark') {
          localStorage.theme = 'light';
          this.toggleDarkTheme(false)
      } else {
          localStorage.theme = 'dark';
          this.toggleDarkTheme(true)
      }
  }
}
