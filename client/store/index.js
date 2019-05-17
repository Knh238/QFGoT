import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import booksReducer from './booksReducer';
// const logger = createLogger({});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(booksReducer, middleware);

export default store;

// export * from './booksReducer';
