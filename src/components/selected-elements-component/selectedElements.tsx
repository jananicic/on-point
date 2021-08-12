import "./selectedElements.css";
import React from "react";
import {ICountry} from "../../services/list-of-countries";

interface IProps {
    selectedCountries: ICountry[];
    onRemoveCountry: (country: ICountry) => void;
}

const SelectedElements = ({selectedCountries, onRemoveCountry}: IProps) => {
    return <div className={"selectedElements"}>
        {
            selectedCountries.map((country: ICountry, index: number) => {
                return <div key={index}
                            className={"element"}>
                    <p>{country.name}</p>
                    <p className={"closeElement"}
                       onClick={() => onRemoveCountry(country)}>
                        X
                    </p>
                </div>
            })
        }
    </div>
}

export default SelectedElements;