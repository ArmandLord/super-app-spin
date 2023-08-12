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

export const generateUniqueID = (): string => {
  const timestamp = Date.now().toString(16); // Convertir el timestamp a hexadecimal
  const randomPart = Math.floor(Math.random() * 1000000).toString(16); // Número aleatorio en hexadecimal
  
  return `${timestamp}-${randomPart}`;
}

export const generateRandomNumber = (): string => {
    const randomNumber = Math.floor(Math.random() * (10 ** 18)); // Genera un número aleatorio de hasta 18 dígitos
    return randomNumber.toString();
}