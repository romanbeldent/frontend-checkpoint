
import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
query Countries {
  countries {
    name
    emoji
  }
}
`;

export const ADD_COUNTRY = gql` 
mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    name
    code
    emoji
  }
}
`;