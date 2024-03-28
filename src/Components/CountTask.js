import { useState } from 'react';
import React from 'react'

function CountTask() {
 // let count = 0;
 const [count, setCount] = useState(0);

 function handleAddClick(){
   // count =+1;
   // console.log(count);
   setCount(count + 1)   
 }
 function handleSubClick(){
   setCount(count - 1)
 }
 function handleReset(){
   setCount(0)
 }

  return (
    <div className="App">
      
    <div className='box'>
      <p>
        {count}
      </p>
      <button onClick={handleAddClick} className='add'>ADD</button>
      <button onClick={handleSubClick} className='sub'>SUB</button>
      <button onClick={handleReset} className='sub'>Reset</button>
      
    </div>

  </div>
);
}

export default CountTask
