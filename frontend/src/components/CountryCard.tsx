import { Link } from "react-router-dom";

export type CountryCardProps = {
    id: number;
    name: string;
    code?: string;
    emoji: string;
    // continent: { id: number; name: string } | undefined | null;
}

const CountryCard = ({ name, code, emoji }: CountryCardProps) => {
    return (
        <div className="country-card-container">
            <Link className="ad-card-link" to={`/country/${code}`} >
                <div className="ad-card-name">{name}</div>
                <div className="ad-card-emoji">{emoji}</div>
            </Link >
        </div>
    );
};

export default CountryCard;
