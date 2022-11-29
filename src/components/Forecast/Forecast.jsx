import React, { useEffect } from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const Forecast = ({ location }) => {

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="forecast">
      <div className="forecast__main">
        {/* <div className="forecast__icon"
          style={{
            backgroundImage: `url(../icons/${location?.currentConditions?.icon}.svg)`
          }}
        /> */}
        <WeatherIcon type={location?.currentConditions?.icon} />
        <p>
          {location?.currentConditions?.icon}
        </p>
        <p>Temp: {location?.currentConditions?.temp}&#xb0;</p>
      </div>
      <div className="forecast__weekly">
        {location?.values?.map(val => {
          return (
            <div className='forecast__day'>
              <p>{new Date(val?.datetimeStr).toLocaleDateString()}</p>
              <WeatherIcon small type={val?.icon} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Forecast;