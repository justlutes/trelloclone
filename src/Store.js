import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import RootReducer from './data';
import { loadState, saveState } from './utils/SyncBoardCollection';

const middleware = applyMiddleware(thunk);
const persistedState = loadState();

const Store = createStore(RootReducer, persistedState, composeWithDevTools(middleware));

Store.subscribe(throttle(() => {
  saveState({
    boardsCollection: Store.getState().boardsCollection,
    activeBoard: Store.getState().activeBoard,
    newBoard: Store.getState().newBoard,
    activeBoardData: Store.getState().activeBoardData,
  });
}, 1000));

export default Store;
