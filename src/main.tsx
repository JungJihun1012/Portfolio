import React from 'react'
import { createRoot } from 'react-dom/client'
import rootReducer from './_reducer'
import { Middleware, applyMiddleware, compose, createStore } from 'redux'
import {thunk,ThunkMiddleware} from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux'
import { ReactProvider } from './app/ReactProvider'

type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSTION_COMPOSE__?: typeof compose;
  }
}

const middlewares: Array<Middleware<{}, RootState> | ThunkMiddleware<RootState>> = [
  thunk,
  promiseMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactProvider/>
    </Provider>
  </React.StrictMode>
)