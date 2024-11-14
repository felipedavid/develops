import { useEffect, useState } from "react";
import { listCountries } from "../../api/countries";
import CountriesList from "../components/CountriesList";

function CountriesListPage() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    listCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="overflow-x-auto bg-base-200 rounded-box p-8">
      <CountriesList countries={countries} />
    </div>
  );
}

export default CountriesListPage;
