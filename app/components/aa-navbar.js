import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
export default class aaNavBarComponent extends Component {
    @tracked isDarkTheme;
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
