import {useState, useEffect} from 'react'
import yelp from '../api/yelp';

// this is everythin to have businesslogik separate and reusable
// hook related logik is it.
export default () =>{
    // well firs import all the terms they are related to the yelp API
    //results of api
    const [results,setResults] = useState([]);
    // state for error handling, as default it is emty.
    const [errorMessage, setErrorMessage] = useState('');
   
    const searchApi = async (searchTerm) =>
    {
        // it will get whole data
        // it is an asynchronous function
        // hardcoded location and limit 50
        // key value pairs as get variables
        try {
            const response = await yelp.get('/search', {
                params: {
                    // this are get variables from yelp self
                    limit: 50,
                    //term, // this is aquivalent to 'term: term'
                    term: searchTerm,
                    location: 'new yourk'
                }
            }); 
            
            setResults(response.data.businesses);
            //console.log(response.data);

        } catch(err){
            // err is a whole messages and hierarchies
            //console.log(err);
            setErrorMessage("Something went wrong");
        }
        
    }

    // call search api when it is going to render to have initial seachch. never do it!!
    // it will call self revursively.
    // BAD CODE:
    //searchApi('pasta');

    // instead of we can use useEffect Hook
    // in this case it only runs one time
    useEffect(()=>{
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
}