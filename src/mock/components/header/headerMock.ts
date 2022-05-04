import { IHeader } from '@services/types/header-types';
import { MenuMock } from './menuMock';

export const HeaderMock: IHeader = {
  language: ['pt-BR', 'en-US'],
  profile: 'My profile',
  card: 'Items',
  logo: {
    url: '/assets/images/logo.svg',
    text: 'E-Comm',
  },
  menu: MenuMock,
};
