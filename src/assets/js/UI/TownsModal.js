export class TownsModal {
    constructor() {
        this.townsListEl = document.getElementById('towns');
    }

    townsHide() {
        // this.townsListEl.classList.remove('towns--show');
    }

    townsToggle() {
        this.townsListEl.classList.toggle('towns--show');
    }
}
