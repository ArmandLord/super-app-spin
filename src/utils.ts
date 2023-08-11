import { Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('screen').height;
const HEIGHT_DESIGN = 760;
const WIDTH = Dimensions.get('screen').width;
const WIDTH_DESIGN = 360;

export const setFormatMoney = (value: number) => new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(value);
export const thousandsFormat = (value: number) => new Intl.NumberFormat('es-MX').format(value);

export const setLegibleDate = (date: string | undefined) => {
    if (date) {
      const Idate = new Date(date);
      return `${Idate.getDate()}/${Idate.getMonth()}/${Idate.getFullYear()}`
    }
    return '';
};

export const getHeight = (value: number) => {
    return (value / HEIGHT_DESIGN) * HEIGHT;
}

export const getWidth = (value: number) => {
    return (value / WIDTH_DESIGN) * WIDTH;
}