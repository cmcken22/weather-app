import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getConditions, getDayOfWeek, convertTemp } from '../../utils';
import EmptyState from '../EmptyState';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const Forecast = ({ location, unit }) => {
  const [today] = useState(getDayOfWeek());
  if (!location) return <EmptyState />;

  return (
    <div className="forecast">
      <div className="forecast__main">
        <p className="forecast__title forecast__title--large">Today</p>
        <div className='forecast__status'>
          <WeatherIcon type={location?.currentConditions?.icon} />
          <div className='forecast__description'>
            <p className='forecast__temp forecast__temp--large'>{convertTemp(location?.currentConditions?.temp, unit)}&#xb0;</p>
            <p className="forecast__title">{getConditions(location?.currentConditions?.icon)}</p>
          </div>
        </div>
      </div>
      <div className="forecast__weekly">
        {location?.values?.map(val => {
          const dayOfWeek = getDayOfWeek(val?.datetimeStr);
          if (dayOfWeek === today) return null;
          return (
            <div
              key={`forecast--${val?.datetimeStr}`}
              className='forecast__day'
            >
              <p className='forecast__title'>{dayOfWeek}</p>
              <WeatherIcon small type={val?.icon} />
              <p className='forecast__temp'>{convertTemp(val?.temp, unit)}&#xb0;</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  location: PropTypes.object,
  unit: PropTypes.string
}

export default Forecast;