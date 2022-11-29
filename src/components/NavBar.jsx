import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Location = styled.div`
  background: blue;

  ${props => props.active && css`
    background: palevioletred;
    color: white;
  `}
`;

const NavBar = ({ locations, activeLocation, updateLocation }) => {

  const handleSelectLocation = (location) => {
    if (updateLocation) updateLocation(location);
  }

  return (
    <Container>
      {locations?.map(location => {
        return (
          <Location
            active={location?.name === activeLocation?.name}
            onClick={() => handleSelectLocation(location)}
          >
            {location?.name}
          </Location>
        );
      })}
    </Container>
  );
}

export default NavBar