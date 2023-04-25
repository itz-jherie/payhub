import { useState } from 'react'
import './App.css'
// import {reactLogo} from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tools from './components/Tools/Tools'
import WhyPayhub from './components/WhyPayhub/WhyPayhub'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Tools/>
      <WhyPayhub />
    </div>
  )
}

export default App
