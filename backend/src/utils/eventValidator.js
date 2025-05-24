export const validateEvent = (event) => {
    const { title, date, time, duration } = event;

    if (!title || typeof title !== 'string') {
        return { valid: false, message: 'Title is required and must be a string.' };
    }

    if (!date || !isValidDate(date)) {
        return { valid: false, message: 'Date is required and must be a valid date.' };
    }

    if (!time || !isValidTime(time)) {
        return { valid: false, message: 'Time is required and must be a valid time.' };
    }

    if (!duration || typeof duration !== 'number' || duration <= 0) {
        return { valid: false, message: 'Duration is required and must be a positive number.' };
    }

    return { valid: true };
};

const isValidDate = (date) => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
};

const isValidTime = (time) => {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(time);
};