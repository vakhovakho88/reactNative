import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {FontAwesome} from '@expo/vector-icons';


const Arrow = ({direction})=>{

    let content = null;

    if (direction==='right')
    {
        content=(
            <TouchableOpacity style={styles.containerRigth}>
            <FontAwesome 
            name="arrow-circle-right"
            style={styles.arrow}
            />
        </TouchableOpacity>
        );
    }
    else if (direction==='left')
    {
        content=(
            <TouchableOpacity style={styles.containerLeft}>
            <FontAwesome 
            name="arrow-circle-left"
            style={styles.arrow}
            />
        </TouchableOpacity>
        );
    }

    return (
        <>
       {content}
       </>
    );
}

const styles = StyleSheet.create({
   containerRigth: {
    position:"absolute",
    right:5,
    top:80,
   },
   containerLeft: {
    position:"absolute",
    left:5,
    top:80,
   },
   arrow: {
    fontSize:45,
    color:'#FFFFFF',
    opacity:.5
   },

});

export default Arrow;