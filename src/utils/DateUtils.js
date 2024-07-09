import { format } from 'date-fns';

const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return day + 'th';
    switch (day % 10) {
        case 1: return day + "st";
        case 2: return day + "nd";
        case 3: return day + "rd";
        default: return day + "th";
    }
};

export const formatDate = (date, dateFormat = 'MMMM yyyy') => {
    if (date) {
        const parsedDate = new Date(date);
        const day = getOrdinalSuffix(parsedDate.getDate());
        const month = format(parsedDate, 'MMMM');
        const year = format(parsedDate, 'yyyy');
        return `${day} ${month}. ${year}`;
    } else {
        return 'N/A';
    }
};

export const formatTime = (date, dateFormat = 'HH:mm:ss') => {
    if (date) {
        return format(new Date(date), dateFormat);
    } else {
        return 'N/A';
    }
};

export const formatDateForSubmission = (date) => {
    console.log('date', date);
    if (date) {
        return format(new Date(date), 'yyyy-MM-dd');
    } else {
        return null;
    }
};

export const formatTimeForSubmission = (time) => {
    console.log('time', time);
    if (time) {
        return format(new Date(time), 'HH:mm:ss');
    } else {
        return null;
    }
};

export const formatDateTimeForSubmission = (datetime) => {
    console.log('datetime', datetime);
    if (datetime) {
        return format(new Date(datetime), 'yyyy-MM-dd HH:mm:ss');
    } else {
        return null;
    }
};

export const formatApprovalDate = (date, dateFormat = 'do MMMM') => {
    console.log('Formatting approval date', date);
    if (date) {
        const parsedDate = new Date(date);
        const formattedDate = format(parsedDate, dateFormat);
        return formattedDate;
    } else {
        return 'N/A';
    }
};

export const formatApprovalTime = (date, dateFormat = 'hh:mm a') => {
    console.log('Formatting approval time', date);
    if (date) {
        return format(new Date(date), dateFormat);
    } else {
        return 'N/A';
    }
};
