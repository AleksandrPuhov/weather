export class Spinner {
    constructor() {
        this.spinnerEl = document.getElementById('update');
    }
    show() {
        this.spinnerEl.classList.add('update--show');
    }
    hide() {
        this.spinnerEl.classList.remove('update--show');
    }
}
