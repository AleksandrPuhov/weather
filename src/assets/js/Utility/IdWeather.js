export const idConvertToIcon = (id, icon, notNight = false) => {
    if (200 <= id && id <= 202) {
        return 'thunder-rain';
    }
    if (210 <= id && id <= 221) {
        return 'thunder';
    }
    if (230 <= id && id <= 232) {
        return 'thunder-drizzle';
    }
    if (300 <= id && id <= 321) {
        return 'drizzle';
    }
    if (500 <= id && id <= 531) {
        return 'rain';
    }
    if ((600 <= id && id <= 602) || (620 <= id && id <= 622)) {
        return 'snow';
    }
    if (611 <= id && id <= 613) {
        return 'sleet';
    }
    if (615 <= id && id <= 616) {
        return 'snow-rain';
    }
    if (701 <= id && id <= 771) {
        return 'mist';
    }
    if (id === 781) {
        return 'tornado';
    }
    if (id === 800) {
        return icon === '01n' && !notNight ? 'moon' : 'sun';
    }
    if (id === 801) {
        return icon === '02n' && !notNight
            ? 'cloud-small-moon'
            : 'cloud-small-sun';
    }
    if (id === 802) {
        return icon === '02n' && !notNight ? 'cloud-big-moon' : 'cloud-big-sun';
    }
    if (803 <= id && id <= 804) {
        return 'cloud';
    }
};

export const idConvertToColor = (id, icon) => {
    if (200 <= id && id <= 781) {
        return {
            bgc: '#8a9fa8',
            up: '#738e97',
            down1: '#848585',
            down2: '#727374',
            down3: '#616161',
            down4: '#4c4c4d',
        };
    }

    if (id === 800) {
        return icon === '01n'
            ? {
                  bgc: '#80c1d2',
                  up: '#5eb5c9',
                  down1: '#0a3354',
                  down2: '#11436c',
                  down3: '#155181',
                  down4: '#11436c',
              }
            : {
                  bgc: '#fbb274',
                  up: '#f8a057',
                  down1: '#a13c22',
                  down2: '#c94a27',
                  down3: '#e5612c',
                  down4: '#ee813e',
              };
    }

    if (801 <= id && id <= 804) {
        return {
            bgc: '#acacdd',
            up: '#8a8abc',
            down1: '#1a0a41',
            down2: '#2a1d52',
            down3: '#3b3063',
            down4: '#544d7c',
        };
    }
};
