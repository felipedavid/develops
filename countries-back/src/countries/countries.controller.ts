import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) {}

    @Get()
    async findAll() {
        return this.countriesService.findAll();
    }

    @Get(':countryCode')
    async getCountryInfo(@Param('countryCode') countryCode: string) {
        return this.countriesService.getCountryInfo(countryCode);
    }
}
