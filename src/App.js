import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './API';

const App = () => {

  const [data, setData] = useState({})
  useEffect(() => {
      const fetch = async () => {
        setData(await fetchData());
      }
      fetch();
  }, []);

  

  return (
    <div className = {styles.container}>
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
