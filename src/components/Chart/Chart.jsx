import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../API';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

function Chart() {

    const [dailyDataSeries, setDailyDataSeries] = useState([]);

    useEffect(() => {
        const fetchDailyDataSeries = async () => {
            setDailyDataSeries(await fetchDailyData());
        }

        fetchDailyDataSeries();
    }, []);

    if(dailyDataSeries.length > 0)console.log(dailyDataSeries[105]);

    const lineChart = (
        dailyDataSeries.length > 100 && (
        <Line 
            data={{
                labels: dailyDataSeries.map(({ date }) => (date)),
                datasets: [{
                    data: dailyDataSeries.map(({cases}) => (cases)),
                    label: 'Cases',
                    borderColor: '#3333ff',
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


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart
