import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchStates } from '../../API';

import styles from './CountryPicker.module.css';

function CountryPicker({ handleStateChange }) {

    const [states, setStates] = useState([]);

    useEffect(() => {
        const fetchAPIStates = async () => {
            setStates(await fetchStates());
        }

        fetchAPIStates();
    }, [setStates]);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => {handleStateChange(e.target.value)}}>
                <option value=""> All States</option>
                {states.map((state, i) => <option key={i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
