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

    async getWeather(townName) {
        //        event.preventDefault();
        //        let dataToday = null;
        try {
            // modal.show();
            const dataToday = await getWeatherFromAddress(townName);
            //            console.log(dataToday);
            return dataToday;
        } catch (error) {
            alert(error.message);
        } finally {
            //        modal.hide();
        }
        // const data = getWeatherFromAddress(
        //     myTownList.towns[myTownList.selectedTown].name
        // );

        // const data = getWeatherFromCoords(
        //     myTownList.towns[myTownList.selectedTown].coords.lat,
        //     myTownList.towns[myTownList.selectedTown].coords.lon
        // );
    }

    render() {
        this.getWeather('Vladimir').then((data) => {
            this.myTownWeather.changeTownInfo(
                data.name,
                timeConverterToday(data.dt + data.timezone),
                data.weather[0].description,
                iconName(data.weather[0].id, data.weather[0].icon),
                kelvinToCelsius(data.main.temp).toFixed()
            );
            this.myTownWeather.render();

            //            console.log(iconName(800, '01n'));
        });
    }
}
