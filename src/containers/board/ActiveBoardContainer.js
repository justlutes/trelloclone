import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/ActiveBoard';
import ActiveBoard from '../../components/organisms/ActiveBoard';

class ActiveBoardContainer extends React.Component {
  render() {
    return (
      <ActiveBoard
        activeBoard={this.props.activeBoard}
        activeBoardData={this.props.activeBoardData}
        id={this.props.match.params.id}
        enableListEditMode={this.props.actions.enableListEditMode}
        selectActiveBoard={this.props.actions.selectActiveBoard}
        submitList={this.props.actions.submitList}
      />
    );
  }
}

ActiveBoardContainer.propTypes = {
  activeBoard: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = ({ activeBoard, activeBoardData }) => ({
  activeBoard,
  activeBoardData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveBoardContainer);
