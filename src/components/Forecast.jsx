import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.div`
  height: 200px;
  width: 200px;
  background-image: ${props => `url(../icons/${props?.type}.svg)`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Forecast = ({ location }) => {

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <Container>
      <Icon type={location?.currentConditions?.icon} />
      <p>
        {location?.currentConditions?.icon}
      </p>
      <p>Temp: {location?.currentConditions?.temp}&#xb0;</p>
    </Container>
  );
}

export default Forecast;