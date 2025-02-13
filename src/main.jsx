import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer  from "./reducers/index.js";
import App from './App.jsx';
import './index.css';


const store = configureStore({
  reducer: rootReducer ,
  devTools: true,
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
