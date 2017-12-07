import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/CreateNewBoard';
import BoardCollection from '../../components/organisms/BoardCollection';

const BoardContainer = ({ actions: { createNewBoard }, boardsCollection }) => (
  <BoardCollection boardsCollection={boardsCollection} createNewBoard={createNewBoard} />
);

BoardContainer.propTypes = {
  boardsCollection: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    createNewBoard: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = ({ boardsCollection }) => ({
  boardsCollection,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
