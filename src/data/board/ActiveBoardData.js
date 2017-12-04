import { combineReducers } from 'redux';
import uniqueId from 'lodash/uniqueId';
import { SUBMIT_LIST, SUBMIT_NEW_CARD, HANDLE_DROP, ARCHIVE_POST } from '../constants';

const ListReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_LIST: {
      const listId = uniqueId('list_');
      return {
        ...state,
        [listId]: {
          name: action.payload,
          id: listId,
          cards: [],
        },
      };
    }
    case SUBMIT_NEW_CARD: {
      const { listId, cardName, cardId } = action.payload;
      const currentList = state[listId];
      currentList.cards.push({
        name: cardName,
        cardId,
        listId,
        isArchived: false,
      });
      return {
        ...state,
        [listId]: currentList,
      };
    }
    case HANDLE_DROP: {
      const {
        cardId, cardName, listId, newListId,
      } = action.payload;
      const currentList = state[newListId];
      currentList.cards.push({
        name: cardName,
        cardId,
        listId: newListId,
      });
      const removeCard = state[listId].cards.find(card => card.cardId === cardId);
      state[listId].cards.splice(removeCard, 1);
      return {
        ...state,
        [newListId]: currentList,
      };
    }
    case ARCHIVE_POST: {
      const { cardId, listId } = action.payload;
      const currentList = state[listId];
      const findCard = currentList.cards.find(card => card.cardId === cardId);

      if (!findCard.isArchived) {
        findCard.isArchived = true;
      }

      return {
        ...state,
        [listId]: currentList,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  listItems: ListReducer,
});
