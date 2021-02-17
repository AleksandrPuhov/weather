export class TownWeather {
    constructor() {
        this.weatherFeels = '';
        this.weatherWind = '';
        this.weatherHumidity = '';
        this.weatherPressure = '';
    }

    changeTownInfo(
        newTownFeels,
        newWeatherWind,
        newWeatherHumidity,
        newWeatherPressure
    ) {
        this.townFeels = newTownFeels;
        this.weatherWind = newWeatherWind;
        this.weatherHumidity = newWeatherHumidity;
        this.weatherPressure = newWeatherPressure;
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
        const weatherImgEl = townWeatherEl.querySelector('.header-info-img');
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
            'src',
            `./assets/images/${this.weatherIcon}.svg`
        );

        weatherTempEl.textContent = this.weatherTemp;
        weatherMeasureEl.textContent = '\xB0C';
    }
}
