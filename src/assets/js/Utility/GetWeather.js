const API_KEY = 'b8b001bff831bd19d139fb0d3f1b6303';

export async function findTownByName(name) {
    // const response = await fetch(
    //     `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`
    // );

    // if (!response.ok) {
    //     console.log(response);
    // throw new Error('Connection error. Try again later.');
    // }

    // const data = await response.json();

    const data = [
        {
            name: 'London',
            local_names: {
                af: 'Londen',
                ar: 'لندن',
                ascii: 'London',
                az: 'London',
                bg: 'Лондон',
                ca: 'Londres',
                da: 'London',
                de: 'London',
                el: 'Λονδίνο',
                en: 'London',
                eu: 'Londres',
                fa: 'لندن',
                feature_name: 'London',
                fi: 'Lontoo',
                fr: 'Londres',
                gl: 'Londres',
                he: 'לונדון',
                hi: 'लंदन',
                hr: 'London',
                hu: 'London',
                id: 'London',
                it: 'Londra',
                ja: 'ロンドン',
                la: 'Londinium',
                lt: 'Londonas',
                mk: 'Лондон',
                nl: 'Londen',
                no: 'London',
                pl: 'Londyn',
                pt: 'Londres',
                ro: 'Londra',
                ru: 'Лондон',
                sk: 'Londýn',
                sl: 'London',
                sr: 'Лондон',
                th: 'ลอนดอน',
                tr: 'Londra',
                vi: 'Luân Đôn',
                zu: 'ILondon',
            },
            lat: 51.5085,
            lon: -0.1257,
            country: 'GB',
        },
        {
            name: 'London',
            local_names: {
                ar: 'لندن',
                ascii: 'London',
                bg: 'Лондон',
                de: 'London',
                en: 'London',
                fa: 'لندن، انتاریو',
                feature_name: 'London',
                fi: 'London',
                fr: 'London',
                he: 'לונדון',
                ja: 'ロンドン',
                lt: 'Londonas',
                nl: 'London',
                pl: 'London',
                pt: 'London',
                ru: 'Лондон',
                sr: 'Лондон',
            },
            lat: 42.9834,
            lon: -81.233,
            country: 'CA',
        },
        {
            name: 'London',
            local_names: {
                ar: 'لندن',
                ascii: 'London',
                en: 'London',
                fa: 'لندن، اوهایو',
                feature_name: 'London',
                sr: 'Ландон',
            },
            lat: 39.8865,
            lon: -83.4483,
            country: 'US',
            state: 'OH',
        },
        {
            name: 'London',
            local_names: {
                ar: 'لندن',
                ascii: 'London',
                en: 'London',
                fa: 'لندن، کنتاکی',
                feature_name: 'London',
                sr: 'Ландон',
            },
            lat: 37.129,
            lon: -84.0833,
            country: 'US',
            state: 'KY',
        },
        {
            name: 'London',
            local_names: {
                ascii: 'London',
                ca: 'Londres',
                en: 'London',
                feature_name: 'London',
            },
            lat: 36.4761,
            lon: -119.4432,
            country: 'US',
            state: 'CA',
        },
    ];

    console.log(data);

    return data;
}

export async function getWeatherFromCoords(lat, lon) {
    // const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`
    // );

    // if (!response.ok) {
    //     console.log(response);
    // throw new Error('Connection error. Try again later.');
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

export async function getWeatherByCityName(name) {
    // const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    // );

    // if (!response.ok) {
    //     console.log(response);
    // throw new Error('Connection error. Try again later.');
    // }

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

    console.log(data);

    return data;
}
