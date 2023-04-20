import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Select from './Select';


function App() {
  
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ]

  const [value,setValue] = useState <typeof options[0] | undefined> (options[3])
  // console.log(value);

  return (
    <>

    <Select options={options} value={value} onChange={o=>setValue(o)}></Select>
    
    </>
  )
}

export default App
