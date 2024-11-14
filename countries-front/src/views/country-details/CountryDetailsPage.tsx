import { useEffect, useState } from "react";
import { getCountryInfo } from "../../api/countries";
import { useParams } from "react-router-dom";
import CountryInfo from "./components/CountryInfo.component";
import BorderCountries from "./components/BorderCountries.component";
import PopulationChart from "./components/PopulationChart.component";

function CountryDetailsPage() {
    const { code } = useParams();
    const [country, setCountry] = useState<any>(null);

    if (!code) {
        return <div>Country Not Found.</div>;
    }

    useEffect(() => {
        getCountryInfo(code).then((response) => {
            setCountry(response.data);
        });
    }, [code]);

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex flex-wrap gap-8">
                <div className="flex-1 bg-base-200 rounded-box p-8">
                    <div className="font-semibold text-lg mb-4">Information</div>
                    <CountryInfo flagURL={country.flagURL} countryInfo={country.countryInfo} />
                </div>
                <div className="flex-1 bg-base-200 rounded-box p-8">
                    <span className="font-semibold text-lg mb-4">Border Countries</span>
                    <BorderCountries borderCountries={country.countryInfo.borders} />
                </div>
            </div>
            <div className="flex-1 bg-base-200 rounded-box p-8 mt-8">
                <div className="font-semibold text-lg">Population Chart</div>
                <PopulationChart populationData={country.populationCounts}/>
            </div>
        </div>
    );
}

export default CountryDetailsPage;