import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductDataStore from './store/ProductStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      product: new ProductDataStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

/*ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore()
  }} >
    <App />
  </Context.Provider>,
  document.getElementById('root')
)*/

