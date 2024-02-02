import { createContext, useState } from "react";

export const GlobleContext = createContext(null);


function GlobleState ({children}){
    const [theme , setTheme] = useState ('light')
    return <GlobleContext.Provider value ={{ theme , setTheme}}>{children}</GlobleContext.Provider>
}

export default GlobleState;
