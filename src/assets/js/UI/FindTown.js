export class FindTown {
    constructor() {
        this.findTownsEl = document.getElementById('findTowns');
        this.findListEl = document.getElementById('findList');
        this.findListEl.textContent = '';
    }

    renderFindTowns(townsList) {
        this.findListEl.textContent = '';
        if (townsList.length > 0) {
            townsList.forEach((el) => {
                const str = el.state
                    ? `${el.name}, ${el.country} ${el.state}`
                    : `${el.name}, ${el.country}`;

                this.addListElement(str);
            });
        } else {
            this.addListElement('Town Not Found');
        }
        this.findTownsShow();
    }

    addListElement(name) {
        const btnEl = document.createElement('button');
        btnEl.className = 'findTowns-modal__btn';
        btnEl.textContent = `${name}`;

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
