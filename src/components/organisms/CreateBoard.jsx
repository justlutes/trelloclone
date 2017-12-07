import React from 'react';
import PropTypes from 'prop-types';

import ActiveCreateBoard from '../molecules/ActiveCreateBoard';
import CreateBoard from '../atoms/CreateBoard';

const CreateBoardContainer = ({
  cancelCreatingBoard,
  createNewBoard,
  newBoard,
  submitNewBoard,
}) => {
  if (newBoard.open) {
    return (
      <ActiveCreateBoard
        cancelCreatingBoard={cancelCreatingBoard}
        submitNewBoard={submitNewBoard}
      />
    );
  }
  return <CreateBoard create={createNewBoard} />;
};

CreateBoardContainer.propTypes = {
  cancelCreatingBoard: PropTypes.func.isRequired,
  createNewBoard: PropTypes.func.isRequired,
  newBoard: PropTypes.shape({
    open: PropTypes.bool,
    title: PropTypes.string,
    id: PropTypes.string,
    success: PropTypes.bool,
  }).isRequired,
  submitNewBoard: PropTypes.func.isRequired,
};

export default CreateBoardContainer;
