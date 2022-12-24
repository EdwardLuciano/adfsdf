import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import MobileApp from './MobileApp';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import Stt from "./stt";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Lines } from 'react-preloaders';


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: '50px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {window.screen.width < 640 && window.location.pathname != '/tour2022' ? (
        <>
         <AlertProvider template={AlertTemplate} {...options}>
        <Stt />

        <MobileApp />
        </AlertProvider>
        </>

      ) : (
             <>
             <AlertProvider template={AlertTemplate} {...options}>
              <Stt />

        <App />
        </AlertProvider>
        </>
      )}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
