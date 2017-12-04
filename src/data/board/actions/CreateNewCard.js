import { ARCHIVE_POST, SUBMIT_NEW_CARD } from '../../constants';

export function submitNewCard(card, cardId, listId) {
  return dispatch =>
    dispatch({ type: SUBMIT_NEW_CARD, payload: { cardName: card, listId, cardId } });
}

export function archiveCard(cardId, listId) {
  return dispatch => dispatch({ type: ARCHIVE_POST, payload: { cardId, listId } });
}
