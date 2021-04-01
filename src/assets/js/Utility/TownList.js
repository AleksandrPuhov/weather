export class TownList {
    constructor() {
        this.towns = [];
        this.selectedTown = 0;
    }

    setTownsModalFunction(
        setAddTownToList,
        selDeleteTownElByName,
        setRenderSelectedTown,
        setTownsHide
    ) {
        this.addTownToList = setAddTownToList;
        this.deleteTownElByName = selDeleteTownElByName;
        this.renderSelectedTown = setRenderSelectedTown;
        this.townsHide = setTownsHide;
    }

    addNewTown(newTown, renderTown = true) {
        const check = this.towns.some((el) => el.name === newTown.name);
        if (!check) {
            this.towns.push(newTown);
            this.selectedTown = this.towns.length - 1;
            this.addTownToList(newTown);

            if (renderTown) {
                this.renderSelectedTown();
                this.townsHide();
            }
        }
    }

    deleteTownFromList(townName) {
        const ind = this.towns.findIndex((el) => el.name === townName);
        if (ind >= 0) {
            this.towns.splice(ind, 1);

            if (this.selectedTown === ind) {
                this.selectedTown = this.towns.length === 0 ? -1 : 0;
                this.renderSelectedTown();
            }
            if (this.selectedTown > ind) this.selectedTown--;
            this.deleteTownElByName(townName);
        }
    }

    getSelectedTown() {
        return this.towns[this.selectedTown];
    }

    selectNewTown(name) {
        const ind = this.towns.findIndex((el) => el.name === name);
        if (ind >= 0 && this.selectedTown !== ind) {
            this.selectedTown = ind;
            this.renderSelectedTown();
        }
        this.townsHide();
    }
}
