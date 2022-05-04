type ILocale = 'pt-BR' | 'en-US';

export const formatPrice = (price: number, locales: ILocale = 'pt-BR') => {
  const currency = locales === 'pt-BR' ? 'BRL' : 'USD';
  const format = Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
  }).format(price);
  return format;
};
