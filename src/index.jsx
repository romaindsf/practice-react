import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Stylesheet/stylesheet.css'
import App from './pages/App/App';
import ChampionPage from './pages/Champions_page/ChampionPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:title' element={<ChampionPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
