import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { api, apiJsonServer } from '@services/api/api';

interface AuthLogin {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

// export const postLogin = async ({
//   email,
//   password,
// }: AuthLogin): Promise<AuthResponse | null> => {
//   try {
//     const response = await api.post('/login', { email, password });

//     return response.data.response;
//   } catch (error) {
//     return null;
//   }
// };

export const postLogin = async ({
  email,
  password,
}: AuthLogin): Promise<AuthResponse | null> => {
  try {
    const response = await api.post('/login', { email, password });

    return response.data.response;
  } catch (error) {
    return null;
  }
};

export const useMutationLogin = () => {
  return useMutation('login', postLogin, {
    onSuccess: (data) => {
      if (data?.user) {
        toast.success(`Logged in`);
      } else {
        toast.error(`Incorrect email or password`);
      }
    },
    onError: () => {
      toast.error(`Sorry, there was an error`);
    },
  });
};
