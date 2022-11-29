import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { washington, toronto } from '../../MockData';
import NavBar from './Navbar';
import Forecast from './Forecast';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [activeLocation, setActiveLocation] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
      params: {
        aggregateHours: '24',
        // location: 'Washington,DC,USA',
        location: 'Toronto,ON,CANADA',
        contentType: 'json',
        unitGroup: 'us',
        shortColumnNames: '0',
        iconSet: 'icons1',
        forecastDays: 5
      },
      headers: {
        'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
        // 'X-RapidAPI-Key': '7cb8836e36mshe42a91f2a819bbfp1a6f7djsn9d90b837331fxxx',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log('response.data:', response.data);
    }).catch(function (error) {
      console.error(error);
    });

    const res = [toronto, washington];
    setLocations(res);
  }, []);

  useEffect(() => {
    if (locations?.length && activeLocation === null) {
      const [firstLocation] = locations;
      setActiveLocation(firstLocation);
    }
  }, [locations, activeLocation]);

  const handleUpdateLocation = useCallback((location) => {
    setActiveLocation(location);
  }, []);

  return (
    <div className='app'>
      <NavBar
        locations={locations}
        activeLocation={activeLocation}
        updateLocation={handleUpdateLocation}
      />
      <Forecast location={activeLocation} />
    </div>
  );
}

export default App;