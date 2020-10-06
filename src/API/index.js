import axios from 'axios';

const url = "https://disease.sh/v3/covid-19/countries/USA";

export const fetchData = async () => {
    try {
        const { data: { cases, recovered, deaths, updated } } = await axios.get(url);
        // const { data } = await axios.get(url);
        // console.log(data);

        const modifiedData = {
            cases,
            recovered,
            deaths,
            updated
        }
        return modifiedData;

    } catch (err) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } =  await axios.get('https://disease.sh/v3/covid-19/nyt/usa');
        return data;
    } catch (error) {
        
    }
}

export const fetchStates = async () => {
    try {
        const { data } = await axios.get('https://disease.sh/v3/covid-19/nyt/states?lastdays=30');
        const modifiedStates = [];
        for(let i = 0; i < 55; i++) modifiedStates.push(data[i].state)

        return modifiedStates;
    } catch (error) {
        
    }
}