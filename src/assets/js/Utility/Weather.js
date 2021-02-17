import { getWeatherFromCoords, getWeatherFromAddress } from './GetWeather';
import { timeConverterToday } from './TimeConverter';
import { kelvinToCelsius } from './DegreesConversion';
import { iconName } from './IconWeather';

import { TownWeather } from '../UI/TownWeather';

export class Weather {
    constructor() {
        this.myTownWeather = new TownWeather();
        this.render();
    }

    async getWeatherToday(cityName) {
        //        event.preventDefault();
        //        let dataToday = null;
        try {
            // modal.show();
            const dataToday = await getWeatherFromAddress(cityName);
            //            console.log(dataToday);
            return dataToday;
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

        this.getWeatherToday('Vladimir')
            .then((data) => {
                this.myTownWeather.changeTownInfo(
                    data.name,
                    timeConverterToday(data.dt),
                    data.weather[0].description,
                    iconName(data.weather[0].id, data.weather[0].icon),
                    kelvinToCelsius(data.main.temp).toFixed()
                );

                // this.myTownWeather.render();
            })
            .then(() => {
                this.myTownWeather.render();
            });
    }
}
