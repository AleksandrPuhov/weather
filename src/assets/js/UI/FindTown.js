import { Town } from '../Utility/Town';

export class FindTown {
    constructor() {
        this.townsListFound = [];

        this.findTownsEl = document.getElementById('findTowns');
        this.findListEl = document.getElementById('findList');
        this.findListEl.textContent = '';

        this.findTownsEl.addEventListener('click', (event) => {
            this.clickEventHandler(event);
        });
    }

    setFindTownFunction(setAddNewTown) {
        this.addNewTown = setAddNewTown;
    }

    renderFindTowns(townsList) {
        this.townsListFound = townsList;
        this.findListEl.textContent = '';
        if (this.townsListFound.length > 0) {
            this.townsListFound.forEach((el, ind) => {
                const str = el.state
                    ? `${el.name}, ${el.country} ${el.state}`
                    : `${el.name}, ${el.country}`;

                this.addListElement(str, ind);
            });
        } else {
            this.addListElement('Town Not Found');
        }
        this.findTownsShow();
    }

    clickEventHandler(event) {
        if (event.target === this.findTownsEl) {
            this.findTownsHide();
        } else if (event.target.tagName.toLowerCase() === 'button') {
            const newTownSelected = this.townsListFound[
                event.target.dataset.indexValue
            ];
            this.addNewTown(
                new Town(
                    newTownSelected.name,
                    newTownSelected.lat,
                    newTownSelected.lon
                )
            );
            this.findTownsHide();
        }
    }

    addListElement(name, ind) {
        const btnEl = document.createElement('button');
        btnEl.className = 'findTowns-modal__btn';
        btnEl.textContent = `${name}`;
        btnEl.dataset.indexValue = ind;

        const liEl = document.createElement('li');
        liEl.className = 'findTowns-modal__list-item';
        liEl.append(btnEl);
        this.findListEl.append(liEl);
    }

    findTownsHide() {
        this.findTownsEl.classList.remove('findTowns--show');
    }

    findTownsShow() {
        this.findTownsEl.classList.add('findTowns--show');
    }
}
