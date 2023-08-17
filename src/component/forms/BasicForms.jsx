import React, { useState } from 'react'

const BasicForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password){
      const newEntry = {email: email , password: password}
      setAllEntry([...allEntry,newEntry]);
      setEmail('');
      setPassword('')
    }
    else{
      alert("Please fill the form")
    }
  }


  return (
    <>
    <p className="basicform_para">Login Form Using Basic Validation</p>
      <form action="" onSubmit={handleSubmit}>
        <div className="basicform-email">
          <label htmlFor="email" className="email-label">Email</label>
          <input className="email-input" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="basicform-pass">
          <label htmlFor="password" className="pass-label">Password</label>
          <input className='pass-input' type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="basicform-submit" type="submit"  >Submit</button>
      </form>
      <div>
      {allEntry.map((value) => {
        const {email ,password} = value
        return(
        <div className='table'>
        <div className="emailbox">{email}</div>
        <div className="break"></div>
        <div className="passwordbox">{password}</div>
      </div>
        )
      })}
      </div>
      
    </>
  )
}

export default BasicForms

