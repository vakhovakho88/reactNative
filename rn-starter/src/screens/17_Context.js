import React, {useReducer, Children} from 'react';


const NameContext= React.createContext("Default Name");

export const NameProvider = ({children})=>{
    return <NameContext.Provider value={{name:'vakho'}}>
        {children}
    </NameContext.Provider>
}

export default NameContext;