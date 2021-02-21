export const iconName = (id, icon, notNight = false) => {
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
