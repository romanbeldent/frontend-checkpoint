import { useMutation } from "@apollo/client";
import { ADD_COUNTRY, GET_COUNTRIES } from "../api/queries";
import CreateCountryForm from "../components/CountryForm";
import ListingCountries from "../components/ListingCountries";

export function HomePage() {
  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
  });
  
  return (
    <>
      <ListingCountries />
      <CreateCountryForm submitToBackend={addCountry} />
    </>
  )
}