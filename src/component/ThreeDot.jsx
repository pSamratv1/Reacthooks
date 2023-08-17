import React from 'react';
import "./style.css";

const ThreeDot = () => {
    const data = { 
        name: "Samrat Pahari",
        age: 23,
        degree: "Bachelor"
    }
    const [myObject, setMyObject] = React.useState(data);
    const handleUpdate = () => {
        ( myObject.name === "Samrat Pahari") ? setMyObject({...myObject, name: "Sarad Pahari", age: 20}) :
        setMyObject({...myObject, name: "Samrat Pahari", age: 23})
        
    }
    return (
    <>
    <p className='container_para'>Use of ThreeDot operator (...) for changing value</p>
    <div className='container'>
      <h1 className="container_item">
            Name = {myObject.name} & Age: {myObject.age} & Degree: {myObject.degree}.
      </h1>
      <button className="container_clear" onClick={handleUpdate} >Update</button>
    </div>
    </>
  )
}

export default ThreeDot
