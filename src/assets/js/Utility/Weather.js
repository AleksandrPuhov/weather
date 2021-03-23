import { getWeatherFromCoords } from './GetWeather';

import { TownWeather } from '../UI/TownWeather';
import { Spinner } from '../UI/Spinner';
import { ErrorModal } from '../UI/ErrorModal';
import { Nav } from '../UI/Nav';
import { TownsModal } from '../UI/TownsModal';

import { TownList } from './TownList';
import { Town } from './Town';

export class Weather {
    constructor() {
        this.dataWeather = {
            town: null,
            weather: null,
        };

        this.myTownWeather = new TownWeather();
        this.myErrorModal = new ErrorModal();
        this.mySpinner = new Spinner();
        this.myNav = new Nav();

        this.myTownList = new TownList();
        this.myTownsModal = new TownsModal();

        this.myTownList.setTownsModalFunction(
            this.myTownsModal.addTownToList.bind(this.myTownsModal),
            this.myTownsModal.deleteTownElByName.bind(this.myTownsModal)
        );

        this.myNav.setTownsListFunction(
            this.myTownsModal.townsHide.bind(this.myTownsModal),
            this.myTownsModal.townsToggle.bind(this.myTownsModal)
        );

        this.myTownsModal.setTownsModalFunction(
            this.myTownList.deleteTownFromList.bind(this.myTownList)
        );

        this.myTownList.addNewTown(new Town('Vladimir', 56.1366, 40.3966));
        this.myTownList.addNewTown(new Town('Vladimir2', 56.1366, 40.3966));
        this.myTownList.addNewTown(new Town('Vladimir3', 56.1366, 40.3966));

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
