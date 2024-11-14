interface CountryInfoProps {
  flagURL: string;
  countryInfo: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
  };
}

function CountryInfo({ flagURL, countryInfo }: CountryInfoProps) {
  return (
    <div className="">
      <img src={flagURL} alt={countryInfo.commonName} />
      <p className="mt-4">Name: {countryInfo.commonName}</p>
      <p>Official Name: {countryInfo.officialName}</p>
      <p>Country Code: {countryInfo.countryCode}</p>
      <p>Region: {countryInfo.region}</p>
    </div>
  );
}

export default CountryInfo;
