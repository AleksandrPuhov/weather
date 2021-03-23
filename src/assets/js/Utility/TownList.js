export class TownList {
    constructor() {
        this.towns = [];
        this.selectedTown = 0;
    }

    setTownsModalFunction(setAddTownToList, selDeleteTownElByName) {
        this.addTownToList = setAddTownToList;
        this.deleteTownElByName = selDeleteTownElByName;
    }

    addNewTown(newTown) {
        const check = this.towns.some((el) => el.name === newTown.name);
        if (!check) {
            this.towns.push(newTown);
            this.selectedTown = this.towns.length - 1;
            this.addTownToList(newTown);
        }
    }

    deleteTownFromList(townName) {
        const ind = this.towns.findIndex((el) => el.name === townName);
        if (ind >= 0) {
            this.towns.splice(ind, 1);

            if (this.selectedTown === ind) {
                this.selectedTown = this.towns.length === 0 ? -1 : 0;
            }
            if (this.selectedTown > ind) this.selectedTown--;

            console.log(this);

            this.deleteTownElByName(townName);
        }
    }

    getSelectedTown() {
        return this.towns[this.selectedTown];
    }
}
