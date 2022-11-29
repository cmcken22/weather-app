import React, { useEffect } from 'react';
import cx from 'classnames';

const WeatherIcon = ({ type, small }) => {
  return (
    <div
      className={cx("weather-icon", {
        "weather-icon--small": small
      })}
      style={{
        backgroundImage: !!type ? `url(../icons/${type}.svg)` : null
      }}
    >
    </div>
  );
}

export default WeatherIcon;