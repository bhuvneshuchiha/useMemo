import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  function increaseCount(){
    setCount(prev => prev + 1);
  }

  function doSum(e){
    let val = e.target.value;
    let sum = 0;
    for (let i = 0; i <= val; i++){
      sum += i
    }
    setTotal(sum)
  }
  return (
    <div>
      <input style = {{
        padding : '10px'
        }} type="text" placeholder='value' onChange = {doSum}/><br /><br />
        <p>{`Sum is ${total}`}</p>
      <button onClick = {increaseCount}>{`Count ${count}`}</button>
    </div>
  )
}

export default App
