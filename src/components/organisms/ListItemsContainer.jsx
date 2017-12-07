import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mapValues from 'lodash/mapValues';
import ListItem from '../atoms/ListItem';

const Wrapper = styled.div`
  display: flex;
`;

class ListItemsContainer extends React.Component {
  constructor() {
    super();

    this.renderListItems = this.renderListItems.bind(this);
  }

  renderListItems() {
    const { activeBoardData, handleDrop } = this.props;

    const mappedList = mapValues(activeBoardData.listItems, list => list.name);
    const mappedKeys = Object.keys(mappedList);

    return mappedKeys.map(id => (
      <ListItem key={id} id={id} name={mappedList[id]} handleDrop={handleDrop} />
    ));
  }

  render() {
    return <Wrapper>{this.renderListItems()}</Wrapper>;
  }
}

ListItemsContainer.propTypes = {
  activeBoardData: PropTypes.shape({
    listItems: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  handleDrop: PropTypes.func.isRequired,
};

export default ListItemsContainer;
