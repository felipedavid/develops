import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

const getCountryISO3 = require("country-iso-2-to-3");

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

    async findAll() {
        const url = 'https://date.nager.at/api/v3/AvailableCountries';
        const response$ = this.httpService.get(url).pipe(
            map(response => response.data)
        );
        return await lastValueFrom(response$);
    }

  async getCountryInfo(countryCode: string) {
    const countryInfoUrl = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;
    const populationDataUrl = 'https://countriesnow.space/api/v0.1/countries/population';
    const flagUrl = 'https://countriesnow.space/api/v0.1/countries/flag/images';

    const [countryInfo, populationCounts, flagURL] = await Promise.all([
      this.getCountryInf(countryInfoUrl),
      this.getPopulationData(populationDataUrl, countryCode),
      this.getFlagUrl(flagUrl, countryCode),
    ]);

    return {
      countryInfo,
      populationCounts,
      flagURL,
    };
  }

  private async getCountryInf(url: string) {
    const res = this.httpService.get(url).pipe(
      map(response => response.data || {})
    );
    return await lastValueFrom(res);
  }

  private async getPopulationData(url: string, countryCode: string) {
    const iso3CountryCode = getCountryISO3(countryCode)
    const res = this.httpService.get(url).pipe(
        map(response => {
          const country = response.data.data.find(country => country.code === iso3CountryCode);
          return country ? country.populationCounts : [];
        })
      );
      return await lastValueFrom(res);
  }

  private async getFlagUrl(url: string, countryCode: string) {
    const res = this.httpService.get(url).pipe(
        map(response => {
          const country = response.data.data.find(country => country.iso2 === countryCode);
          return country ? country.flag : '';
        })
      );
    return await lastValueFrom(res);
  }
}