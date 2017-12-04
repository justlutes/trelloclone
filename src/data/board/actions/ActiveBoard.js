import find from 'lodash/find';
import {
  LIST_EDIT_MODE_ENABLED,
  SELECT_ACTIVE_BOARD,
  SELECT_ACTIVE_BOARD_SUCCESS,
  SUBMIT_LIST,
} from '../../constants';
import Store from '../../../Store';

export function enableListEditMode() {
  return dispatch => dispatch({ type: LIST_EDIT_MODE_ENABLED, payload: true });
}
export function selectActiveBoard(id) {
  return (dispatch) => {
    const { boardsCollection } = Store.getState();
    const activeBoard = find(boardsCollection, board => board.id === id);

    dispatch({ type: SELECT_ACTIVE_BOARD, payload: activeBoard });
    dispatch({ type: SELECT_ACTIVE_BOARD_SUCCESS });
  };
}

export function submitList(name) {
  return dispatch => dispatch({ type: SUBMIT_LIST, payload: name });
}
