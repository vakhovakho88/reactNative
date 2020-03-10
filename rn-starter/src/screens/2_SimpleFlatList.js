import React from 'react';
import {Stylesheet, Text, View, FlatList, StyleSheet} from 'react-native';

const ListOfElements = () =>{

    // const friends = [
    //     {name: "Friend1", key: '1'},
    //     {name: "Friend2", key: '2'},
    //     {name: "Friend3", key: '3'},
    //     {name: "Friend4", key: '4'},
    //     {name: "Friend5", key: '5'},
    //     {name: "Friend6", key: '6'},
    //     {name: "Friend7", key: '7'},
    //     {name: "Friend8", key: '8'},
    //     {name: "Friend9", key: '9'},
    //     {name: "Friend10", key: '10'}
    // ];
    const friends = [
        {name: "Friend1 "},
        {name: "Friend2 "},
        {name: "Friend3 "},
        {name: "Friend4 "},
        {name: "Friend5 "},
        {name: "Friend6 "},
        {name: "Friend7 "},
        {name: "Friend8 "},
        {name: "Friend9 "},
        {name: "Friend10 "}
    ];

    return ( 
       
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend=>friend.name}
            data={friends} 
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
            />
       
    );

}

const styles = StyleSheet.create({
    textStyle: {
        color:"red",
        marginHorizontal:50

    }
})

export default ListOfElements;