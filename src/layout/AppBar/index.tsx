import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { openModalCart } from '../../store/modules/Cart/Cart.store';
import { reset } from '../../store/modules/Auth/Auth.store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootState } from '../../store';
import { SearchIcon } from '@components/icons/Search';
import { LanguageSelect } from '@components/LanguageSelect';
import { Text } from '@components/Text';
import { mockAppBar } from './mock';
import { Form } from '@components/Form/styles';
import { Input } from '@components/Input';
import { CartIcon } from '@components/icons/Cart';
import { ProfileIcon } from '@components/icons/Profile';
import { LogoutIcon } from '@components/icons/Logout';
import { LoginIcon } from '@components/icons/Login';
import * as Styled from './styles';

export type AppBarProps = {
  title?: string;
};

const schema = yup
  .object({
    search: yup.string().required(mockAppBar.messageError('', 'search').search),
  })
  .required();

export const AppBar = ({ title }: AppBar.Props): JSX.Element => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { productsList } = useSelector((state: RootState) => state.cart);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { handleSubmit, formState, register } = useForm({
    resolver: yupResolver(schema),
  });

  console.log('productsList', productsList);

  const handleClickCart = () => {
    dispatch(openModalCart());
  };

  const handleSearchSubmit = () => {
    console.log('submit');
  };

  const handleLogout = () => {
    dispatch(reset());
    signOut();
  };

  const handleLogin = () => {
    push('/login');
  };

  return (
    <Styled.Wrapper>
      <LanguageSelect
        title={mockAppBar.titleLanguage}
        languages={mockAppBar.languages}
      />
      <div className="wrapper">
        <div className="wrapper__content">
          <Link href={`${isLoggedIn ? '/profile' : '/login'}`} passHref>
            <a>
              {isLoggedIn ? <ProfileIcon /> : null}
              <Text
                as="span"
                text={`${isLoggedIn ? 'My profile' : 'Login or register'}`}
                type="title-alternative"
                isActive={false}
              />
            </a>
          </Link>
        </div>
        <div className="wrapper__content">
          <button onClick={handleClickCart}>
            <CartIcon
              isActive={productsList.length > 0 ? true : false}
              amount={productsList.length}
            />
            <Text
              as="span"
              text={'Items'}
              type="title-alternative"
              isActive={false}
            />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleSearchSubmit)}>
          <Input
            type={'text'}
            errorTimeOut={5000}
            icon={<SearchIcon />}
            iconRight
            {...register('search')}
            error={formState.errors.search}
          />
        </Form>
        {isLoggedIn ? (
          <LogoutIcon
            onClick={handleLogout}
            fontSize={'3rem'}
            cursor={'pointer'}
            color="#FB7181"
          />
        ) : (
          <LoginIcon
            onClick={handleLogin}
            fontSize={'3rem'}
            cursor={'pointer'}
            color="#53D1B6"
          />
        )}
      </div>
    </Styled.Wrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace AppBar {
  export type Props = {
    title?: string;
  };
}
