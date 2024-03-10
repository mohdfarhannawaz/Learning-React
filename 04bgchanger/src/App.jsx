import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor]  = useState("olive")
  
  // here the 'style' tag is used to provide the inline css and pass the curly braces inside
  // the curly braces and because we already put the curly braces therefore we didn't include
  // the variable 'color' inside the curly braces 
  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor : color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "red"}}
          onClick={() => setColor("red")}>Red</button> 
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "green"}}
          onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "pink"}}
          onClick={() => setColor("pink")}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "yellow"}}
          onClick={() => setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "grey"}}
          onClick={() => setColor("grey")}>Grey</button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "blue"}}
          onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "orange"}}
          onClick={() => setColor("orange")}>Orange</button>
        </div>
      </div>
    </div>
  )
}
// the 'onclick' function is unique in behaviour, inside the onlick function we could simply send the {setColor
// = "colorName"} but the due to its unique behaviour we sent it like a callback function returning a function
// called setColor
// eg onClick = {() => setColor("colorName")} 

export default App
