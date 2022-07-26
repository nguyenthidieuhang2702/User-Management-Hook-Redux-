import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import * as reducers from './reducers';
// import { phoneReducer, countReducer, thuDoReducer } from "./reducers";

import reduxThunk from 'redux-thunk';

// Object literals
const rootReducer = combineReducers({
  ...reducers,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
