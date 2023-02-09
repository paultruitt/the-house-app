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
import settings from './data/settings.json'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          { settings.releaseStage >= 0 && <Route path="vault" element={<Vault />} />}
          { settings.releaseStage >= 1 && <Route path="coin-flip" element={<CoinFlip />} />}
          { settings.releaseStage >= 2 && <Route path="roulette" element={<Roulette />} />}
          { settings.releaseStage >= 3 && <Route path="black-jack" element={<BlackJack />} />}
          { settings.releaseStage >= 4 && <Route path="craps" element={<Craps />} />}
          <Route path="/*" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
