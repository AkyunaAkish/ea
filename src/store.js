import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'
export const createStoreWithMiddleware = process.env.NODE_ENV === 'development' ? applyMiddleware(promise, logger(), ReduxThunk)(createStore) : applyMiddleware(promise, ReduxThunk)(createStore)
