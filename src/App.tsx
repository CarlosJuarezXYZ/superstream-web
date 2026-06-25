import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Platforms from './pages/Platforms/Platforms'
import AIServices from './pages/AIServices/AIServices'
import IPTV from './pages/IPTV/IPTV'
import Pricing from './pages/Pricing/Pricing'
import Benefits from './pages/Benefits/Benefits'
import Terms from './pages/Terms/Terms'
import CtaFinal from './pages/CtaFinal/CtaFinal'
import Footer from './components/Footer/Footer'

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
      <Terms />
      <CtaFinal />
      <Footer />
    </>
  )
}

export default App
