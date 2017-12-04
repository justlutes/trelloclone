import {
  SELECT_ACTIVE_BOARD,
  SELECT_ACTIVE_BOARD_SUCCESS,
  LIST_EDIT_MODE_ENABLED,
  STOP_EDITING_LIST,
} from '../constants';

const initialState = {
  title: null,
  id: null,
  isFetching: false,
  isEditing: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_ACTIVE_BOARD:
      return {
        ...state,
        title: action.payload.title,
        id: action.payload.title,
        isFetching: true,
      };
    case SELECT_ACTIVE_BOARD_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case LIST_EDIT_MODE_ENABLED:
      return {
        ...state,
        isEditing: action.payload,
      };
    case STOP_EDITING_LIST:
      return {
        ...state,
        isEditing: action.payload,
      };
    default:
      return { ...state };
  }
}
