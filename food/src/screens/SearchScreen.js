import React,{useState} from 'react';
import {View, Text,StyleSheet, ScrollView} from 'react-native';

import SearchBar from './../components/SearchBar';

// our created hook
import useResults from '../hooks/useResults';

// import resultsList
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    //in this state we save a search value
    const [term, setTerm] = useState('');
    
    //destructure data from our hook, dont forget brackets cause it is a function
    const [searchApi,results, errorMessage ] = useResults();


    const filterResultsByPrice = (price) =>{
        // price === $ || $$ || $$$
        return results.filter((result)=>{
            return result.price === price;
        });
    }
     
    return (
        // flex:1 says that all the visible space must be token
        // with this we are avoiding that navigation bar is over our components
        // <View style={{backgroundColor:'white', flex:1}}>
        // but the alternative is not an element, empty tag, that can be used as a root element
        // the element will not be rendered and it doesnot go under the edges
        // in this way we can achieve the samme result. 
        //  <>we could wrap everything here</> 
        // but u can not assign styling to it, an i need white backgrouncolor thats why
        // i use old way
        <View style={{backgroundColor:'white', flex:1}}>
            <SearchBar term={term} 
            onTermChange={newTerm=> setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}
            
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList results = {filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results = {filterResultsByPrice('$$')} title="Bit Pricer"/>
            <ResultsList results = {filterResultsByPrice('$$$')} title="Cost Spender"/>
            <ResultsList results = {filterResultsByPrice('$$')} title="Cost Medium"/>
            </ScrollView>    
        </View>
    );
}
const styles = StyleSheet.create({});

export default SearchScreen;

