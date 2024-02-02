import React, { useContext } from "react";
import { GlobleContext } from "../../context/IndexContext";

const UseContextHook = () => {

    const {theme, setTheme} = useContext (GlobleContext);
    console.log (theme);

  return (
    <div>
      <h1>UseContext Hook</h1>
      <button onClick={()=>setTheme(theme==='light'? 'dark': 'light')} style={{ background: "yellow", padding: 10, border: 0  }}>
        Change Theme
      </button>
    </div>
  );
};


export default UseContextHook;