import React from 'react';
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
    const { activeBoardData } = this.props;

    const mappedList = mapValues(activeBoardData.listItems, list => list.name);
    const mappedKeys = Object.keys(mappedList);

    return mappedKeys.map((id, i) => <ListItem key={i} id={id} name={mappedList[id]} />);
  }

  render() {
    return <Wrapper>{this.renderListItems()}</Wrapper>;
  }
}

export default ListItemsContainer;
