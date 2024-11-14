import { useNavigate } from "react-router-dom";

interface Country {
    name: string;
    countryCode: string;
}

interface CountriesListProps {
    countries: Country[];
}

function CountriesList({countries}: CountriesListProps) {
    const navigate = useNavigate();

    function handleRowClick(code: string) {
        navigate(`/${code}`);
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Code</th>
            </tr>
            </thead>
            <tbody>
            {countries.map((country, index) => (
                <tr key={index} className="hover:bg-base-300 rounded-box" onClick={() => handleRowClick(country.countryCode)}>
                    <td>{country.name}</td>
                    <td>{country.countryCode}</td>
                </tr>
            ))}
            </tbody>
            <tfoot>
            <tr>
                <th>Name</th>
                <th>Code</th>
            </tr>
            </tfoot>
        </table>

    );
}

export default CountriesList;