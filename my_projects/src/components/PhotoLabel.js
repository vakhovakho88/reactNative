import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const PhotoLabel = ({text})=>{

    return (
        <>
        <View style={styles.container}>
         <Text style={styles.text}>{text}</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        bottom:5,
        right:5,
        backgroundColor: '#000000',
        width: 300,
        padding:2,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    text: {
        fontSize:15,
        color:'white',
        alignSelf: "flex-end"
    }
});

export default PhotoLabel;