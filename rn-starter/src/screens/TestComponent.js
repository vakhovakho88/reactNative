import React, { Component } from 'react';
import {StyleSheet,View, Text} from 'react-native';

class TestComp extends Component{
    state = {
        persons:[
            {name:"vakho", key: "1"},
            {name:"vakho", key: "2"},
            {name:"vakho", key: "3"},
            {name:"vakho", key: "4"}
        ]
    }
    render(){
        let all = this.state.persons.map((person)=>{
            return <Text>{person.name}</Text>
        })
        return (
            <View>
               {all} 
            </View>
        )
    }
}
export default TestComp;