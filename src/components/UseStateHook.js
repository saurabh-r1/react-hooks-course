// UseStateHook.js

import { useState } from 'react';

const initialState = {
    name:'',
    city:'',
  }
  
  function UseStateHook() {

    const [count, setCount]= useState(0);
    const [formData, setFormData] = useState(initialState);
    
    
    const increase = ()=> {
      setCount (count + 1) ;
    }
  
    const decrease = ()=> {
      setCount (count - 1);
    }
  
    const nameHandler = (event) =>{
      const naming = {
        ...formData,
        name:event.target.value,
      }
      setFormData(naming);
    }
    const cityHandler = (event) =>{
      const naming = {
        ...formData,
        city:event.target.value,
      }
      setFormData(naming);
    }


  return (
    <div>
      <h1>useStateHook</h1>

      <p>Count is {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <hr></hr>

      <label htmlFor=""> Name: </label>
      <input id="" type="text" onChange={nameHandler} />

      <label htmlFor="city"> City: </label>
      <select
        name="city"
        id="city"
        value={formData.city}
        onChange={cityHandler}
      >
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Patna">Patna</option>
      </select>
      <h3>Name is {formData.name}</h3>
      <h3>City is {formData.city}</h3>
    </div>
  );
}

export default UseStateHook;
