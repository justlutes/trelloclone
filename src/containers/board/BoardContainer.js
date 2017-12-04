import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/CreateNewBoard';
import BoardCollection from '../../components/organisms/BoardCollection';

class BoardContainer extends React.Component {
  render() {
    return (
      <BoardCollection
        boardsCollection={this.props.boardsCollection}
        createNewBoard={this.props.actions.createNewBoard}
      />
    );
  }
}

BoardContainer.propTypes = {
  boardsCollection: PropTypes.array.isRequired,
};

const mapStateToProps = ({ boardsCollection }) => ({
  boardsCollection,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
