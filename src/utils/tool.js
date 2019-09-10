import moment from 'moment';

export const timeFormat = (val, format = 'YYYY-MM-DD') => moment(val).format(format);

export const isPic = /\.(png|jpg)$/i;
