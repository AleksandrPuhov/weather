const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const DAYS = [
    { long: 'Sunday', short: 'Sun' },
    { long: 'Monday', short: 'Mon' },
    { long: 'Tuesday', short: 'Tue' },
    { long: 'Wednesday', short: 'Wed' },
    { long: 'Thursday', short: 'Thu' },
    { long: 'Friday', short: 'Fri' },
    { long: 'Saturday', short: 'Sat' },
];

export const timeConverterToday = (UNIX_timestamp) => {
    const time = new Date(UNIX_timestamp * 1000);
    const month = MONTHS[time.getMonth()];
    const date = time.getDate();
    const day = DAYS[time.getDay()].long;
    const todayData = `${day} ${month} ${date}`;
    return todayData;
};

export const timeConverterDayName = (UNIX_timestamp) => {
    const time = new Date(UNIX_timestamp * 1000);
    return DAYS[time.getDay()].short;
};

export const timeConverterDay = (UNIX_timestamp) => {
    const time = new Date(UNIX_timestamp * 1000);
    return time.getDate();
};
