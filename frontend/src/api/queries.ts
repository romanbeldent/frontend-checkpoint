import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
query GetCountries {
  countries {
    id
    name
    emoji
    code
  }
}
`;

export const GET_COUNTRY = gql`
query GetCountryByCode($code: String!) {
  country(code: $code) {
    name
    emoji
    code
    continent {
      name
    }
  }
}
`;

export const ADD_COUNTRY = gql` 
mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    name
    emoji
    code
  }
}
`;