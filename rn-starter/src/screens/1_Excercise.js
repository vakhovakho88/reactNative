import React from 'react';
import {StyleSheet,Text,View} from 'react-native';


const MyFirstApp = ()=>{
    const name = "Vakho";
    return(
        <View style={{paddingLeft:10}}>
            <Text style={styles.text1Style}>Getting stassrted with react native!</Text>
            <Text style={styles.text2Style}> My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text1Style : {
        fontSize: 30
    },
    text2Style : {
        fontSize: 20
    }
})



export default MyFirstApp;