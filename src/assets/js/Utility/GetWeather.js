const API_KEY = 'b8b001bff831bd19d139fb0d3f1b6303';
// export async function getWeatherFromCoords(lat, lon) {
//     const response = await fetch(
//         `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lon}`,
//         {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key':
//                     'be8a105559msh4d76edb15835074p11a135jsneca65f35fcb8',
//                 'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//             },
//         }
//     );

//     const data = await response.json();

//     if (data.cod !== 200) {
//         throw new Error(data.message);
//     }
//     return data;
// }

export async function getWeatherFromAddress(cityName) {
    // const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    // );
    // const data = await response.json();

    const data = {
        coord: {
            lon: -122.08,
            lat: 37.39,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        base: 'stations',
        main: {
            temp: 282.55,
            feels_like: 281.86,
            temp_min: 280.37,
            temp_max: 284.26,
            pressure: 1023,
            humidity: 100,
        },
        visibility: 16093,
        wind: {
            speed: 1.5,
            deg: 350,
        },
        clouds: {
            all: 1,
        },
        dt: 1560350645,
        sys: {
            type: 1,
            id: 5122,
            message: 0.0139,
            country: 'US',
            sunrise: 1560343627,
            sunset: 1560396563,
        },
        timezone: -25200,
        id: 420006353,
        name: 'Mountain View',
        cod: 200,
    };

    if (data.cod !== 200) {
        throw new Error(data.message);
    }
    console.log(data);

    return data;
}
