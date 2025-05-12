export type CountryCardProps = {
    id: number;
    name: string;
    code?: string;
    emoji: string;
    // continent: { id: number; name: string } | undefined | null;
}

const CountryCard = ({ id, name, code, emoji }: CountryCardProps) => {
    return (
        <div className="country-card-container">
            <div className="ad-card-name">{name}</div>
            <div className="ad-card-emoji">{emoji}</div>
        </div>
    );
};

export default CountryCard;
