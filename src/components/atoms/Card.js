import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from '../../utils/Constants';
import animation from '../../utils/Animation';

const cardSource = {
  beginDrag({ title, cardId, listId }) {
    return {
      title,
      cardId,
      listId,
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class Card extends React.Component {
  render() {
    const {
      connectDragSource, title, archiveCard, cardId, listId,
    } = this.props;

    return connectDragSource(<div>
        <CardWrapper>
          <CardTitle>{title}</CardTitle>
          <ArchiveTask onClick={() => archiveCard(cardId, listId)}>✓</ArchiveTask>
        </CardWrapper>
      </div>);
  }
}

const CardWrapper = styled.div`
  margin: 10px 0;
  padding: 14px 7px;
  background: rgb(241, 241, 241);
  border-radius: 4.5px;
  cursor: grab;
  animation: ${animation} 300ms linear;
  display: flex;
  justify-content: space-around;
  opacity: ${props => (props.isDragging || props.isArchived ? 0.35 : 1)};
  box-shadow: '0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)',
  text-decoration: ${props => (props.isArchived ? 'line-through' : 'none')};
  background-color: ${props => (props.isArchived ? '#DECAFF' : '#caffde')};
`;

const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 19px;
  margin: 0;
`;

const ArchiveTask = styled.div`
  padding: 4px 7px;
  opacity: 0.4;
  border: none;
  border-radius: 9999;
  cursor: pointer;
  font-size: 16px;
`;

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
