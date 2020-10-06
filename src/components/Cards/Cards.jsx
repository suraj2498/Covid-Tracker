import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Cards = ({ data: {cases, recovered, deaths, updated} }) => {
    return (
        <div className={styles.container}>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">
                            {cases && <CountUp 
                                start={0}
                                end={cases}
                                duration={2.5}
                                separator=","
                            />}
                        </Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            {recovered && <CountUp 
                                start={0}
                                end={recovered}
                                duration={2.5}
                                separator=","
                            />}
                        </Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            {deaths && <CountUp 
                                start={0}
                                end={deaths}
                                duration={2.5}
                                separator=","
                            />}
                        </Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
