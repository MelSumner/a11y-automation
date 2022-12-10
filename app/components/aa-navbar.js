import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class aaNavBarComponent extends Component {
    @tracked selectedTheme = false;

    toggleDarkTheme(match) {
        this.selectedTheme = match;
        document.querySelector('html').classList.toggle('dark', match);
    }
    constructor() {
        super(...arguments);
        if (typeof Window != "undefined") {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && matchMedia('(prefers-color-scheme: dark)').matches)) {
                localStorage.theme = 'dark';
                this.toggleDarkTheme(true)
            } else {
                localStorage.theme = 'light';
                this.toggleDarkTheme(false)
            }
        }
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
