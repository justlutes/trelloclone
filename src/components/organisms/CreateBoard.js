import React from 'react';
import PropTypes from 'prop-types';

import ActiveCreateBoard from '../molecules/ActiveCreateBoard';
import CreateBoard from '../atoms/CreateBoard';

class CreateBoardContainer extends React.Component {
  render() {
    const {
      cancelCreatingBoard, createNewBoard, newBoard, submitNewBoard,
    } = this.props;

    if (newBoard.open) {
      return (
        <ActiveCreateBoard
          cancelCreatingBoard={cancelCreatingBoard}
          submitNewBoard={submitNewBoard}
        />
      );
    }
    return <CreateBoard create={createNewBoard} />;
  }
}

CreateBoardContainer.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
  newBoard: PropTypes.object,
};

export default CreateBoardContainer;
