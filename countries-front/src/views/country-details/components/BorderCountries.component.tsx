import CountriesList from "../../components/CountriesList";

interface BorderCountry {
    commonName: string;
    countryCode: string;
    name: string;
}

interface BorderCountriesProps {
    borderCountries: BorderCountry[];
}

function BorderCountries({borderCountries}: BorderCountriesProps) {
    return (
        <div>
            <CountriesList countries={borderCountries.map(country => ({ countryCode: country.countryCode, name: country.commonName  }))} />
        </div>
    )
}

export default BorderCountries;