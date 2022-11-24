import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import BookApp from './components/BookApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookApp />
  </React.StrictMode>
);

