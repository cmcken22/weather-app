import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const parseName = (location = "") => {
  const [city] = location.split(',');
  return city;
}

const NavBar = ({ locations, activeLocation, updateLocation }) => {

  const handleSelectLocation = (location) => {
    if (updateLocation) updateLocation(location);
  }

  return (
    <div className='navbar'>
      {locations?.map(location => {
        return (
          <div
            key={location?.data?.id}
            className={cx('navbar__location', {
              'navbar__location--active': location?.name === activeLocation?.name
            })}
            onClick={() => handleSelectLocation(location)}
          >
            {parseName(location?.name)}
          </div>
        );
      })}
    </div>
  );
}

NavBar.propTypes = {
  locations: PropTypes.object,
  activeLocation: PropTypes.string,
  updateLocation: PropTypes.func
}

export default NavBar;