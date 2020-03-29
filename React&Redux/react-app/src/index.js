import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import commentReducer from './commentReducer';
import {Provider} from 'react-redux';

const store = createStore(commentReducer); //สร้างคลังข้อมูล


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider> , document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

