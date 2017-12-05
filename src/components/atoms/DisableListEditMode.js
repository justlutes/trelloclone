import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  left: 30px;
  top: -24px;
  z-index: 10;
`;

const DisableButton = styled.i`
  width: 24px;
  height: 24px;
  padding: 5px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.25) rotate(4.5deg);
  }
`;

export default ({ disable }) => (
  <Wrapper onClick={disable}>
    <DisableButton className="material-icons">close</DisableButton>
  </Wrapper>
);
