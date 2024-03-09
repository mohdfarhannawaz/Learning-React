import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {name : "user", age: 21}
  let myArr = [1,3,5]

  return (
    <>
     <h1 className='bg-green-400 rounded-xl text-black p-4 mb-2'>Tailwind test</h1>
     <Card/> 
     <Card username = "card2" btnText="click me"/>
     <Card username = "card3" btnText="click me again" />
    </>
  )
}

export default App
