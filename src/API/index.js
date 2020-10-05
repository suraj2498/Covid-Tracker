import axios from 'axios';

const url = "https://disease.sh/v3/covid-19/countries/USA";

export const fetchData = async () => {
    try {
        const { data: { cases, recovered, deaths } } = await axios.get(url);

        const modifiedData = {
            cases,
            recovered,
            deaths
        }

        return { cases, recovered, deaths };

    } catch (error) {
        
    }
}