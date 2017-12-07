import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/ActiveBoard';
import ActiveBoard from '../../components/organisms/ActiveBoard';

const ActiveBoardContainer = ({
  actions: {
    enableListEditMode, handleDrop, selectActiveBoard, submitList,
  },
  activeBoard,
  activeBoardData,
  match,
}) => (
  <ActiveBoard
    activeBoard={activeBoard}
    activeBoardData={activeBoardData}
    id={match.params.id}
    enableListEditMode={enableListEditMode}
    handleDrop={handleDrop}
    selectActiveBoard={selectActiveBoard}
    submitList={submitList}
  />
);

ActiveBoardContainer.propTypes = {
  activeBoard: PropTypes.shape({
    title: PropTypes.string,
    open: PropTypes.bool,
    id: PropTypes.string,
    success: PropTypes.bool,
  }).isRequired,
  activeBoardData: PropTypes.shape({
    listItems: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  actions: PropTypes.shape({
    enableListEditMode: PropTypes.func,
    handleDrop: PropTypes.func,
    selectActiveBoard: PropTypes.func,
    submitList: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = ({ activeBoard, activeBoardData }) => ({
  activeBoard,
  activeBoardData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveBoardContainer);
