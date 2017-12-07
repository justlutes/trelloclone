import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import animation from '../../utils/Animation';

import CreateBoardContainer from '../../containers/board/CreateBoardContainer';
import Board from '../atoms/Board';

const BoardCollection = ({ boardsCollection }) => (
  <Wrapper>
    <CreateBoardContainer />
    {boardsCollection.map(board => <Board key={board.id} title={board.title} id={board.id} />)}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
  animation: ${animation} 300ms linear;
`;

BoardCollection.propTypes = {
  boardsCollection: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardCollection;
