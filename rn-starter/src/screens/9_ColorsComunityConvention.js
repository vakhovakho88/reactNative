// this project is just a same but the names are changed as comunity convention
// it is optional
// I Use component 7 here

import React,{useReducer} from 'react';
// This is an alternative of useState
// It will be very importent
import {View,StyleSheet} from 'react-native';
import ColorCounter from '../components/7_ColorCounter';

const COLOR_INCREMENT = 20;


// name optional
const reducer = (state, action)=>{
    // with comunity convention:
    // state === {red: number, green:number, blue:number}
    // action === {type: 'change_red' | 'change_green' | 'change_blue', payload: +15 | -15}
    

    switch(action.type){
        case 'change_red':
            // this is just new building an object....
            return state.red+action.payload>255 || state.red+action.payload<0 ?
                state :  {...state, red: state.red+action.payload};
            
        case 'change_green':
            return state.green+action.payload>255 || state.green+action.payload<0 ?
            state :  {...state, green: state.green+action.payload};

        case 'change_blue':
              return state.blue+action.payload>255 || state.blue+action.payload<0 ?
                state :  {...state, blue: state.blue+action.payload};

        default:
            return state;
            // Now matter what, always return a value, cause it replaces our state.
    }
};
//{...state, red: red+action.payload} // spreads the state and overwrites red, if there werenot red it would be added



const ColorsComunityConvention = () =>{

        //dispach: call my reducer, we could call it something else too.
        const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0});
        // destructuring the state, not iterablle, thats why as object.
        const {red, green, blue} = state;

    return(
        <View>
            
            <ColorCounter 
            color="Red" 
            clickDecrease= {()=>dispatch({type:'change_red',payload:-1*COLOR_INCREMENT})}
            clickIncrease={()=>dispatch({type:'change_red',payload: COLOR_INCREMENT})}
            />
            <ColorCounter 
            color="Green"
            clickDecrease= {()=>dispatch({type:'change_green',payload:-1*COLOR_INCREMENT})}
            clickIncrease={()=>dispatch({type:'change_green',payload:COLOR_INCREMENT})} 
             />
            <ColorCounter 
            color="Blue" 
            clickDecrease= {()=>dispatch({type:'change_blue',payload:-1*COLOR_INCREMENT})}
            clickIncrease={()=>dispatch({type:'change_blue',payload:COLOR_INCREMENT})}
            />
            <View style={{width:100, height:100,
                 backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    );
}


//dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})
// this is a second argument, the first argument: state is automatically inside.


const styles = StyleSheet.create({});

export default ColorsComunityConvention;
