import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import components
import Photo from './Photo';
import Arrow from './Arrow';
import PhotoLabel from './PhotoLabel';

const Slider = ({path, text})=>{
    return (
        <View style={styles.mainContainer}> 
            <Photo style={styles.photo} path={path}/>
            <Arrow direction="left"/>
            <Arrow direction="right"/>
            <PhotoLabel text={text}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height:220, 
        marginBottom:3
    }
});

export default Slider;