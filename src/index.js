import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './components/app/App';
// import store from './store';

const component = <h1>Hello World</h1>;

ReactDOM.render(
//   <Provider store={store}>
    component,
//  </Provider>,
  document.getElementById('root')
);