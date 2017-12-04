import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default () => (
  <Wrapper>
    <Text>Board Not Found!</Text>
    <Back to="/">Head back!</Back>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back = styled(Link)`
  border-radius: 5px;
  padding: 10px;
  color: RGBA(56, 56, 56, 1);
  background: RGBA(233, 233, 233, 1);
  &:hover {
    background: RGBA(233, 233, 233, 0.5);
  }
`;

const Text = styled.h1`
  color: RGBA(249, 201, 131, 1);
`;
