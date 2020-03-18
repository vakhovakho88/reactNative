import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';

import SearchBar from './../components/SearchBar';

// import yelp api
import yelp from '../api/yelp';

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
        <View style={{backgroundColor:'white'}}>
            
            <SearchBar term={term} 
            onTermChange={newTerm=> setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}
            
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results = {filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results = {filterResultsByPrice('$$')} title="Bit Pricer"/>
            <ResultsList results = {filterResultsByPrice('$$$')} title="Cost Spender"/>
        </View>
    );
}
const styles = StyleSheet.create({});

export default SearchScreen;

