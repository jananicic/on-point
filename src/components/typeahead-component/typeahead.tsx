import "./typeahead.css";
import React from "react";
import {useState} from "react";
import {Input} from "@material-ui/core";
import {ICountry} from "../../services/list-of-countries";
import Dropdown from "../dropdown-component/dropdown";
import SelectedElements from "../selected-elements-component/selectedElements";
import ContentContainer from "../content/content-container";

const Typeahead = () => {
    const [search, setSearch] = useState("");
    const [selectedCountries, setSelectedCountries] = useState([] as ICountry[]);
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

    const onInputChange = (e: any) => {
        const search = e.target.value ?? "";
        setSearch(search);
    }

    const onCountrySelect = (country: ICountry) => {
        setSelectedCountries([...selectedCountries, country]);
        setSearch("");
        setIsDropdownDisplayed(false);
    }

    const onRemoveCountry = (selectedCountry: ICountry) => {
        const newCountries = selectedCountries.filter(country => country.id !== selectedCountry.id);
        setSelectedCountries(newCountries);
    };

    return <div className={"typeahead"}>
        <SelectedElements selectedCountries={selectedCountries} onRemoveCountry={onRemoveCountry}/>
        <h3>Select countries</h3>
        <Input onClick={() => setIsDropdownDisplayed(true)}
               onChange={onInputChange}
               value={search}/>
        {isDropdownDisplayed &&
        <Dropdown selectedCountries={selectedCountries}
                  search={search}
                  onCountrySelect={onCountrySelect}/>}
        {selectedCountries.length > 0 &&
        <ContentContainer selectedCountries={selectedCountries}/>
        }
    </div>
}

export default Typeahead;