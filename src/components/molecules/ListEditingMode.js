import React from 'react';
import styled from 'styled-components';

class ListEditingMode extends React.Component {
  render() {
    return <p>test</p>;
  }
}

const ListEditingModeWrapper = styled.div`
  padding: 20px 12px;
  height: 75px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.45);
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export default ListEditingMode;
