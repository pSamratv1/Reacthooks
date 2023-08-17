import React, { useState } from 'react'

const ShortCktEval = () => {

    const [demo, setDemo ] = useState("");
    const handleUpdate = () =>{
            setDemo("Samrat Pahari")
    }

  return (
    <div className='srtckt'>
        <p className='srtckt-para'>Short Circuit Evaluation using "&&" and "||"</p>
        <div>
            <h1 className="srtckt-text">{demo && "Sarad Pahari"}</h1>
            <h1 className="srtckt-text1">{demo || "Sarad Pahari"}</h1>
        </div>
       
        <button className="srtckt-btn" onClick={handleUpdate}>Add Value</button>
      
    </div>
  )
}

export default ShortCktEval
