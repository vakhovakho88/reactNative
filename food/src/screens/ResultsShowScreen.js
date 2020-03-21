import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

// {navigation} to get the restaurant id what we clicked
const ResultsShowScreen = ({navigation})=>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    //console.log(result.photos);
    // helper function to get results
    const getResult = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        //console.log(result); will return null here cause it is synchronized
    }

    //just run it one time
    useEffect(()=>{
        getResult(id);
    }, []);

    // if result is not loaded yet than null, very important
    if (!result)
        return null;
    //console.log(result.photos);
    return <View>
        <Text style={styles.text}>Welcome to {result.name}</Text>
        <FlatList
        data = {result.photos}
        keyExtractor={(photo)=>photo}
        renderItem= { ({item})=>{
        return (
            <Image source={{uri: item}} style={styles.image} />
        );
        }
            
        }
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height:200,
        width: 200,
        marginBottom:10,
        alignSelf: "center"
    },
    text: {
        alignSelf:'center',
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
    }
});

export default ResultsShowScreen;