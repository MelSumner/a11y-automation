import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class aaNavBarComponent extends Component {
    @tracked isDarkTheme = true;

    toggleDarkTheme(match) {
        this.isDarkTheme = match;
        document.querySelector('html').classList.toggle('dark', match);
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
