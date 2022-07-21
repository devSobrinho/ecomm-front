import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, useSession, getCsrfToken } from 'next-auth/react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { setCredentials } from '../../store/modules/Auth/Auth.store';
import { RootState } from '../../store';
import { useMutationLogin } from 'src/hooks/useAuth';
import { PasswordIcon } from '../../components/icons/Password';
import { MessageIcon } from '../../components/icons/Message';
import { Input } from '@components/Input';
import { Form } from '@components/Form';
import { InputSubmit } from '@components/Input/InputSubmit';
import { Text } from '@components/Text';
import { Logo } from '@components/Logo';
import { InputButton } from '@components/Input/InputButton';
import { GoogleIcon } from '@components/icons/Google';
import { FacebookIcon } from '@components/icons/Facebook';
import * as Styled from './styles';
import { api } from '@services/api/api';
import { useEffect } from 'react';

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
  // const { mutateAsync, data } = useMutationLogin();
  const session = useSession();

  useEffect(() => {
    if (session.data?.user) {
      dispatch(
        setCredentials({
          email: session.data.user.email!,
          token: String(session.data.token),
        }),
      );
      push('/');
    }
  }, [dispatch, push, session]);

  if (session.data?.user) {
    console.log('session', session);
  }

  const handleLoginSubmit = async ({ email, password }: FormUserData) => {
    await signIn('credentials', {
      email,
      password,
    });
  };

  const handleLoginProviderGoogle = () => {
    try {
      signIn('google', {
        redirect: true,
        callbackUrl: '/provider/',
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
