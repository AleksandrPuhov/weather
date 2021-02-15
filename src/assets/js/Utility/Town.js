export class Town {
    constructor(name, lat, lon) {
        this.name = name;
        this.coords = {
            lat: lat,
            lon: lon,
        };
    }
}
