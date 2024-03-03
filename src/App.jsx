import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  
  function increaseCount(){
    setCount(prev => prev + 1);
  }
  // Using useMemo to store the caluclation in a sum variable which can be used to
  // display the sum in the DOM.
  let sum = useMemo(() => {
    let finalSum = 0
    for(let i = 0; i<= total; i++){
      finalSum += i;
    }
    return finalSum;
  }, [total])

  //Capturing the value from the input box
  function doSum(e){
    let val = e.target.value;
    setTotal(val)
  }

  //Rendering the JSX
  return (
    <div>
      <input style = {{
        padding : '10px'
        }} type="text" placeholder='value' onChange = {doSum}/><br /><br />
        <p>{`Sum is ${sum}`}</p>
      <button onClick = {increaseCount}>{`Count ${count}`}</button>
    </div>
  )
}

export default App
