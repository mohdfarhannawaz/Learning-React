// program to count the value of counter
import { useState } from 'react'; // hook to change the state 
import './App.css'

function App() {

  // Note : here when using the counter variable the counter value was being changed but 
  // not updated in the UI, there we used the HOOK useState in line 2
  // let counter = 12;

  // using hook useState
  // typeOfVariable array containing the variable and its method  = useState(value)
  // eg let/const [variablename , variableMethod] = useState(value)

  let [counter, setCounter] = useState(15);  // this is state

  const addition = () => {
    // calling the setCounter method to update the value of counter
    // ways of updation 1 
    counter++; // updating the varible first and then passing it into the setCounter method
    setCounter((counter>20)? alert ("cant increase more than 20") : counter);
    console.log("increase button clicked " + counter + " " + Math.random());
  }

  const subtraction = () => {

    // way of updation 2
    setCounter((counter<0) ? alert("can't be lower than 20") : --counter); // updating the variable inside the setCounter method only

    // in the above example if the setcounter is sent multiple times such as
    /**
     * setCounter(counter + 1);
     * setCounter(counter + 1);
     * setCounter(counter + 1);
     * but the result would still give the counter by increment of 1 not by the increment of all
     * those combined because in react it is sent in combined packs due to which is same method 
     * is called again and again then it considers its one.
     * if we want to really increase the counter in each step then we 
     * setCounter ((anyName) => {body})
     * eg setCounter ((previousCounter) => counter + 1) // we could remove the paranthesis and curly brackets too
     * eg setCounter (prevCounter => counter + 1)
     */

    console.log("decrease button clicked " + counter + " " + Math.random());
  }
 
  return (
    <>
      <h1>Learning React | mfn</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addition}>increase {counter}</button>
      <br />
      <br />
      <button onClick={subtraction}>decrease {counter}</button>
      <p>counter : {counter}</p>
    </>
  )
}

export default App
