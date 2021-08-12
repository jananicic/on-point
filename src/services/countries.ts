import {ICountry, listOfCountries} from "./list-of-countries";

const cachedCountries: Map<string, ICountry[]> = new Map();

export const getCountries = (search: string = "", selectedCountries: ICountry[]) => {
    let countries: ICountry[] = [];

    // If there is no search and default results is already cached
    if (search === "" && cachedCountries.has("")) {
        // return cached countries
        const cached = cachedCountries.get("") ?? [] as ICountry[];
        countries = [...cached];
    } else if (search === "" && !cachedCountries.has("")) {
        // fetch countries api and save it to cache
        countries = listOfCountries
        cachedCountries.set("", [...countries]);
    }

    // if there is search
    if (search !== "") {
        // and results are cached
        if (cachedCountries.has(search)) {
            // return cached countries
            const cached = cachedCountries.get(search) ?? [] as ICountry[];
            countries = [...cached];
        } else if (getCachedCountriesValues(search) !== undefined) {
            // if there is same first letter in cached countries,
            // don't fetch api, filter through values from cached key
            countries = getValuesFromKey(search);
        } else {
            // else fetch countries api and save it to cache
            countries = listOfCountries.filter((country: ICountry) => {
                return country.name.toLowerCase().startsWith(search.toLowerCase());
            });
            cachedCountries.set(search, [...countries]);
        }
    }

    // remove selected countries
    selectedCountries.forEach( selectedCountry => {
        countries.forEach( country => {
            if (selectedCountry.id === country.id) {
                const countriesId = countries.map( country => country.id);
                const index = countriesId.indexOf(country.id);
                countries.splice(index, 1);
                return;
            }
        })
    });

    // return only 10 /names/?search=al&limit=10
    if (countries?.length > 10) {
        return countries.slice(0, 10);
    }

    return countries;
};

/**
 * Check if first letter from search is stored in cachedCountries keys
 * @param search
 */
const getCachedCountriesValues = (search: string): ICountry[] | undefined => {
    let cachedValues: ICountry[] | undefined = undefined;
    cachedCountries.forEach((value: ICountry[], key: string) => {
        if (key[0] === search[0]) {
            cachedValues = value;
        }
    });
    return cachedValues;
}

/**
 *  Filter through values in cashedCountries that have stored first letter from search
 * @param search
 */
const getValuesFromKey = (search: string) => {
    const values = getCachedCountriesValues(search);

    if (values !== undefined) {
        return values.filter((country: ICountry) => {
            return country.name.toLowerCase().startsWith(search.toLowerCase());
        });
    } else {
        return [] as ICountry[];
    }
}
