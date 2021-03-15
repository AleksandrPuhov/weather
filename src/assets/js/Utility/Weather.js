import { getWeatherFromCoords } from './GetWeather';

import { TownWeather } from '../UI/TownWeather';
import { Spinner } from '../UI/Spinner';
import { ErrorModal } from '../UI/ErrorModal';
import { Nav } from '../UI/Nav';

import { TownList } from './TownList';

export class Weather {
    constructor() {
        this.dataWeather = {
            town: null,
            weather: null,
        };
        this.myTownWeather = new TownWeather();
        this.myTownList = new TownList();

        this.myErrorModal = new ErrorModal();
        this.mySpinner = new Spinner();
        this.myNav = new Nav();

        this.startRender();
    }

    async startRender() {
        this.dataWeather.town = this.myTownList.getSelectedTown();
        if (this.dataWeather.town) {
            try {
                await this.getWeather(
                    this.dataWeather.town.coords.lat,
                    this.dataWeather.town.coords.lon
                );
                this.render();
            } catch (error) {
            } finally {
            }
        }
    }

    async getWeather(lat, lon) {
        try {
            this.mySpinner.show();
            this.dataWeather.weather = await getWeatherFromCoords(lat, lon);
        } catch (error) {
            this.myErrorModal.show(error.message);
            throw new Error(error.message);
        } finally {
            this.mySpinner.hide();
        }
    }

    render() {
        this.myTownWeather.render(
            this.dataWeather.town,
            this.dataWeather.weather
        );
    }
}
