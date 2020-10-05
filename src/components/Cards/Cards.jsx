import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';


const Cards = ({ data: {cases, recovered, deaths} }) => {

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">{cases}</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered}</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography variant="body2">Number of recoveries of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{deaths}</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography variant="body2">Number of deaths from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
