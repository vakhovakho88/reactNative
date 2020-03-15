import React,{useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';

import SearchBar from './../components/SearchBar';

const SearchScreen = () => {
    //in this state we save a search value
    const [term, setTerm] = useState('');


    return (
        <View style={{backgroundColor:'white'}}>
            
            <SearchBar term={term} 
            onTermChange={newTerm=> setTerm(newTerm)}
            onTermSubmit={()=>{console.log("Term was submitted")}}
            
            />
            <Text>{term}</Text>
           
        </View>
    );
}
const styles = StyleSheet.create({});

export default SearchScreen;

