import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Photo = ({path})=>{
    return (
    
       <Image style={styles.image} 
            source={path}/>
      
    );
}

const styles = StyleSheet.create({
   image: {
    flex:1,
    width: null,
    height: null
   }
});

export default Photo;