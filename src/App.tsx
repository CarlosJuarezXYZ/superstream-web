import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Platforms from './pages/Platforms/Platforms'
import AIServices from './pages/AIServices/AIServices'
import IPTV from './pages/IPTV/IPTV'
import Pricing from './pages/Pricing/Pricing'
import Benefits from './pages/Benefits/Benefits'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Platforms />
      <AIServices />
      <IPTV />
      <Pricing />
      <Benefits />
    </>
  )
}

export default App
