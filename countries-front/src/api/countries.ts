import api from "./api";

export function listCountries() {
  return api.get("/countries");
}

export function getCountryInfo(code: string) {
  return api.get(`/countries/${code}`);
}
