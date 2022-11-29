import React, { useCallback, useEffect, useState } from 'react';
import NavBar from './Navbar';
import Forecast from './Forecast';
import { LOCATIONS } from '../constants';
import { serializeData } from '../utils';
import EmptyState from './EmptyState';
import WeatherAPI from '../utils/WeatherAPI';
import { FadeLoader } from 'react-spinners';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [activeLocation, setActiveLocation] = useState(null);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = useCallback(async () => {
    const locations = [LOCATIONS.TORONTO, LOCATIONS.TOKYO, LOCATIONS.TULUM];
    let promises = [];
    for (let i = 0; i < locations.length; i++) {
      promises.push(WeatherAPI.getForecast(locations[i]));
    }

    Promise.all(promises).then(res => {
      const data = serializeData(locations, res);
      setLocations(data);
      setLoading(false);
    }).catch(err => {
      console.log('err:', err);
      alert('Error retreiving data!');
      setLoading(false);
    });
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

  if (!loading && !locations?.length) {
    return (
      <div className='app'>
        <EmptyState
          title="Error retreiving data!"
          subTitle="Please try again."
        />
      </div>
    );
  }

  return (
    <div className='app'>
      {loading ? (
        <div className='app__loader'>
          <FadeLoader color="#36d7b7" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <NavBar
            locations={locations}
            activeLocation={activeLocation}
            updateLocation={handleUpdateLocation}
          />
          <Forecast location={activeLocation?.data} />
        </>
      )
}
    </div >
  );
}

export default App;