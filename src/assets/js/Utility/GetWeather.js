const API_KEY = 'b8b001bff831bd19d139fb0d3f1b6303';

export async function getWeatherFromCoords(lat, lon) {
    // const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`
    // );

    // if (!response.ok) {
    //     console.log(response);
    //throw new Error('Connection error. Try again later.');
    // }

    // const data = await response.json();

    const data = {
        lat: 33.44,
        lon: -94.04,
        timezone: 'America/Chicago',
        timezone_offset: -21600,

        current: {
            dt: 1595243443,
            sunrise: 1608124431,
            sunset: 1608160224,
            temp: 274.75,
            feels_like: 270.4,
            pressure: 1017,
            humidity: 96,
            dew_point: 274.18,
            uvi: 0,
            clouds: 90,
            visibility: 6437,
            wind_speed: 3.6,
            wind_deg: 320,
            weather: [
                {
                    id: 701,
                    main: 'Mist',
                    description: 'mist',
                    icon: '50n',
                },
            ],
        },
        daily: [
            {
                dt: 1595268000,
                sunrise: 1608124431,
                sunset: 1608160224,
                temp: {
                    day: 278.14,
                    min: 273.15,
                    max: 279.4,
                    night: 273.15,
                    eve: 275.82,
                    morn: 275.35,
                },
                feels_like: {
                    day: 273.53,
                    night: 270.26,
                    eve: 271.89,
                    morn: 272.11,
                },
                pressure: 1021,
                humidity: 70,
                dew_point: 273.27,
                wind_speed: 3.74,
                wind_deg: 323,
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04d',
                    },
                ],
                clouds: 60,
                pop: 0.84,
                uvi: 2.41,
            },
        ],
    };

    console.log(data);

    return data;
}
