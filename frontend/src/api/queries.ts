
import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
query Countries {
  countries {
    name
    emoji
  }
}
`;