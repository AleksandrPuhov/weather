export class Nav {
    constructor() {
        this.addListeners();
    }

    setTownsListFunction(setTownsHide, setTownsToggle) {
        this.townsToggle = setTownsToggle;
        this.townsHide = setTownsHide;
    }

    addListeners() {
        const navListEl = document.getElementById('nav-list');

        navListEl.addEventListener('click', (event) => {
            this.navListHandler(event);
        });
    }

    navListHandler(event) {
        const todayBtnEl = document.getElementById('today-btn');
        const weekBtnEl = document.getElementById('week-btn');
        const locatonBtnEl = document.getElementById('locaton-btn');

        const headerEl = document.getElementById('header');
        const temperatureEl = document.getElementById('temperature');

        if (event.target.closest('button') === locatonBtnEl) {
            this.townsToggle();
        }
        if (
            event.target.closest('button') === todayBtnEl ||
            event.target.closest('button') === weekBtnEl
        ) {
            this.townsHide();

            if (event.target.closest('button') === todayBtnEl) {
                headerEl.classList.remove('header--show-week');
                temperatureEl.classList.remove('temperature--show-week');
            }
            if (event.target.closest('button') === weekBtnEl) {
                headerEl.classList.add('header--show-week');
                temperatureEl.classList.add('temperature--show-week');
            }
        }
    }
}
