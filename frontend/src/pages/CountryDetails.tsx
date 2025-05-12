import { useNavigate, useParams } from "react-router-dom";
import { GET_COUNTRY } from "../api/queries";
import { useQuery } from "@apollo/client";

const CountryDetails = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: String(code) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) {
    return (
      <>
        <button
          className="button button-primary link-button"
          onClick={() => navigate("/")}
        >
          Back to all countries
        </button>
        <section className="country-details">
          <div className="country-details-container">
              <>
                <div className="country-emoji">{data.country.emoji}</div>
                <div className="country-name">Name: {data.country.name}</div>
                <div className="country-code">Code: {data.country.code}</div>
                <div className="country-code">Continent: {data.country.continent.name}</div>
              </>
          </div>
        </section >
      </>
    );
  }
};

export default CountryDetails;