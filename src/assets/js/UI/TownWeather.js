export class TownWeather {
    constructor() {}

    renderHeader(newName, newDate, newText, newIcon, newTemp) {
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

    renderWeek() {
        const todayWeatherEl = document.getElementById('temperature-week');

        // li.temperature-week__item
        // .temperature-week__card
        //     .temperature-week__img
        //         +iconsWeather('temperature-week__img-icon','drizzle')
        //     span.temperature-week__day Fri
        //     span.temperature-week__degrees 22/26C
        //     span.temperature-week__text Sunda dasdf sdf dadaasdad asdaddad

        // const imgThermometerEl = todayWeatherEl.querySelector(
        //     '.temperature-today__img-thermometer use'
        // );
        // const feelTemperatureEl = todayWeatherEl.querySelector(
        //     '.temperature-today__degrees'
        // );
        // const humidityEl = todayWeatherEl.querySelector(
        //     '.temperature-today__humidity'
        // );
        // const windEl = todayWeatherEl.querySelector('.temperature-today__wind');
        // const pressureEl = todayWeatherEl.querySelector(
        //     '.temperature-today__pressure'
        // );

        // imgThermometerEl.setAttribute(
        //     'xlink:href',
        //     `assets/images/sprite/symbol/sprite.svg#${this.thermometerIcon(
        //         newFeels
        //     )}`
        // );
        // feelTemperatureEl.textContent = `${newFeels} \xB0C`;
        // humidityEl.textContent = `${newHumidity} %`;
        // windEl.textContent = `${newWind} km/h`;
        // pressureEl.textContent = `${newPressure} hPa`;
    }
}
