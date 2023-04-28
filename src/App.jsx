import { useState } from 'react'
import './App.css'
// import {reactLogo} from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tools from './components/Tools/Tools'
import WhyPayhub from './components/WhyPayhub/WhyPayhub'
import BankWithUs from './components/BankWithUs/BankWithUs'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Tools/>
      <BankWithUs />
      <WhyPayhub />
      <Footer />
    </div>
  )
}

export default App
