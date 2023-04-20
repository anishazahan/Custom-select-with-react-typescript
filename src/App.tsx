import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'

function App() {
  
  const num= 5;

  return (
    <div className="App">
      <Heading title ={"5"}></Heading>
    </div>
  )
}

export default App
