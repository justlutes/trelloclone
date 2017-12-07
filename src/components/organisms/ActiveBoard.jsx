import React from 'react';
import PropTypes from 'prop-types';

import CurrentBoardTitle from '../atoms/CurrentBoardTitle';
import ListWrapper from '../atoms/ListWrapper';
import ListEditingContainer from '../../containers/card/ListEditingContainer';
import ListItemsContainer from '../organisms/ListItemsContainer';
import CreateNewList from '../atoms/CreateNewList';

class ActiveBoard extends React.Component {
  constructor() {
    super();

    this.getTitle = this.getTitle.bind(this);
    this.handleListSubmit = this.handleListSubmit.bind(this);
  }

  componentDidMount() {
    const { id, selectActiveBoard } = this.props;
    selectActiveBoard(id);
  }

  getTitle() {
    return this.props.activeBoard.title;
  }

  handleListSubmit(values) {
    this.props.submitList(values.listItem);
  }

  render() {
    const {
      activeBoard, activeBoardData, enableListEditMode, handleDrop,
    } = this.props;

    if (activeBoard.isFetching) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <CurrentBoardTitle>{this.getTitle()}</CurrentBoardTitle>
        <ListWrapper>
          <ListItemsContainer activeBoardData={activeBoardData} handleDrop={handleDrop} />
          {activeBoard.isEditing ? (
            <ListEditingContainer onSubmit={this.handleListSubmit} />
          ) : (
            <CreateNewList addList={enableListEditMode} />
          )}
        </ListWrapper>
      </div>
    );
  }
}

ActiveBoard.propTypes = {
  activeBoard: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isFetching: PropTypes.bool,
  }).isRequired,
  activeBoardData: PropTypes.shape({
    listItems: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  enableListEditMode: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  selectActiveBoard: PropTypes.func.isRequired,
  submitList: PropTypes.func.isRequired,
};

export default ActiveBoard;
