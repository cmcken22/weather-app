import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { parseName } from '../../utils';

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
  locations: PropTypes.array,
  activeLocation: PropTypes.object,
  updateLocation: PropTypes.func
}

export default NavBar;