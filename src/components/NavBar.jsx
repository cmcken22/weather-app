import React from 'react';

const NavBar = ({ locations }) => {
  return (
    <div>
      {locations?.map(location => {
        return (
          <div>
            {location?.name}
          </div>
        );
      })}
    </div>
  );
}

export default NavBar