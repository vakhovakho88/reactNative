import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';


//  we could have destructuring here {imageSource,title,score}
const ImageDetail = (props) =>{
    //console.log(props);
    return <View>
        <Image source={props.imageSource}/>
        <Text>U see a picture of {props.title}</Text>
        <Text>Image score {props.score}</Text>
        </View> 
}   


const style = StyleSheet.create({});

export default ImageDetail;