import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

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

WeatherIcon.defaultProps = {
  small: false
}

WeatherIcon.propTypes = {
  type: PropTypes.string,
  small: PropTypes.bool
}

export default WeatherIcon;