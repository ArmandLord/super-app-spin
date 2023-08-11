import { Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('screen').height;
const HEIGHT_DESIGN = 760;
const WIDTH = Dimensions.get('screen').width;
const WIDTH_DESIGN = 360;

export const setFormatMoney = (value: number) => new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(value);

export const setLegibleDate = (date: string | undefined) => {
    if (date) {
      const Idate = new Date(date);
      return `${Idate.getDate()}/${Idate.getMonth()}/${Idate.getFullYear()}`
    }
    return '';
};

export const getPointsValue = (points: number) => (points / 10).toFixed(2);

export const getHeight = (value: number) => {
    return (value / HEIGHT_DESIGN) * HEIGHT;
}

export const getWidth = (value: number) => {
    return (value / WIDTH_DESIGN) * WIDTH;
}