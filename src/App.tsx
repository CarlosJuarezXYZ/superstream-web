import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Platforms from './pages/Platforms/Platforms'
import AIServices from './pages/AIServices/AIServices'
import IPTV from './pages/IPTV/IPTV'
import Pricing from './pages/Pricing/Pricing'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Platforms />
      <AIServices />
      <IPTV />
      <Pricing />
    </>
  )
}

export default App
