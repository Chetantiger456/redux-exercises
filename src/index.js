import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore';
import Messages from './components/Messages';

const store = configureStore()
console.log('redux initial state', store.getState())

store.subscribe( () => {
  console.log('redux updated state',store.getState())
})

const jsx = (
<Provider store = {store}>
  <App />
</Provider>)

ReactDOM.render(jsx ,
  document.getElementById('root')
);
