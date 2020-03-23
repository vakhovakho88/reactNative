import React, {useReducer, useContext}from 'react';

export default (reducer, actions, initialState) =>{
    const Context = React.createContext();

    const Provider = ({children})=>{
        const [state,dispatch] = useReducer(reducer,initialState);

        const boundActions ={}; //an empty object for all actions
        for (let key in actions){
            boundActions[key]=actions[key](dispatch);
        }

        return (<Context.Provider value={{state, ...boundActions}}>
            {children}
        </Context.Provider>);
    }

    return {Context, Provider}
}










// this file is a plain file form using reducer effectively and reusable
// tha name is lower case cause this is a convention use plain files with lower case
