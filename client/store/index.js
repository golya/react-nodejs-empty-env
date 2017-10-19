import { combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'

function Reducers(container) {

  const History = container.get('History');

  const rootReducer = combineReducers({
    routing: routerReducer,
  });

  const middleware = [
    thunk,
    routerMiddleware(History.getHistory()),
    //logger
  ]
  return createStore(rootReducer, applyMiddleware(...middleware));

}

Reducers.type = 'factory';
module.exports = Reducers;
