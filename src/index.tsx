import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

import { ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={1}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  </>
);
