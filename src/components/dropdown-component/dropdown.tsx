import "./dropdown.css";
import React, {useEffect, useState} from "react";
import {ICountry} from "../../services/list-of-countries";
import {getCountries} from "../../services/countries";

interface IProps {
    onCountrySelect: (country: ICountry) => void;
    selectedCountries: ICountry[];
    search: string;
}

const Dropdown = ({onCountrySelect, selectedCountries, search}: IProps) => {
    const [countries, setCountries] = useState([] as ICountry[]);

    useEffect(() => {
        setCountries(getCountries(search, selectedCountries))
    }, [search]);

    return <div className={"dropdown-content"}>
        {
            countries.map((country: ICountry, index: number) => {
                return <p key={index}
                          onClick={() => onCountrySelect(country)}>
                    {country.name}
                </p>
            })
        }
    </div>
}

export default Dropdown;