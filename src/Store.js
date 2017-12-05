import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import RootReducer from './data';
import { loadState, saveState } from './utils/SyncBoardCollection';

const middlewaresDev = [thunk];
const persistedState = loadState();

const StoreDev = () =>
  createStore(RootReducer, persistedState, composeWithDevTools(applyMiddleware(...middlewaresDev)));
const StoreProd = () => createStore(RootReducer, persistedState, compose(applyMiddleware(thunk)));

const Store = process.env.NODE_ENV === 'production' ? StoreProd() : StoreDev();

Store.subscribe(throttle(() => {
  saveState({
    boardsCollection: Store.getState().boardsCollection,
    activeBoard: Store.getState().activeBoard,
    newBoard: Store.getState().newBoard,
    activeBoardData: Store.getState().activeBoardData,
  });
}, 1000));

export default Store;
