import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/CreateNewBoard';
import CreateBoard from '../../components/organisms/CreateBoard';

const CreateBoardContainer = ({
  actions: { cancelCreatingBoard, createNewBoard, submitNewBoard },
  newBoard,
}) => (
  <CreateBoard
    newBoard={newBoard}
    createNewBoard={createNewBoard}
    submitNewBoard={submitNewBoard}
    cancelCreatingBoard={cancelCreatingBoard}
  />
);

CreateBoardContainer.propTypes = {
  newBoard: PropTypes.shape({
    title: PropTypes.string,
    open: PropTypes.bool,
    id: PropTypes.string,
    success: PropTypes.bool,
  }).isRequired,
  actions: PropTypes.shape({
    cancelCreatingBoard: PropTypes.func.isRequired,
    createNewBoard: PropTypes.func.isRequired,
    submitNewBoard: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ newBoard }) => ({
  newBoard,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardContainer);
