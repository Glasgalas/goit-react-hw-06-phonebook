import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// import { createStore } from 'redux';
// import rootReducer from './redux/rootReducer';
import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
