import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import List from './component/List';
import Canvas from './canvas/Canvas';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';


const App = () => (
  <Provider store={store}>
    <div className="App">
      <ToastContainer position='top-center' />
      <h1>Frontend Test</h1>
      <div className="entity-list">
        <List />
      </div>
      <Canvas />
    </div>
  </Provider>
);

export default App;
