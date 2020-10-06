import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import logo from './img/covid-logo.png';

import { fetchData } from './API';

const App = () => {

  const [data, setData] = useState({});
  const [state, setState] = useState('');


  useEffect(() => {
      const fetch = async () => {
        setData(await fetchData());
      }
      fetch();
  }, []);

  const handleStateChange = async (state) => {
    setData(await fetchData(state));
    setState(state);
  }

  console.log(data);

  return (
    <div className = {styles.container}>
      <img src={logo} alt="Covid-19" className={styles.image}/>
      <Cards data={data} state={state}/>
      <CountryPicker handleStateChange={handleStateChange}/>
      <Chart data={data} state={state}/>
    </div>
  );
}

export default App;
