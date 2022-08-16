import { Provider } from 'react-redux';
import { store } from './store';
import { Router } from "./config/router/Router";

function WebtronicLabsApp() {
  return (
    <div className="bg-gray-800">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default WebtronicLabsApp;
