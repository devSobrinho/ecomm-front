import { CartIcon } from '@components/icons/Cart';
import { ProfileIcon } from '@components/icons/Profile';

type iconProps = {
  amount?: number;
  isActive?: boolean;
};

interface MockAppBarData {
  titleLanguage: string;
  languages: {
    text: string;
    value: string;
  }[];
  wrapperComponent: {
    text: string;
    isLink?: boolean;
    href?: string;
    icon: ({ isActive, amount }: iconProps) => JSX.Element;
  }[];
  messageError: (
    lang?: string,
    nameInput?: string,
  ) => {
    search: string;
  };
}

export const mockAppBar: MockAppBarData = {
  titleLanguage: 'language',
  languages: [
    {
      text: 'US',
      value: 'en-US',
    },
    {
      text: 'br',
      value: 'pt-BR',
    },
  ],
  wrapperComponent: [
    {
      text: 'My profile',
      isLink: true,
      href: '/profile',
      icon: ProfileIcon,
    },
    {
      text: 'Items',
      isLink: true,
      href: '/cart',
      icon: ({ isActive, amount }: iconProps) =>
        CartIcon({ isActive: true, amount: amount }),
    },
  ],
  messageError: (lang, nameInput) => {
    return {
      search: `${
        lang === 'pt-BR'
          ? `Campo ${nameInput} é requerido`
          : `Field ${nameInput} is required`
      } `,
    };
  },
};
