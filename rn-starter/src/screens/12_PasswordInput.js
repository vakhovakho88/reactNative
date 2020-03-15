import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


// it show message when password is shorter than 5 symbols.


const PasswordInput = () =>{
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter password</Text>
            <TextInput 
                style = {styles.input} 
                // autoCapitalize="none"
                autoCorrect = {false}
                value = {password}
                onChangeText = {(newValue)=> setPassword(newValue)}
                />
           {password.length<5? 
           <Text>The password must be longer than 5 characters.</Text>
            :  null}
           
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

export default PasswordInput;