// this is an identical as CounterScreen, but we are goint to use reducer 
// it is not the best experience with reducers, here are hooks better
// but for training it is ok
import React, {useReducer} from 'react'
import {View,Button, Text, StyleSheet} from 'react-native'



const reducer = (state, action)=>{

    switch (action.type){
        case 'increase_number':
            return {...state, count:state.count+action.payload};
        case 'decrease_number':
            return {...state, count:state.count-action.payload};
        default:
            return state;
    }

}


const CounterScreenWithReducer = () =>{
   

    const [state, dispatch] = useReducer(reducer, {count: 0})
    const {count} = state;
    return(
        <View>
            <Button
            title="Increase"
            onPress={()=> dispatch({type:'increase_number',payload:1})}
            />
            <Button
            title="Decrease"
            onPress={()=> dispatch({type:'decrease_number',payload:1})}
            />
            <Text >Current count {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreenWithReducer;