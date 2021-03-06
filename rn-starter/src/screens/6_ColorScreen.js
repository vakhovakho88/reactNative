import React, {useState} from 'react'
import {View,Button, Text, StyleSheet, FlatList} from 'react-native'

// when we change something in state ui will be reloaded

const ColorScreen = () =>{
    
    const [colors,setColors] = useState([]);
    //console.log(colors);

    // We could do it
    // const squares = (
    //     colors.map((item)=>{
    //         return <View style={{height:100, width:100, backgroundColor: item, marginBottom:1}}/>
    //     })
    // );


    // flat list scrollabe mapping not
    
    return(
        <View>
            <Button title="Add a color" onPress={()=>{
                setColors([...colors, randomRGB()]);
            }}/>
            <FlatList
            keyExtractor= {item=>item}
            data={colors}
            renderItem ={({item})=>{
                return <View style={{height:100, width:100, backgroundColor:item, marginBottom:1}}/>
            }}  
            />     
        </View>
    );
}

// generates random color
const randomRGB = ()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})` 
}


// to button we cannot assign styles so good as to another tags
const styles = StyleSheet.create({});

export default ColorScreen;