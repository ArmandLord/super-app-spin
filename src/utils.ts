export const setFormatMoney = (value: number) => new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(value);

export const setLegibleDate = (date: string | undefined) => {
    if (date) {
      const Idate = new Date(date);
      return `${Idate.getDate()}/${Idate.getMonth()}/${Idate.getFullYear()}`
    }
    return '';
};