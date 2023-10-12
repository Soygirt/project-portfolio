import { useState } from 'react'
import Page1 from './assets/components/page1/page1';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='page1'>
        <Page1 />
        </div>
    </>
  )
}

export default App
