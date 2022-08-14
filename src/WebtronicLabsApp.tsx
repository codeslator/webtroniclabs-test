import { Provider } from 'react-redux';
import { store } from './store';
import { Router } from "./config/router/Router";

function WebtronicLabsApp() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default WebtronicLabsApp;
