export class TownWeather {
    constructor() {
        this.townName = '';
        this.weatherDate = '';
        this.weatherText = '';
        this.weatherIcon = '';
        this.weatherTemp = '';
    }

    changeTownInfo(
        newTownName,
        newWeatherDate,
        newWeatherText,
        newWeatherIcon,
        newWeatherTemp
    ) {
        this.townName = newTownName;
        this.weatherDate = newWeatherDate;
        this.weatherText = newWeatherText;
        this.weatherIcon = newWeatherIcon;
        this.weatherTemp = newWeatherTemp;
    }

    render() {
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
        townNameEl.textContent = this.townName;
        weatherDateEl.textContent = this.weatherDate;
        weatherTextEl.textContent = this.weatherText;

        weatherImgEl.setAttribute(
            'xlink:href',
            `assets/images/sprite/symbol/sprite.svg#${this.weatherIcon}`
        );

        weatherTempEl.textContent = this.weatherTemp;
        weatherMeasureEl.textContent = '\xB0C';
    }
}
