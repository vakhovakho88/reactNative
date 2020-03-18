import axios from 'axios';

// this is our api request maker
// yelp calls businesses to results
export default axios.create({
    // this is common url for all calls
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        // api key the Bearer ist a keyword
        Authorization: 'Bearer grzeB_oO4raONAFvUczbBZBa-wxR1tdH7eWmkhrv0nLgMqoHRGodlh7Xm31pTEIBG05okqPfrYeEQwxujmcJbJqaad-VJnWKkwq_GD1g-LTPDTlSEToigHRdmFtuXnYx'
    }
});

//yelp.get()