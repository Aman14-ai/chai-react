import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1);


  //let counter = 5;

  const addValue = () => {
    //counter++;
    if(counter < 20){setCounter(++counter);}
    console.log(counter);
  }
  const removeValue = () => {
    // counter--;
    if(counter > 0){setCounter(--counter);}
    console.log(counter)
  }

  return (
    <>
      <h1>Radha</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
