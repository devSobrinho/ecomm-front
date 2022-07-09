import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Form } from '@components/Form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { setCredentials } from '../../store/modules/Auth/Auth.store';
import { RootState } from '../../store';
import { useMutationLogin } from 'src/hooks/useAuth';
import { PasswordIcon } from '../../components/icons/Password';
import { MessageIcon } from '../../components/icons/Message';
import { Input } from '@components/Input';
import { InputSubmit } from '@components/Input/InputSubmit';
import { Text } from '@components/Text';
import { Logo } from '@components/Logo';
import { InputButton } from '@components/Input/InputButton';
import { GoogleIcon } from '@components/icons/Google';
import { FacebookIcon } from '@components/icons/Facebook';
import * as Styled from './styles';

export type LoginProps = {
  title?: string;
};

interface FormUserData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const Login = ({ title }: LoginProps): JSX.Element => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { formState, handleSubmit, register } = useForm<FormUserData>({
    resolver: yupResolver(schema),
  });
  const { mutateAsync, data } = useMutationLogin();

  const session = useSession();

  if (session.data?.user) {
    console.log('session', session);
    // dispatch( setCredentials({
    //   email: session.data.user.email,
    //   token: session.data.user.,
    // })
  }

  // nao da retorno por conta do mirage + json-server com axios
  // const handleLoginSubmit = async (user: FormUserData) => {
  //   // const responseGet = await apiJsonServer.get('/users');
  //   // console.log('get all users json-server', responseGet.data);

  //   // const responseFetch = await fetch('http://localhost:5000/login', {
  //   //   method: 'post',
  //   //   body: JSON.stringify({
  //   //     email: 'teste@teste.com',
  //   //     password: '123456',
  //   //   }),
  //   //   headers: {
  //   //     'Content-Type': 'application/json; charset=utf-8',
  //   //   },
  //   // });
  //   // const responseFetchData = await responseFetch.json();
  //   // console.log('responseFetchData', responseFetchData);

  //   // axios api do json server --> mirage nao retorna response
  //   // const responseJson = await apiJsonServer.post('/login', user);
  //   // console.log('responseJson', responseJson);

  //   // miragejs com fetch pq o axios nao funciona
  //   const response = await api.post('/login', user);
  //   console.log('response data', response.data);
  // };

  // handleLoginSubmit with react query
  const handleLoginSubmit = async (user: FormUserData) => {
    const data = await mutateAsync(user);
    if (data?.user) {
      dispatch(
        setCredentials({
          email: data.user.email,
          token: data.accessToken,
        }),
      );
      push('/');
    }
  };

  const handleLoginProviderGoogle = () => {
    try {
      signIn('google', {
        redirect: true,
        callbackUrl: '/provider/',
        // callbackUrl: '/api/provider/',
      });
    } catch (error) {
      console.log('errou');
    }
  };

  return (
    <Styled.Wrapper>
      <Logo />

      <Text as="h2" text="Welcome to E-com" type="title-card" />
      <Text as="p" text="Sign in to continue" type="title-alternative" />

      <Form handleFormSubmit={handleSubmit(handleLoginSubmit)}>
        <Input
          type={'text'}
          placeholder={'Insert Email'}
          icon={<MessageIcon />}
          {...register('email')}
          error={formState.errors.email}
        />
        <Input
          type={'password'}
          placeholder={'Insert Password'}
          icon={PasswordIcon()}
          {...register('password')}
          error={formState.errors.password}
        />
        <InputSubmit text="Sign In" />
      </Form>

      <div className="orLogin">
        <Text as="span" text="or" type="title-alternative" isUpperCase />
      </div>
      <InputButton
        styles="secondary"
        text="Login with Google"
        icon={<GoogleIcon />}
        onClick={handleLoginProviderGoogle}
      />
      <InputButton
        styles="secondary"
        text="Login with facebook"
        icon={<FacebookIcon />}
      />
      <Link href="" passHref>
        <a>
          <Text
            as="span"
            text="Forgot Password?"
            type="logo-title"
            isActive
            isCapitalize
          />
        </a>
      </Link>
      <Link href="" passHref>
        <a>
          <Text
            as="p"
            text="Don’t have a account?"
            type="text-alternative"
            isActive
            isCapitalize
          />

          <Text
            as="span"
            text="Register"
            type="logo-title"
            isActive
            isCapitalize
          />
        </a>
      </Link>
    </Styled.Wrapper>
  );
};
