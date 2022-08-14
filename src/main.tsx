import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import WebtronicLabsApp from './WebtronicLabsApp';
import { store } from './store';
import './views/assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WebtronicLabsApp />
    </Provider>
  </React.StrictMode>
)
