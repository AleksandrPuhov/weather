export async function getWeatherFromCoords(lat, lon) {
    const response = await fetch(
        `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lon}`,
        {
            method: 'GET',
            headers: {
                'x-rapidapi-key':
                    'be8a105559msh4d76edb15835074p11a135jsneca65f35fcb8',
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            },
        }
    );

    const data = await response.json();

    if (data.cod !== 200) {
        throw new Error(data.message);
    }
    return data;
}

export async function getWeatherFromAddress(townName) {
    const response = await fetch(
        `https://community-open-weather-map.p.rapidapi.com/weather?q=${townName}`,
        {
            method: 'GET',
            headers: {
                'x-rapidapi-key':
                    'be8a105559msh4d76edb15835074p11a135jsneca65f35fcb8',
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            },
        }
    );

    const data = await response.json();

    if (data.cod !== 200) {
        throw new Error(data.message);
    }
    console.log(data);

    return data;
}
