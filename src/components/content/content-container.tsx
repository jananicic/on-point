import "./content.css";
import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import Content from "./content";
import {ICountry} from "../../services/list-of-countries";
import {fetchContent} from "../../services/content";

interface IProps {
    selectedCountries: ICountry[];
}

export interface IContent {
    name: string,
    capital: string,
    currency: string,
    population: number,
}

const ContentContainer = ({selectedCountries}: IProps) => {
    const [activeCountry, setActiveCountry] = useState({} as ICountry);
    const [content, setContent] = useState({} as IContent);

    useEffect(() => {
        if (selectedCountries.length > 0 && !!activeCountry) {
            setActiveCountry(selectedCountries[0]);
        }
    }, [selectedCountries])

    useEffect(() => {
        const failedToFetch = {
            name: activeCountry.name,
            capital: "-",
            currency: "-",
            population: 0,
        } as IContent;

        const callFetch = () => {
            fetchContent(activeCountry).then(data => {
                setContent(data ?? failedToFetch);
            })
        }
        callFetch();
    }, [activeCountry])

    const getIndexOfActiveCountry = () => {
        return selectedCountries.map(country => country.id).indexOf(activeCountry.id);
    }

    const prevCountry = () => {
        const index = getIndexOfActiveCountry();
        setActiveCountry(selectedCountries[index - 1]);
    }

    const nextCountry = () => {
        const index = getIndexOfActiveCountry();
        setActiveCountry(selectedCountries[index + 1]);
    }

    return <div>
        <Content name={content.name}
                 capital={content.capital}
                 currency={content.currency}
                 population={content.population}/>
        <Button className={"content-button"}
                data-testid={"prev-btn"}
                variant="contained"
                color="primary"
                disabled={getIndexOfActiveCountry() === 0}
                onClick={prevCountry}>
            Previous country
        </Button>
        <Button className={"content-button"}
                data-testid={"next-btn"}
                variant="contained"
                color="primary"
                disabled={getIndexOfActiveCountry() === selectedCountries.length - 1}
                onClick={nextCountry}>
            Next country
        </Button>
    </div>
}

export default ContentContainer;