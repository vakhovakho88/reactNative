import React, {useState} from 'react';
import {View,Button, Text, StyleSheet, FlatList} from 'react-native';

import ColorCounter from '../components/7_ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () =>{
    const [red,changeRed] = useState(255);
    const [green,changeGreen] = useState(3);
    const [blue,changeBlue] = useState(255);
    
    // or we could have anonymous functions too
    //or every colors separately
    // const DecreaseRed = ()=>{
    //     if (red>=COLOR_INCREMENT)
    //     {
    //         changeRed(red-COLOR_INCREMENT);     
    //     }
    // }
    
    const setColor =(color,change)=>{
        switch (color) {
            case 'red':
                red+change>255 || red+change<0 ? null : changeRed(red+change);
                return;
            case 'green':
                green+change>255 || green+change<0 ? null : changeGreen(green+change);
                return;
            case 'blue':
                blue+change>255 || blue+change<0 ? null : changeBlue(blue+change);
                return;


              
        }
    }

    return(
        <View>
            
            <ColorCounter 
            color="Red" 
            clickDecrease= {()=>setColor('red',-1*COLOR_INCREMENT)}
            clickIncrease={()=>setColor('red',1*COLOR_INCREMENT)}
            />
            <ColorCounter 
            color="Green"
            clickDecrease= {()=>setColor('green',-1*COLOR_INCREMENT)}
            clickIncrease={()=>setColor('green',1*COLOR_INCREMENT)} 
             />
            <ColorCounter 
            color="Blue" 
            clickDecrease= {()=>setColor('blue',-1*COLOR_INCREMENT)}
            clickIncrease={()=>setColor('blue',1*COLOR_INCREMENT)}
            />
            <View style={{width:100, height:100,
                 backgroundColor: createValueOfColor(red,green,blue)}}/>
        </View>
    );
}



const createValueOfColor = (R,G,B)=>{
    //console.log(`rgb(${R},${G},${B})`)
    return `rgb(${R},${G},${B})`;
}



const styles = StyleSheet.create({});

export default SquareScreen;