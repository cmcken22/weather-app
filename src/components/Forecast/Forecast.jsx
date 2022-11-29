import React, { useState } from 'react';
import { getConditions, getDayOfWeek } from '../../utils';
import EmptyState from '../EmptyState';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const Forecast = ({ location }) => {
  const [today] = useState(getDayOfWeek());
  if (!location) {
    return (
      <EmptyState
        title="No Data Found!"
        subTitle="Please try again."
      />
    );
  }

  return (
    <div className="forecast">
      <div className="forecast__main">
        <p className="forecast__title forecast__title--large">Today</p>
        <div className='forecast__status'>
          <WeatherIcon type={location?.currentConditions?.icon} />
          <div className='forecast__description'>
            <p className='forecast__temp forecast__temp--large'>{location?.currentConditions?.temp}&#xb0;</p>
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
              <p className='forecast__temp'>{val?.temp}&#xb0;</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Forecast;