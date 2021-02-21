import {
    getWeatherFromCoords,
    getWeatherFromAddress,
    getWeatherFiveDays,
} from './GetWeather';
import {
    timeConverterToday,
    timeConverterDay,
    timeConverterHours,
} from './TimeConverter';
import { kelvinToCelsius } from './DegreesConversion';
import { iconName } from './IconWeather';

import { TownWeather } from '../UI/TownWeather';
export class Weather {
    constructor() {
        this.showWeatherToday = true;
        this.dataWeatherToday = {};
        this.dateWeatherWeek = [];

        this.myTownWeather = new TownWeather();

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
        await Promise.all([
            this.getWeatherToday('Vladimir'),
            this.getWeatherWeek('Vladimir'),
        ]);
        this.render();
    }

    async getWeatherToday(cityName) {
        //        event.preventDefault();
        //        let dataToday = null;
        try {
            // modal.show();
            this.dataWeatherToday = await getWeatherFromAddress(cityName);
        } catch (error) {
            alert(error.message);
        } finally {
            //        modal.hide();
        }
    }

    async getWeatherWeek(cityName) {
        //        event.preventDefault();
        //        let dataToday = null;
        try {
            // modal.show();
            this.dataWeatherWeek = await getWeatherFiveDays(cityName);
        } catch (error) {
            alert(error.message);
        } finally {
            //        modal.hide();
        }
    }

    render() {
        // const data = getWeatherFromAddress(
        //     myTownList.towns[myTownList.selectedTown].name
        // );
        // const data = getWeatherFromCoords(
        //     myTownList.towns[myTownList.selectedTown].coords.lat,
        //     myTownList.towns[myTownList.selectedTown].coords.lon
        // );

        this.myTownWeather.renderHeader(
            this.dataWeatherToday.name,
            timeConverterToday(this.dataWeatherToday.dt),
            this.dataWeatherToday.weather[0].description,
            iconName(
                this.dataWeatherToday.weather[0].id,
                this.dataWeatherToday.weather[0].icon
            ),
            kelvinToCelsius(this.dataWeatherToday.main.temp).toFixed()
        );

        if (this.showWeatherToday) {
            this.myTownWeather.renderOneDay(
                kelvinToCelsius(
                    this.dataWeatherToday.main.feels_like
                ).toFixed(),
                this.dataWeatherToday.wind.speed,
                this.dataWeatherToday.main.humidity,
                this.dataWeatherToday.main.pressure
            );
        }
        //else {
        //     let dayNameStart = timeConverterDay(
        //         this.townWeatherData.list[0].dt
        //     );
        //     let dayName = dayNameStart;
        //     const weekList = [];
        //     const tempDayProps = {
        //         icon: '',
        //         day: '',
        //         t_max: 0,
        //         t_min: 0,
        //         text: '',
        //     };
        //     console.log(timeConverterDay(this.townWeatherData.list[0].dt));
        //     for (let i = 1; i < this.townWeatherData.list.length; i++) {
        //         console.log(timeConverterDay(this.townWeatherData.list[i].dt));
        //         if (
        //             dayName !==
        //             timeConverterDay(this.townWeatherData.list[i].dt)
        //         ) {
        //             if (dayNameStart !== dayName) {
        //                 weekList.push({
        //                     icon: tempDayProps.icon,
        //                     day: tempDayProps.day,
        //                     t_max: tempDayProps.t_max,
        //                     t_min: tempDayProps.t_min,
        //                     text: tempDayProps.text,
        //                 });
        //             }
        //             dayName = timeConverterDay(this.townWeatherData.list[i].dt);
        //             tempDayProps.icon = iconName(
        //                 this.townWeatherData.list[i].weather[0].id,
        //                 this.townWeatherData.list[i].weather[0].icon,
        //                 true
        //             );
        //             tempDayProps.day = dayName;
        //             tempDayProps.t_max = this.townWeatherData.list[
        //                 i
        //             ].main.temp_max;
        //             tempDayProps.t_min = this.townWeatherData.list[
        //                 i
        //             ].main.temp_min;
        //             tempDayProps.text = this.townWeatherData.list[
        //                 i
        //             ].weather[0].description;
        //         } else {
        //             tempDayProps.t_max =
        //                 tempDayProps.t_max >
        //                 this.townWeatherData.list[i].main.temp_max
        //                     ? tempDayProps.t_max
        //                     : this.townWeatherData.list[i].main.temp_max;
        //             tempDayProps.t_min =
        //                 tempDayProps.t_min <
        //                 this.townWeatherData.list[i].main.temp_min
        //                     ? tempDayProps.t_min
        //                     : this.townWeatherData.list[i].main.temp_min;
        //             if (
        //                 12 ===
        //                 timeConverterHours(this.townWeatherData.list[i].dt)
        //             ) {
        //                 tempDayProps.icon = iconName(
        //                     this.townWeatherData.list[i].weather[0].id,
        //                     this.townWeatherData.list[i].weather[0].icon
        //                 );
        //                 tempDayProps.text = this.townWeatherData.list[
        //                     i
        //                 ].weather[0].description;
        //             }
        //         }
        //     }
        //     weekList.push({
        //         icon: tempDayProps.icon,
        //         day: tempDayProps.day,
        //         t_max: tempDayProps.t_max,
        //         t_min: tempDayProps.t_min,
        //         text: tempDayProps.text,
        //     });
        //     console.log(weekList);
        //     //this.myWeekWeather.changeWeekInfo();
        //     //this.myWeekWeather.render();
        // }
        // this.getWeatherToday('Vladimir')
        //     .then((data) => {
        //         this.myTownWeather.changeTownInfo(
        //             data.name,
        //             timeConverterToday(data.dt),
        //             data.weather[0].description,
        //             iconName(data.weather[0].id, data.weather[0].icon),
        //             kelvinToCelsius(data.main.temp).toFixed()
        //         );
        //         this.myTodayWeather.changeTodayInfo(
        //             kelvinToCelsius(data.main.feels_like).toFixed(),
        //             data.wind.speed,
        //             data.main.humidity,
        //             data.main.pressure
        //         );
        //     })
        //     .then(() => {
        //         this.myTownWeather.render();
        //         this.myTodayWeather.render();
        //     });
    }
}
