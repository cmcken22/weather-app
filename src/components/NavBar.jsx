import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: blue;
`;

const NavBar = ({ locations }) => {
  return (
    <Container>
      {locations?.map(location => {
        return (
          <div>
            {location?.name}
          </div>
        );
      })}
    </Container>
  );
}

export default NavBar