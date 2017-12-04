import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import RootReducer from './data';
import { loadState, saveState } from './utils/SyncBoardCollection';

const middlewaresDev = [reduxImmutableStateInvariant(), thunk];
const persistedState = loadState();

const StoreDev = () =>
  createStore(RootReducer, persistedState, composeWithDevTools(applyMiddleware(...middlewaresDev)));
const StoreProd = () =>
  createStore(RootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

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
