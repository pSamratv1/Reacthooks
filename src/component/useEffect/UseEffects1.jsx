import React, { useEffect, useState } from 'react'

const UseEffects1 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        count >= 1 ? document.title = `Chats(${count})`: document.title = 'React App'
    })

  return (
    <>
    <div className="counter">{count}</div>
        <div className="para_text">
             <p className="para_increment">Increment</p>
             <p className='para_decrement' >Decrement</p>
      </div>

    

    <button className="increment_btn" onClick={() => setCount(count+1)}>Click</button>
    <button className="decrement_btn" onClick={() => setCount(count-1)}>Click</button>



    </>
  )
}

export default UseEffects1
