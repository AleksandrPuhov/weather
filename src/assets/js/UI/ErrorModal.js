export class ErrorModal {
    constructor() {
        this.errorModalEl = document.getElementById('error');
        this.addListeners();
    }

    addListeners() {
        const modalOkBtn = this.errorModalEl.querySelector('.error-modal__btn');

        this.errorModalEl.addEventListener('click', (event) => {
            if (
                this.errorModalEl === event.target ||
                modalOkBtn === event.target
            ) {
                this.hide();
            }
        });
    }

    show(message) {
        const modalText = this.errorModalEl.querySelector('.error-modal__text');
        modalText.textContent = message;
        this.errorModalEl.classList.add('error--show');
    }
    hide() {
        this.errorModalEl.classList.remove('error--show');
    }
}
