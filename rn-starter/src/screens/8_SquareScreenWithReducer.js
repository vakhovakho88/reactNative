// I Use component 7 here
import React,{useReducer} from 'react';
// This is an alternative of useState
// It will be very importent
import {View,StyleSheet} from 'react-native';
import ColorCounter from '../components/7_ColorCounter';

const COLOR_INCREMENT = 20;


// name optional
const reducer = (state, action)=>{
    // without comunity convention:
    // state === {red: number, green:number, blue:number}
    // action === {colorTochange: 'red' | 'green' | 'blue', amount: +15 | -15}
    

    switch(action.colorToChange){
        case 'red':
            // this is just new building an object....
            return state.red+action.amount>255 || state.red+action.amount<0 ?
                state :  {...state, red: state.red+action.amount};
            
        case 'green':
            return state.green+action.amount>255 || state.green+action.amount<0 ?
            state :  {...state, green: state.green+action.amount};

        case 'blue':
              return state.blue+action.amount>255 || state.blue+action.amount<0 ?
                state :  {...state, blue: state.blue+action.amount};

        default:
            return state;
            // Now matter what, always return a value, cause it replaces our state.
    }
};
//{...state, red: red+action.amount} // spreads the state and overwrites red, if there werenot red it would be added



const SquareScreenWithReducer = () =>{

        //dispach: call my reducer, we could call it something else too.
        const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0});
        // destructuring the state, not iterablle, thats why as object.
        const {red, green, blue} = state;

    return(
        <View>
            
            <ColorCounter 
            color="Red" 
            clickDecrease= {()=>dispatch({colorToChange:'red',amount:-1*COLOR_INCREMENT})}
            clickIncrease={()=>dispatch({colorToChange:'red',amount: COLOR_INCREMENT})}
            />
            <ColorCounter 
            color="Green"
            clickDecrease= {()=>dispatch({colorToChange:'green',amount:-1*COLOR_INCREMENT})}
            clickIncrease={()=>dispatch({colorToChange:'green',amount:COLOR_INCREMENT})} 
             />
            <ColorCounter 
            color="Blue" 
            clickDecrease= {()=>dispatch({colorToChange:'blue',amount:-1*COLOR_INCREMENT})}
            clickIncrease={()=>dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})}
            />
            <View style={{width:100, height:100,
                 backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    );
}


//dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})
// this is a second argument, the first argument: state is automatically inside.


const styles = StyleSheet.create({});

export default SquareScreenWithReducer;
