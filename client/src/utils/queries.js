import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
export const QUERY_USER = gql`
  query custUser($username: String!) {
    custUser(username: $username) {
      _id
      username
      phone
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      phone
    }
  }
`;
