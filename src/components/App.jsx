import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { washington, toronto } from '../../MockData';
import NavBar from './NavBar';

const App = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    //   params: {
    //     aggregateHours: '24',
    //     // location: 'Washington,DC,USA',
    //     location: 'Toronto,ON,CANADA',
    //     contentType: 'json',
    //     unitGroup: 'us',
    //     shortColumnNames: '0'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '7cb8836e36mshe42a91f2a819bbfp1a6f7djsn9d90b837331f',
    //     'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    //   }
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    const res = [washington, toronto];
    setLocations(res);
  }, []);

  return (
    <div className='app'>
      HELLO
      <NavBar locations={locations} />
    </div>
  );
}

export default App;