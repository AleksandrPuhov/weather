export class TownWeather {
    constructor() {}

    changeColor(color) {
        const headerEl = document.getElementById('header');
        const headerBgEl = document.getElementById('header-bg');
        const upEl = headerBgEl.querySelector('.header-bg-up svg path');
        const down1 = headerBgEl.querySelectorAll('.header-bg-down-1 svg path');
        const down2 = headerBgEl.querySelectorAll('.header-bg-down-2 svg path');
        const down3 = headerBgEl.querySelectorAll('.header-bg-down-3 svg path');
        const down4 = headerBgEl.querySelectorAll('.header-bg-down-4 svg path');

        headerEl.style.backgroundColor = color.up;

        headerBgEl.style.backgroundColor = color.bgc;

        upEl.setAttribute('fill', color.up);

        down1.forEach((path) => {
            path.setAttribute('fill', color.down1);
        });

        down2.forEach((path) => {
            path.setAttribute('fill', color.down2);
        });

        down3.forEach((path) => {
            path.setAttribute('fill', color.down3);
        });

        down4.forEach((path) => {
            path.setAttribute('fill', color.down4);
        });
    }

    renderHeader(newName, newDate, newText, newIcon, newTemp, color) {
        const townWeatherEl = document.getElementById('town-weather');
        const townNameEl = townWeatherEl.querySelector(
            '.header-info-text-town'
        );
        const weatherDateEl = townWeatherEl.querySelector(
            '.header-info-text-date'
        );
        const weatherTextEl = townWeatherEl.querySelector(
            '.header-info-text-weather'
        );
        const weatherImgEl = townWeatherEl.querySelector(
            '.header-info-img-icon use'
        );
        const weatherTempEl = townWeatherEl.querySelector(
            '.header-degrees__num'
        );
        const weatherMeasureEl = townWeatherEl.querySelector(
            '.header-degrees__measure'
        );
        townNameEl.textContent = newName;
        weatherDateEl.textContent = newDate;
        weatherTextEl.textContent = newText;

        weatherImgEl.setAttribute(
            'xlink:href',
            `assets/images/sprite/symbol/sprite.svg#${newIcon}`
        );

        weatherTempEl.textContent = newTemp;
        weatherMeasureEl.textContent = '\xB0C';

        this.changeColor(color);
    }

    thermometerIcon(degrees) {
        if (30 <= degrees) {
            return 'thermometer-100';
        }
        if (15 <= degrees && degrees < 30) {
            return 'thermometer-75';
        }
        if (0 <= degrees && degrees < 15) {
            return 'thermometer-50';
        }
        if (-15 <= degrees && degrees < 0) {
            return 'thermometer-25';
        }
        if (degrees < -15) {
            return 'thermometer-10';
        }
    }

    renderOneDay(newFeels, newWind, newHumidity, newPressure) {
        const todayWeatherEl = document.getElementById('temperature-today');
        const imgThermometerEl = todayWeatherEl.querySelector(
            '.temperature-today__img-thermometer use'
        );
        const feelTemperatureEl = todayWeatherEl.querySelector(
            '.temperature-today__degrees'
        );
        const humidityEl = todayWeatherEl.querySelector(
            '.temperature-today__humidity'
        );
        const windEl = todayWeatherEl.querySelector('.temperature-today__wind');
        const pressureEl = todayWeatherEl.querySelector(
            '.temperature-today__pressure'
        );

        imgThermometerEl.setAttribute(
            'xlink:href',
            `assets/images/sprite/symbol/sprite.svg#${this.thermometerIcon(
                newFeels
            )}`
        );
        feelTemperatureEl.textContent = `${newFeels} \xB0C`;
        humidityEl.textContent = `${newHumidity} %`;
        windEl.textContent = `${newWind} km/h`;
        pressureEl.textContent = `${newPressure} hPa`;
    }

    createListEl(dayItem) {
        const useEl = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'use'
        );
        useEl.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            `assets/images/sprite/symbol/sprite.svg#${dayItem.icon}`
        );
        const svgEl = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );
        svgEl.classList.add('svg-sprite-icon');
        svgEl.classList.add('temperature-week__img-icon');
        svgEl.append(useEl);

        const imgEl = document.createElement('div');
        imgEl.className = 'temperature-week__img';
        imgEl.append(svgEl);

        const dayEl = document.createElement('span');
        dayEl.className = 'temperature-week__day';
        dayEl.textContent = `${dayItem.day}`;

        const dayNameEl = document.createElement('span');
        dayNameEl.className = 'temperature-week__day-name';
        dayNameEl.textContent = `${dayItem.dayName},`;

        const degreesEl = document.createElement('span');
        degreesEl.className = 'temperature-week__degrees';
        degreesEl.textContent = `${dayItem.temp} \xB0C`;

        const textEl = document.createElement('span');
        textEl.className = 'temperature-week__text';
        textEl.textContent = `${dayItem.text}`;

        const cardEl = document.createElement('div');
        cardEl.className = 'temperature-week__card';
        cardEl.append(imgEl);
        cardEl.append(dayNameEl);
        cardEl.append(dayEl);
        cardEl.append(degreesEl);
        cardEl.append(textEl);

        const liEl = document.createElement('li');
        liEl.className = 'temperature-week__item';
        liEl.append(cardEl);

        return liEl;
    }

    renderWeek(weeekList) {
        const weekWeatherEl = document.getElementById('temperature-week');
        weekWeatherEl.textContent = '';
        weeekList.forEach((day) => {
            weekWeatherEl.append(this.createListEl(day));
        });
    }
}
