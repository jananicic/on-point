import {IContent} from "./content-container";
import React from "react";

const Content = ({name, capital, currency, population}: IContent) => {
    return <div>
        <h2 data-testid={"content-name"}>{name}</h2>
        <h3 data-testid={"content-capital"}>capital: {capital}</h3>
        <h3 data-testid={"content-currency"}>currency: {currency}</h3>
        <u data-testid={"content-population"}>population: {population}</u>
    </div>
}

export default Content;