import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import animation from '../../utils/Animation';

const CurrentBoardTitle = ({ children }) => (
  <Wrapper>
    <Title>{children}</Title>
  </Wrapper>
);

CurrentBoardTitle.propTypes = {
  children: PropTypes.node,
};

CurrentBoardTitle.defaultProps = {
  children: '',
};

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px 60px;
  width: 100%;
  animation: ${animation} 300ms linear;
`;

const Title = styled.h1`
  color: white;
  word-break: break-all;
  background-color: #9fe7a4;
  text-shadow: 0px 0px 3px #000;
  padding: 10px 60px;
  margin: 0 0 0 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default CurrentBoardTitle;
