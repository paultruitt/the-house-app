import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Vault } from './pages/Vault'
import { CoinFlip } from './pages/CoinFlip'
import { Roulette } from './pages/Roulette'
import { BlackJack } from './pages/BlackJack'
import { Craps } from './pages/Craps'
import NavBar from './components/NavBar'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './themes/theme'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vault" element={<Vault />} />
          <Route path="coin-flip" element={<CoinFlip />} />
          <Route path="roulette" element={<Roulette />} />
          <Route path="black-jack" element={<BlackJack />} />
          <Route path="craps" element={<Craps />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
