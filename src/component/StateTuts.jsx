// 1. Always write it inside the component or function.
// 2. Component name must be PascalCase (first letter should be uppercase).
// 3. We can directly import or we can directly write it using React.hookName.
// 4. Don't call Hooks inside loops, conditions, or nested functions.

import React from 'react';
// import { useState } from 'react';
import './style.css';

const StateTuts = () => {

    const [ name, setName ] = React.useState('Samrat Pahari')

    const handleChange = () => {
      name === "Samrat Pahari" ? setName("Sarad Pahari") : setName("Samrat Pahari");
    };

  return (
    <div className='stateTuts'>
        <h1>{name}</h1>
        <button className='btn' onClick={() => handleChange()}>Click me</button>
    </div>
  )
}

export default StateTuts
