import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import MobileApp from './MobileApp';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import Stt from "./stt";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {window.screen.width < 640 && window.location.pathname != '/tour2022' ? (
        <>
        <Stt />

        <MobileApp />
        </>

      ) : (
             <>
              <Stt />

        <App />
        </>
      )}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
