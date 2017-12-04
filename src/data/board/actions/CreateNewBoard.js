import {
  CREATE_NEW_BOARD,
  CANCEL_NEW_BOARD,
  SUBMIT_NEW_BOARD,
  STORE_NEW_BOARD_TO_COLLECTION,
} from '../../constants';
import Store from '../../../Store';

export function createNewBoard() {
  return {
    type: CREATE_NEW_BOARD,
    payload: true,
  };
}

export function cancelCreatingBoard() {
  return {
    type: CANCEL_NEW_BOARD,
    payload: false,
  };
}

export function submitNewBoard(title) {
  return (dispatch) => {
    dispatch({ type: SUBMIT_NEW_BOARD, payload: title });

    const newBoard = {
      id: Store.getState().newBoard.id,
      title: Store.getState().newBoard.title,
    };

    dispatch({ type: STORE_NEW_BOARD_TO_COLLECTION, payload: newBoard });
  };
}
