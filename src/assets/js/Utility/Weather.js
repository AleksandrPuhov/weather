import { getWeatherFromCoords } from './GetWeather';

import {
    timeConverterToday,
    timeConverterDayName,
    timeConverterDay,
} from './TimeConverter';
import { kelvinToCelsius } from './DegreesConversion';
import { idConvertToIcon, idConvertToColor } from './IdWeather';

import { TownWeather } from '../UI/TownWeather';

import { TownList } from './TownList';

export class Weather {
    constructor() {
        this.showWeatherToday = true;
        this.dataWeather = {
            town: {},
            weather: {},
        };
        this.myTownWeather = new TownWeather();
        this.myTownList = new TownList();

        this.addListeners();
        this.startRender();
    }

    addListeners() {
        const headerEl = document.getElementById('header');
        const temperatureEl = document.getElementById('temperature');
        const todayBtnEl = document.getElementById('today-btn');
        const weekBtnEl = document.getElementById('week-btn');

        todayBtnEl.addEventListener('click', () => {
            headerEl.classList.remove('header--show-week');
            temperatureEl.classList.remove('temperature--show-week');
            this.showWeatherToday = true;
        });

        weekBtnEl.addEventListener('click', () => {
            headerEl.classList.add('header--show-week');
            temperatureEl.classList.add('temperature--show-week');
            this.showWeatherToday = false;
        });
    }

    async startRender() {
        this.dataWeather.town = this.myTownList.getSelectedTown();

        await this.getWeather(
            this.dataWeather.town.coords.lat,
            this.dataWeather.town.coords.lon
        );
        this.render();
    }

    async getWeather(lat, lon) {
        //        event.preventDefault();
        //        let dataToday = null;
        try {
            // modal.show();
            this.dataWeather.weather = await getWeatherFromCoords(lat, lon);
        } catch (error) {
            console.log(error);
            // alert('12345');
        } finally {
            //        modal.hide();
        }
    }

    render() {
        const weather = this.dataWeather.weather;

        this.myTownWeather.renderHeader(
            this.dataWeather.town.name,
            timeConverterToday(weather.current.dt),
            weather.current.weather[0].description,
            idConvertToIcon(
                weather.current.weather[0].id,
                weather.current.weather[0].icon
            ),
            kelvinToCelsius(weather.current.temp),
            idConvertToColor(
                weather.current.weather[0].id,
                weather.current.weather[0].icon
            )
        );

        // if (this.showWeatherToday) {
        this.myTownWeather.renderOneDay(
            kelvinToCelsius(weather.current.feels_like),
            weather.current.wind_speed,
            weather.current.humidity,
            weather.current.pressure
        );
        // } else {
        const weeekList = weather.daily.map((dayWeather) => {
            return {
                icon: idConvertToIcon(
                    dayWeather.weather[0].id,
                    dayWeather.weather[0].icon,
                    true
                ),
                day: timeConverterDay(dayWeather.dt),
                dayName: timeConverterDayName(dayWeather.dt),
                temp: kelvinToCelsius(dayWeather.temp.day),
                text: dayWeather.weather[0].description,
            };
        });
        console.log(weeekList);
        this.myTownWeather.renderWeek(weeekList);

        // }
    }
}
