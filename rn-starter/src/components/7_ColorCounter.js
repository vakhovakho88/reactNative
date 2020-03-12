import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// `More ${color}` string inteprolation

const ColorCounter = ({color,clickIncrease,clickDecrease}) =>{
    return (
    <View style={{marginBottom:3}}>
    <Text>{color}</Text>
    <Button title={`More ${color}`} onPress={()=>clickIncrease()}/>
    <Button title={`Less ${color}`} onPress={()=>clickDecrease()}/>
    </View>
    );
}   


const style = StyleSheet.create({});

export default ColorCounter;