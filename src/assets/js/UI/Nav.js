export class Nav {
    constructor() {
        this.addListeners();
    }

    addListeners() {
        const headerEl = document.getElementById('header');
        const temperatureEl = document.getElementById('temperature');
        const todayBtnEl = document.getElementById('today-btn');
        const weekBtnEl = document.getElementById('week-btn');

        todayBtnEl.addEventListener('click', () => {
            headerEl.classList.remove('header--show-week');
            temperatureEl.classList.remove('temperature--show-week');
        });

        weekBtnEl.addEventListener('click', () => {
            headerEl.classList.add('header--show-week');
            temperatureEl.classList.add('temperature--show-week');
        });
    }
}
