import React from 'react'
import { useState } from 'react';

function Count() {
    const [count, setCount] = useState(15);
    let addValue = () => {
        setCount((prevCount) => prevCount + 1);
    }
    let removeValue = () => {
        setCount(count - 1);
    }
  return (
    <div>
        <button type='button' onClick={addValue}>Count (+)= {count}</button>
        <br />
        <br />
        <button type='button' onClick={removeValue}>Count (-)= {count}</button>
    </div>
  )
}

export default Count
