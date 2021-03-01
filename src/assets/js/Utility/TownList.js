import { Town } from './Town';

export class TownList {
    constructor() {
        this.towns = [];
        this.towns.push(new Town('Vladimir', 56.1366, 40.3966));
        this.selectedTown = 0;
    }

    getSelectedTown() {
        return this.towns[this.selectedTown];
    }

    addNewTownAndSelect(newTown) {
        this.towns.push(newTown);
        selectedTown = this.towns.length - 1;
    }
}
