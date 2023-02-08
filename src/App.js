import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Vault } from './pages/Vault'
import { CoinFlip } from './pages/CoinFlip'
import { Roulette } from './pages/Roulette'
import { BlackJack } from './pages/BlackJack'
import { Craps } from './pages/Craps'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vault" element={<Vault />} />
        <Route path="coin-flip" element={<CoinFlip />} />
        <Route path="roulette" element={<Roulette />} />
        <Route path="black-jack" element={<BlackJack />} />
        <Route path="craps" element={<Craps />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
