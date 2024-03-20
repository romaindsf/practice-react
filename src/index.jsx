import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Stylesheet/stylesheet.css'
import App from './pages/App/index.jsx'
import ChampionPage from './pages/Champions_page/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/champion/:championId" element={<ChampionPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
