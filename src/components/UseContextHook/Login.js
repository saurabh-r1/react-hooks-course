import React, { useContext } from "react";
import { GlobleContext } from "../../context/IndexContext";

function Login (){

  const {theme} = useContext (GlobleContext);

  return (
    <div>
      <h3>Login</h3>
      <button style={theme==='dark'? {backgroundColor: "#666", color:'#fff'}:{backgroundColor:'red',color:'black'} }>
        Login
      </button>
    </div>
  );
};

export default Login;
