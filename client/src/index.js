import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import myReducer from './redux-saga/reducer';
import mysaga from './redux-saga/saga';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({myReducer})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mysaga)


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

