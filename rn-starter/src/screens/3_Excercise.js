import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const ExcerciseList = () =>
{
    const friends = [
        {name:"Friend 1", age:20},
        {name:"Friend 2", age:45},
        {name:"Friend 3", age:32},
        {name:"Friend 4", age:27},
        {name:"Friend 5", age:53},
        {name:"Friend 6", age:30},
        {name:"Friend 7", age:25},
    ];
    return (
        <FlatList
        keyExtractor={(person)=>{person.name}}
        data={friends}
        renderItem= {({item})=>{
        return (<Text style={styles.textStyle}>Name: {item.name}  Age: {item.age}</Text>);
        }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        height:50,
        lineHeight:50,
        marginBottom:5,
        backgroundColor: 'red',
        textAlign:'center'
    }
})


export default ExcerciseList;