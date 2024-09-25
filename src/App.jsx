import { useState } from 'react'
import './App.css'

export default function App() {
return (
    <Counter />
 )
}

function Counter(){
 const[step,setStep]=useState(0)
 const[count,setCount]=useState(0)

    const baseDate = new Date("Apr 30, 2000");
    const modifiedDate = new Date(baseDate);
    modifiedDate.setDate(baseDate.getDate() + count);

 const stepHandler=(e)=>{
  setStep(Number(e.target.value))
 }
 const subHandler=()=>{
setCount(c=>c-step)
 }
const inputHandler=(e)=>{
     setCount(e.target.value)
}
const sumHandler=()=>{
     setCount(c=>(c+step))
}

 return (
     <div className="container">
      <input type="range" min={0} max={10} value={step} onChange={stepHandler}/>
      <label htmlFor="">{step}</label>
      <button onClick={subHandler}>-</button>
      <input type="text" value={count} onChange={inputHandler}/>
      <button onClick={sumHandler}>+</button>
         <span>{count>0 ? `${count} day from` : count <0 ? `${count} day ago is` :`today is `}</span>
         <span>{modifiedDate.toLocaleDateString()}</span>
     </div>
 )
}
