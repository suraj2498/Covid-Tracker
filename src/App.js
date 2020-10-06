import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import logo from './img/covid-logo.jpg';

import { fetchData } from './API';

const App = () => {

  const [data, setData] = useState({})
  useEffect(() => {
      const fetch = async () => {
        setData(await fetchData());
      }
      fetch();
  }, []);

  const handleStateChange = async (state) => {
    console.log(state);
  }

  return (
    <div className = {styles.container}>
      {/* <img src={logo} alt=""/> */}
      <Cards data={data}/>
      <CountryPicker handleStateChange={handleStateChange}/>
      <Chart />
    </div>
  );
}

export default App;
