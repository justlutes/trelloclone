import React from 'react';
import styled from 'styled-components';
import animation from '../../utils/Animation';

import CreateBoard from '../molecules/CreateBoard';

const BoardCollection = ({ boardCollection = [] }) => (
  <Wrapper>
    <CreateBoard />
    {boardCollection.map(board => <div key={board.id}>Test</div>)}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
  animation: ${animation} 300ms linear;
`;

export default BoardCollection;
