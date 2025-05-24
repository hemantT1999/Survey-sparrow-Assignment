import dayjs from 'dayjs';

export const formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD');
};

export const isDateInRange = (date, startDate, endDate) => {
    const targetDate = dayjs(date);
    return targetDate.isAfter(dayjs(startDate).subtract(1, 'day')) && targetDate.isBefore(dayjs(endDate).add(1, 'day'));
};

export const checkEventOverlap = (event1, event2) => {
    const start1 = dayjs(event1.date).hour(event1.time.split(':')[0]).minute(event1.time.split(':')[1]);
    const end1 = start1.add(event1.duration, 'minute');
    const start2 = dayjs(event2.date).hour(event2.time.split(':')[0]).minute(event2.time.split(':')[1]);
    const end2 = start2.add(event2.duration, 'minute');

    return start1.isBefore(end2) && start2.isBefore(end1);
};