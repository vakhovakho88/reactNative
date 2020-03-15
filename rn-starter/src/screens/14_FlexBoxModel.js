import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
// box object model is just what we have done with css in webprog
// content, padding, border, margin
const FlexBoxModel = () =>{
    return <View style = {styles.viewStyle}>
        <Text style = {styles.textOneStyle}>child #1</Text>
        <Text style = {styles.textTwoStyle}>child #2</Text>
        <Text style = {styles.textThreeStyle}>child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor: 'black', 
      
        //alignItems: "flex-start",
        //alignItems: "stretch", // default  
        //alignItems: "center",
        //alignItems: 'flex-end',
        //flexDirection: "column", // horizontall list, default value
        //flexDirection:"row", //verticall alligment,
        //alignItems:"center", // works for both aligment
        height: 200, // if allign items is strech the itemsheight will be 200 too
                    // in other case not  
        //justifyContent: "center", // similar to allign items but it works in the oposite direction
                                // if alligment is verticall it will make it vertical center
        //flexDirection: "row",
        //justifyContent: "flex-start", // automatically margins the items from each other

        alignItems: "center" // it will make alligment center and this could be overwriten due the child element.

    },
    textOneStyle: {
        borderWidth:3,
        borderColor: 'red',
        padding:2
        //flex:1,
        //alignSelf: "flex-end"
        
    },
    textTwoStyle: {
        borderWidth:3,
        borderColor: 'red',
        padding:2,
        //flex: 1,
        alignSelf: "flex-start"
    },
    textThreeStyle: {
        borderWidth:3,
        borderColor: 'red',
        padding:2,
        //flex: 1,
        alignSelf: "stretch"
    }
});


// if only one element has got flex:1 it fills the rest place in parent
// if there are three elements and only 2 elements have flex:1 they fill rest space after elemet1
// of all of them are flex:1 they fill all space but they have same length
// it could be length relation too: 3:2:1 means one of them ist 3x another 2x and the third 1x
// it would work with flex direction too.


// allign self- alligment of only one element: center, flex-start, flex-end, stretch


export default FlexBoxModel;