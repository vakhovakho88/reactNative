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
 

#### RenderItem in Flatlish and inline Styling
* Es ist ein auschnit von Flatlist component with datasource-state colors
```js
//....
data={colors}
renderItem ={({item})=>{
    return <View style={{height:100, width:100, backgroundColor:item, marginBottom:1}}/>
}}
//...
```

#### State another example
* We have a function that generates a rando RGB value as sring (randomRGB).
```js
//...
const [colors,setColors] = useState([]);
//...
 <Button 
  title="Add a color" 
  onPress={()=>{
                setColors([...colors, randomRGB()]);
            }}
 />

```
* Spreading operator adds a value to colors

#### Empty styling in component
```js
const styles = StyleSheet.create({});
```

#### Handle RGB values separately in separate state and switch statement
```js
const COLOR_INCREMENT = 10;
//...
 const [red,changeRed] = useState(255);
 const [green,changeGreen] = useState(3);
 const [blue,changeBlue] = useState(255);
 
 const setColor =(color,change)=>{
    switch (color) {
        case 'red':
            red+change>255 || red+change<0 ? null : changeRed(red+change);
            return;
        case 'green':
            green+change>255 || green+change<0 ? null : changeGreen(green+change);
            return;
        case 'blue':
            blue+change>255 || blue+change<0 ? null : changeBlue(blue+change);
            return;
    }
}

//...
// Two example props that we are giving to our child component
clickDecrease= {()=>setColor('red',-1*COLOR_INCREMENT)}
clickIncrease={()=>setColor('red',1*COLOR_INCREMENT)}

```

## Reducer
### Reducer is an alternative of state. It is not very recomended for little states.
### It is very imporntent

* For this example we have a child component (ColorCounter)
 ```js
 
 const ColorCounter = ({color,clickIncrease,clickDecrease}) =>{
    return (
     <View style={{marginBottom:3}}>
      <Text>{color}</Text>
      <Button title={`More ${color}`} onPress={()=>clickIncrease()}/>
      <Button title={`Less ${color}`} onPress={()=>clickDecrease()}/>
     </View>
    );
} 
 
 ```
 * {color,clickIncrease,clickDecrease} => Destructuring of props
 * `More ${color}` string inteprolation
 * onPress={()=>clickIncrease()} is same as onPress={clickIncrease} and it is everywhere so.
* Import a reducer:
 ```js
 
 import React,{useReducer} from 'react';
 
 ```

* Create a reducer function (name optional but i call it reducer here)
 ```js
 
 const reducer = (state, action)=>{
 
    switch(action.colorToChange){
        case 'red':
            // this is just new building an object....
            return state.red+action.amount>255 || state.red+action.amount<0 ?
                state :  {...state, red: state.red+action.amount};
            
        // another case statements for another colors
        // ....

        default:
            return state;
    }
};
 ```
* state === {red: number, green:number, blue:number}
* action === {colorTochange: 'red' | 'green' | 'blue', amount: +15 | -15}
* It does not matter what, always return a value, cause it replaces our state.
* Spread operator changes a value of object branch, if the branch does not exist than it appends.
* Now let us use reducer in our component
 ```js
 
 //dispatch: call my reducer, we could call it something else too.
  const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0});
  // destructuring the state, not iterablle, thats why as object.
  const {red, green, blue} = state;
  
  
   
 
 ```
 * As we see it we have dispatch => activator function
 * Initial values for our state...
 * Destructuring that we call states with simple names
 * But never change the values directly from destructured objects.
 
* Call reducer in our return and give it to child component, only example for red:
 ```js
 
 <ColorCounter 
    color="Red" 
    clickDecrease= {()=>dispatch({colorToChange:'red',amount:-1*COLOR_INCREMENT})}
    clickIncrease={()=>dispatch({colorToChange:'red',amount: COLOR_INCREMENT})}
    />
    
 ```
 * `dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})` this is a second argument, the first argument: `state` is automatically inside.
 
 #### The reducer has name conventions. It is not must do it but just a convention
 * Let us refactor the code above with comunity convention
 * state === {red: number, green:number, blue:number}
 * action === {type: 'change_red' | 'change_green' | 'change_blue', payload: +15 | -15}
 * Part from switch statement:
 ```js
 
  switch(action.type){
    case 'change_red':
        return state.red+action.payload>255 || state.red+action.payload<0 ?
            state :  {...state, red: state.red+action.payload};
                
 ```
 * Part from return 
 ```js
 <ColorCounter 
   color="Red" 
   clickDecrease= {()=>dispatch({type:'change_red',payload:-1*COLOR_INCREMENT})}
   clickIncrease={()=>dispatch({type:'change_red',payload: COLOR_INCREMENT})}
   />
 ```
 * As we see it we only have changed `action.colorToChange` to `action.type`
 * `change` to `payload`
 * `red` to `change_red`
 * State stays the same
 * To have payload is optional.

## Another starter example of reducer is: `10_Excercise_Counter_With_Reducers.js`

## TextInput component (11_TextScreen.js, 12_PasswordInput.js)

* Import it 
 ```js
 
  import {View, Text, StyleSheet, TextInput} from 'react-native';
 
 ```
* Have state for it
 ```js
 
 const [name, setName] = useState('')
 
 ```
* Use it:
 ```js
 
 <TextInput 
   style = {styles.input} 
   // autoCapitalize="none"
   autoCorrect = {false}
   value = {name}
   onChangeText = {(newValue)=> setName(newValue)}
   />
 
 ```
 * TextInput has by default 0 styling, thats why we dont see it, if we dont assign it styling
 * On ios it is capitalized automatically and has autocorrect
 * `(newValue)=> setName(newValue)` newValue is automatically input text of TextInput

* We have textinput for password, show message when password is shorter than 5 symbols.
* 12_PasswordInput.js
 ```js
 
 const [password, setPassword] = useState('');
 //..... the same textinput story here, but it works on password now
 {password.length<5? 
  <Text>The password must be longer than 5 characters.</Text>
   :  null}

```
