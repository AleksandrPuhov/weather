const API_KEY = 'b8b001bff831bd19d139fb0d3f1b6303';

export async function findTownByName(name) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error('Connection error. Try again later.');
    }

    const data = await response.json();
    return data;
}

export async function getWeatherFromCoords(lat, lon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error('Connection error. Try again later.');
    }

    const data = await response.json();
    return data;
}

export async function getWeatherByCityName(name) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error('Connection error. Try again later.');
    }

    const data = await response.json();
    return data;
}
