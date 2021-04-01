import { getWeatherByCityName, findTownByName } from '../Utility/GetWeather';

import { kelvinToCelsius } from '../Utility/DegreesConversion';
export class TownsModal {
    constructor() {
        this.townsEl = document.getElementById('towns');
        this.townsListEl = document.getElementById('towns-list');
        this.townsListEl.textContent = '';

        this.searchFormEl = document.getElementById('towns-find');

        this.searchFormEl.addEventListener('submit', (event) => {
            this.findTown(event);
        });
    }

    setTownsModalFunction(
        setDeleteTownFromList,
        setSelectNewTown,
        setRenderFindTowns,
        setErrorModalShow
    ) {
        this.deleteTownFromList = setDeleteTownFromList;
        this.selectNewTown = setSelectNewTown;
        this.renderFindTowns = setRenderFindTowns;
        this.errorModalShow = setErrorModalShow;
    }

    async findTown(event) {
        event.preventDefault();
        const name = event.target.querySelector('input').value;

        try {
            const townsListFound = await findTownByName(name);
            this.renderFindTowns(townsListFound);
        } catch (error) {
            this.errorModalShow(error.message);
        }
    }

    async addTownToList(town) {
        try {
            const cityWeather = await getWeatherByCityName(town.name);

            this.createTownEl(
                town.name,
                kelvinToCelsius(cityWeather.main.temp),
                cityWeather.weather[0].main
            );
        } catch (error) {
            this.createTownEl(town.name);
        }
    }

    deleteTownElByName(townName) {
        const myListNode = this.townsListEl.querySelectorAll(
            '.towns-card__name'
        );
        const ind = [...myListNode].findIndex(
            (el) => el.textContent === townName
        );
        this.townsListEl.querySelectorAll('li')[ind].remove();
    }

    clickCardHandler(event) {
        const townName = event.target
            .closest('li')
            .querySelector('.towns-card__name').textContent;
        if (event.target.closest('button')) {
            this.deleteTownFromList(townName);
        } else {
            this.selectNewTown(townName);
        }
    }

    createTownEl(name, temperature = null, text = null) {
        const useEl = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'use'
        );
        useEl.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            `assets/images/sprite/symbol/sprite.svg#close`
        );
        const svgEl = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );
        svgEl.classList.add('svg-sprite-icon');
        svgEl.classList.add('towns-card__delete-icon');
        svgEl.append(useEl);

        const btnEl = document.createElement('button');
        btnEl.className = 'towns-card__delete';
        btnEl.append(svgEl);

        const nameEl = document.createElement('p');
        nameEl.className = 'towns-card__name';
        nameEl.textContent = `${name}`;

        const temperatureEl = document.createElement('p');
        temperatureEl.className = 'towns-card__temperature';
        temperatureEl.textContent = temperature ? `${temperature} \xB0C` : '';

        const textEl = document.createElement('p');
        textEl.className = 'towns-card__text';
        textEl.textContent = text ? `${text}` : 'No Data';

        const cardEl = document.createElement('div');
        cardEl.className = 'towns-card';
        cardEl.append(btnEl);
        cardEl.append(nameEl);
        cardEl.append(temperatureEl);
        cardEl.append(textEl);

        const liEl = document.createElement('li');
        liEl.className = 'towns-list__item';
        liEl.append(cardEl);

        liEl.addEventListener('click', (event) => this.clickCardHandler(event));

        this.townsListEl.append(liEl);
    }

    townsHide() {
        this.townsEl.classList.remove('towns--show');
    }

    townsToggle() {
        this.townsEl.classList.toggle('towns--show');
    }
}
