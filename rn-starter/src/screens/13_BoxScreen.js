import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
// box object model is just what we have done with css in webprog
// content, padding, border, margin
const BoxScreen = () =>{
    return <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>Box Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor: 'black',   
    },
    textStyle: {
        borderWidth:1,
        borderColor: 'red',
        //marginVertical:20, // some space around it verticall
        margin: 20 

        
    }
});

export default BoxScreen;