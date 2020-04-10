import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

const GridElement = ({path,id,changeImage})=>{
    return (
        <TouchableOpacity  onPress={()=>changeImage(id)} style = {styles.container}>
            <Image 
            source={path}
            style={styles.image}
            />
            {/* <View style={styles.image}></View> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width:120,
        height:120,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'white',
        flexDirection:"column",
        marginBottom:10,
        marginRight:10
    },
    image: {
       flex: 1,
       width: null,
       height: null
    }
});

export default GridElement;