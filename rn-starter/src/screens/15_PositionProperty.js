// as default every element has position: relative
// if we set it to absolute the sibling will ignore it
// and it can be positioned on the specific position
// if it is absolute we cannt use alignItem: stretch.

// properties, but not for absolute....: top, buttom, right, left
// they are shifted after everything is located on the screen,
// no other siblings are going to affected.
// this positions are not from the begin of coordinates, they are from the actual position of element


// if it is position absolute then top,bottom,right and left are from start of coordinates


import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
const PositionProperty = () =>{
    return <View style = {styles.viewStyle}>
        <Text style = {styles.textOneStyle}>child #1</Text>
        <Text style = {styles.textTwoStyle}>child #2</Text>
        <Text style = {styles.textThreeStyle}>child #3</Text>
        <Text style = {styles.textFourStyle}>child #4</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor: 'black', 
    },
    textOneStyle: {
        borderWidth:3,
        borderColor: 'red',
        padding:2,
        top:30 // not absolute

        
    },
    textTwoStyle: {
        borderWidth:3,
        borderColor: 'red',
        padding:2,
        // position:"absolute",
        // right:0,
        // left:0,
        // right:0,
        // bottom:0,
        //width:100,
        ...StyleSheet.absoluteFillObject, // fill height, width, absolute, 0,0
    },
    textThreeStyle: {
        borderWidth:3,
        borderColor: 'red',
        padding:2,
        left:10,
        top:20

    },
    textFourStyle: {
       

    }
});

export default PositionProperty;