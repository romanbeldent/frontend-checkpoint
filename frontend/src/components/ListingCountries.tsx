import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../api/queries";
import CountryCard, { CountryCardProps } from "./CountryCard";

const ListingCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (data) {
    return (
      <>
        <h2>All countries</h2>
        <section className="all-countries">
          {data.countries.map((el: CountryCardProps) => (
            <div key={el.id}>
              <CountryCard
                id={el.id}
                name={el.name}
                code={el.code}
                emoji={el.emoji}
              />
            </div>
          ))}
        </section>
      </>
    );
  }
};

export default ListingCountries;
