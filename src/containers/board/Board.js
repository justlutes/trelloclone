import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BoardCollection from '../../components/organisms/BoardCollection';

class BoardContainer extends React.Component {
  render() {
    return <BoardCollection boardsCollection={this.props.boardsCollection} />;
  }
}

BoardContainer.propTypes = {
  boardsCollection: PropTypes.array.isRequired,
};

const mapStateToProps = ({ boardsCollection }) => ({
  boardsCollection,
});

export default connect(mapStateToProps)(BoardContainer);
