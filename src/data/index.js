import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import CreateReducer from './board/Create';
import ActiveBoardDataReducer from './board/ActiveBoardData';
import BoardsCollectionReducer from './board/BoardCollection';
import ActiveBoardReducer from './board/ActiveBoard';

export default combineReducers({
  form: FormReducer,
  newBoard: CreateReducer,
  boardsCollection: BoardsCollectionReducer,
  activeBoard: ActiveBoardReducer,
  activeBoardData: ActiveBoardDataReducer,
});
