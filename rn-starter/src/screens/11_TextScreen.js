import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () =>{
    const [name, setName] = useState('')
    return (
        <View>
            <Text>Enter your name</Text>
            <TextInput 
                style = {styles.input} 
                // autoCapitalize="none"
                autoCorrect = {false}
                value = {name}
                onChangeText = {(newValue)=> setName(newValue)}
                />
           <Text>My name is: {name}</Text>
        </View>
    );
}

// textinput has by default 0 styling, thats why we dont see it

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor:'black',
        borderWidth: 1
    }
})

// on ios it is capitalized automatically and has autocorrect

export default TextScreen;