export const iconName = (id, icon) => {
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
    if (id === 800 && icon === '01d') {
        return 'sun';
    }
    if (id === 800 && icon === '01n') {
        return 'moon';
    }
    if (id === 801 && icon === '02d') {
        return 'cloud-small-sun';
    }
    if (id === 801 && icon === '02n') {
        return 'cloud-small-moon';
    }
    if (id === 802 && icon === '02d') {
        return 'cloud-big-sun';
    }
    if (id === 802 && icon === '02n') {
        return 'cloud-big-moon';
    }
    if (803 <= id && id <= 804) {
        return 'cloud';
    }
};
