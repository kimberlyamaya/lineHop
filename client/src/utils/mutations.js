import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
export const LOGIN_CUST_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      custUser {
        _id
        username
        phone
      }
    }
  }
`;

// export const ADD_USER = gql`
export const ADD_CUST_USER = gql`
  mutation addCustUser($username: String!, $phone: String!, $password: String!) {
    addCustUser(username: $username, phone: $phone, password: $password) {
      token
      custUser {
        _id
        username
        phone
      }
    }
  }
`;