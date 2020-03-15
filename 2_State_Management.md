# States and Hooks are in React Native similar to react

* If we use const variables as datasource of UI it will not work.
  * Updating the variable should not update the UI automatically
  * Hooks and States update UI automatically.

## Hooks are states for functional components

* Import it 
  ```js
  import React, {useState} from 'react'
  ```
 * Create Hook
   '''js
   //array destructuring
    const [count, setCount] = useState(0); // [0, changeCountMethod] 
   '''
   
   * useState(Object) returns two elements as array
    * First element is an object self
    * Second element is a function that can be used to change first element.
    * We have one array and call it index based or destructure it with array destructuring and call it with variable name
* Use hook as datasource
  ```js
   <Button
     title="Decrease"
     onPress={()=>{
         //count--; never call it directly, it changes value if not static but not UI,
         //console.log(count);
         setCount(count-1); // Decrement the value in Hook.
     }}
     />
  ```
 * Nice to khnow: We cannot assign just normal styling to buttons.
 





expo cli - is easier
react native cli - complicated but more control

we are going to use expo

* npx expo-cli init food

and we have questions that we should fill
> blank



YELP
My App

Client ID
5EOqoKZ1xFtwwuKJ5WoH8A

API Key
grzeB_oO4raONAFvUczbBZBa-wxR1tdH7eWmkhrv0nLgMqoHRGodlh7Xm31pTEIBG05okqPfrYeEQwxujmcJbJqaad-VJnWKkwq_GD1g-LTPDTlSEToigHRdmFtuXnYx




3 types of nacigators,

install navigator: npm install react-navigation


App.js special file
automatically shown what exported
on the screen

https://github.com/expo/vector-icons