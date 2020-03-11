import React, {useState} from 'react'
import {View,Button, Text, StyleSheet} from 'react-native'

const CounterScreen = () =>{
    //let count = 0; // if we should do it, it would be updated but not UI, thats why never use it.

    //Hooks and States update UI automatically.

    //array destructuring
    const [count, setCount] = useState(0); // [0, changeCountMethod] 

    return(
        <View>
            <Button
            title="Increase"
            onPress={()=>{
                //count++;
                //console.log(count);
                setCount(count+1);
                
            }}
            />
            <Button
            title="Decrease"
            onPress={()=>{
                //count--; never call it directly, it changes value if not static but not UI,
                //console.log(count);
                setCount(count-1);
            }}
            />
            <Text >Current count {count}</Text>
        </View>
    );
}



// to button we cannot assign styles so good as to another tags
const styles = StyleSheet.create({
    buttonStyle: {
        fontSize: 10
    }
});

export default CounterScreen;