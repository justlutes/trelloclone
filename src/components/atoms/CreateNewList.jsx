import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import animation from '../../utils/Animation';

const CreateNewList = ({ addList }) => (
  <Wrapper onClick={addList}>
    <Text>Add a list...</Text>
  </Wrapper>
);

CreateNewList.propTypes = {
  addList: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  background-color: #0a2c74;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 150ms ease-in-out;
  cursor: pointer;
  height: 100px;
  padding: 10px 40px;
  align-items: center;
  animation: ${animation} 300ms linear;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 150ms ease-in-out;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Text = styled.h4`
  color: white;
  font-weight: 900;
`;

export default CreateNewList;
