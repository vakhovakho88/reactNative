import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import ResultDetail from '../components/ResultsDetail';
import {withNavigation} from 'react-navigation';

// navigation prop stays here, but it is now from react navgation and not from parent component
// we must wrapp export with withNavigation()
const ResultsList = ({title,results,navigation}) =>{

    //if we dont have any results than dont show the titlee of section
    if (results.length==0)
    {
        console.log("captured");
        return null;        
    }
    else
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data= {results}
            keyExtractor={(result)=>result.id}
            renderItem = {({item})=>{
            return (
            <TouchableOpacity onPress={()=>navigation.navigate("ResultsShowScreen", {id: item.id})}>
            <ResultDetail result={item}/>
            </TouchableOpacity>);
            }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom:15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:5
    }
});


export default withNavigation(ResultsList);