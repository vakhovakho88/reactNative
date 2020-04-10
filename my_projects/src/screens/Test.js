import React, {useState,useEffect} from 'react';
import {View, Button, Text,StyleSheet, TouchableOpacity} from 'react-native';
import RNSpeedometer from 'react-native-speedometer'



const Test = ({navigation})=>{
    
   const [speed, setSpeed] = useState(0);
  
    let myInterval;
    const interval=()=> myInterval=setInterval(() => {
        navigator.geolocation.getCurrentPosition((position)=>setSpeed(position.coords.speed))
      }, 100);
 
 
    return <View>
            <TouchableOpacity onPress={()=>interval()} >
                <Text>Start Speed Test</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>clearInterval(myInterval)} >
                <Text>Stop Speed Test</Text>
            </TouchableOpacity>
            <Text>speed: {speed}</Text>
            <RNSpeedometer value={speed} size={200}/>
        </View>
}

const styles = StyleSheet.create({});

export default Test;