import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../API';
import { Line, Bar } from 'react-chartjs-2';
import { ButtonGroup, Button } from '@material-ui/core';

import styles from './Chart.module.css';

function Chart({ data, state }) {

    const [dailyDataSeries, setDailyDataSeries] = useState([]);
    const [today, setToday] = useState(true);

    useEffect(() => {
        const fetchDailyDataSeries = async () => {
            setDailyDataSeries(await fetchDailyData());
        }

        fetchDailyDataSeries();
    }, []);

    const lineChart = (
        dailyDataSeries.length && (
        <Line 
            data={{
                labels: dailyDataSeries.map(({ date }) => (date)),
                datasets: [{
                    data: dailyDataSeries.map(({cases}) => (cases)),
                    label: 'Cases',
                    borderColor: 'rgb(0, 0, 255)',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    fill: true
                }, {
                    data: dailyDataSeries.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
        />)
    );

    const dayString = today ? 'Today' : 'Over Pandemic';

    const barChart = (
        data.cases &&  (
            <Bar 
                data={{
                    labels: [`Cases ${dayString}`, `Deaths ${dayString}`],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [today ? data.todayCases : data.cases, today ? data.todayDeaths : data.deaths]
                    }]
                }}
                options={{
                    legend: { display: false},
                    title: { display: true, text: `Current Numbers for ${state}`}
                }}
            />
        )
    );

    const Buttons = (
        <ButtonGroup variant="contained" size="medium" color="primary" aria-label="contained button group" className={styles.buttons}>
            <Button onClick={e => {setToday(false)}}>Total</Button>
            <Button onClick={e => {setToday(true)}}>Today</Button>
        </ButtonGroup>
    );

    return (
        <div className={styles.container}>
            {state && Buttons}
            {state ? (barChart) : lineChart}
        </div>
    )
}

export default Chart
