import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/CreateNewBoard';
import CreateBoard from '../../components/organisms/CreateBoard';

class CreateBoardContainer extends React.Component {
  render() {
    return (
      <CreateBoard
        newBoard={this.props.newBoard}
        createNewBoard={this.props.actions.createNewBoard}
        submitNewBoard={this.props.actions.submitNewBoard}
        cancelCreatingBoard={this.props.actions.cancelCreatingBoard}
      />
    );
  }
}

CreateBoardContainer.propTypes = {
  newBoard: PropTypes.object,
};

const mapStateToProps = ({ newBoard }) => ({
  newBoard,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardContainer);
