import React, { useContext } from "react";
import { GlobleContext } from "../../context/IndexContext";

function Register() {

  const {theme} = useContext(GlobleContext);

  return (
    <div>
      <h3>Register</h3>
      <button style={theme==='light'? {backgroundColor:'#f6f', color:'black'}:{backgroundColor:'black', color:'#fff'}}>
        Register
      </button>
    </div>
  );
}

export default Register;
