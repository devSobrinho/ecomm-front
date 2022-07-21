import { gql } from 'graphql-request';

export const CREATE_NEXT_USER_BY_EMAIL = gql`
  mutation CreateNextUserByEmail($email: String!, $password: String!) {
    newUser: createNextUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;
// viewPost -> id: idPost  view: Number
// post static -> revalidation 12 horas
