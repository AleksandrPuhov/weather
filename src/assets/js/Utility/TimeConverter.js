export const timeConverterToday = (UNIX_timestamp) => {
    const time = new Date(UNIX_timestamp * 1000);
    const months = [
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
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const month = months[time.getMonth()];
    const date = time.getDate();
    const day = days[time.getDay()];

    const todayData = `${day} ${month} ${date}`;
    return todayData;
};
