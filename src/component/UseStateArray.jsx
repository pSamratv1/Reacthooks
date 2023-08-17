import React, { useState } from 'react';
import './style.css';

const UseStateArray = () => {
    const data = [
        {
            id: 0,
            name: 'Samrat Pahari',
            age: 23,
        },
        {
            id: 1,
            name: "Sarad Pahari",
            age: 20,
        }
    ]
    const [value, setValue] = useState(data);
    const clearValue = () => {
        setValue([])
    }
    // method to delete the specific element form the array using  button
    
    const removehandler = (id) => {
        const newArray = value.filter((element) =>{
            return element.id !== id;
            })
        setValue(newArray)
    }
  return (
    <div className='arrayState'>
        <div className="items">
        {
            value.map((item) => {
                return (
                    <div className="item"  key={item.id}>
                        Name= {item.name} & Age = {item.age}
                        <button className="remove" onClick={() => removehandler(item.id)}>Remove</button>
                
                    </div>
                );
                    
            })
        }
        </div>
      <button className="clear" onClick={() => clearValue()}>Clear</button>
    </div>
  )
}

export default UseStateArray
