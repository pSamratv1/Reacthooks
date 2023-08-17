import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [width, setWidth] = useState(window.screen.width);
    const addWidth = () => {
        setWidth(window.innerWidth)
    };
    useEffect(() => {
        window.addEventListener('resize',addWidth);
        return () => {
            window.removeEventListener("resize", addWidth);
        }
    });
  return (
    <div className='useEffect2'>
      <p className="useEffect2_para">This is the actual size of the window:</p>
      <h1 className="size_value">{width}</h1>
    </div>
  )
}

export default UseEffect2
