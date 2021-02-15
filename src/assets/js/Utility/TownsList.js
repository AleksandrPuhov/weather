import { Town } from './Town';

export class TownList {
    towns = [];
    selectedTown = 0;
    constructor() {
        this.towns.push(new Town('Vladimir', 56.1366, 40.3966));
        this.selectedTown = 0;
    }

    addNewTownAndSelect(newTown) {
        this.towns.push(newTown);
        selectedTown = this.towns.length - 1;
    }
}
