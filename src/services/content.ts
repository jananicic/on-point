import {ICountry} from "./list-of-countries";
import axios from "axios";
import {IContent} from "../components/content/content-container";

export const fetchContent = async (selectedCountry: ICountry) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${selectedCountry.name}`);
        const data = response.data[0];
        return {
            name: data.name,
            capital: data.capital,
            currency: data.currencies[0].name,
            population: data.population,
        } as IContent;
    } catch (e) {
        console.log("fetchContent ERROR: ", e);
    }
}