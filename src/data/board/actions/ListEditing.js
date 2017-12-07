import { STOP_EDITING_LIST } from '../../constants';

export function disableListEditMode() {
  return dispatch => dispatch({ type: STOP_EDITING_LIST, payload: false });
}

export function enableListEditMode() {}
