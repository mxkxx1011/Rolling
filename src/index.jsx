import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'assets/styles/fonts.scss';
import 'assets/styles/reset.scss';
import Modal from 'components/modal/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Modal />
  </React.StrictMode>,
);
