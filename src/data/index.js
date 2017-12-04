import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import CreateReducer from './board/reducers/Create';
import ActiveBoardDataReducer from './board/reducers/ActiveBoardData';
import BoardsCollectionReducer from './board/reducers/BoardCollection';
import ActiveBoardReducer from './board/reducers/ActiveBoard';

export default combineReducers({
  form: FormReducer,
  newBoard: CreateReducer,
  boardsCollection: BoardsCollectionReducer,
  activeBoard: ActiveBoardReducer,
  activeBoardData: ActiveBoardDataReducer,
});
