import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class aaNavBarComponent extends Component {
    @tracked selectedTheme = (document.querySelector('html').classList.value === 'dark');

    toggleDarkTheme(match) {
        this.selectedTheme = match;
        document.querySelector('html').classList.toggle('dark', match);
    }
    @action
    onToggle() {
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
            this.toggleDarkTheme(false)
        } else {
            localStorage.theme = 'dark';
            this.toggleDarkTheme(true)
        }
    }
}
