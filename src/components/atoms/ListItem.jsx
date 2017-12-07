import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../utils/Constants';
import animation from '../../utils/Animation';

import CreateCardContainer from '../../containers/card/CreateCardContainer';
/* eslint-disable */

const dropSource = {
  drop(props, monitor) {
    const card = monitor.getItem(); // this item is being dragged
    props.handleDrop(card.title, card.cardId, card.listId, props.id);
    // const droppedItem = props.onDrop(monitor.getItem());
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
  };
}

@DropTarget(ItemTypes.CARD, dropSource, collect)
class ListItem extends React.Component {
  render() {
    const { name, id, connectDropTarget } = this.props;

    return connectDropTarget(
      <div>
        <ListItemWrapper>
          <ListItemHeader>{name}</ListItemHeader>
          <hr />
          <CreateCardContainer listId={id} />
        </ListItemWrapper>
        {/* eslint-disable-next-line */}
      </div>,
    );
  }
}

ListItem.propTypes = {
  connectDropTarget: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const ListItemWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 20px;
  background-color: rgb(255, 255, 255);
  padding: 5px 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 150ms ease-in-out;
  animation: ${animation} 300ms linear;
`;

const ListItemHeader = styled.h4`
  color: #333;
  letter-spacing: 1.66;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

export default ListItem;
