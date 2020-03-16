# Layouts in React native

## There are 3 types of layouts in react native
  * Box Object Model
  * Flex Box Model
  * Position Property

### Box Screen Model 
* The same as css from webprog.
* We have a box with: content, padding, border, margin
* example: `13_BoxScreen.js`

### Flex Box Model
* Alligments
* Directions
* Flex
* Example: `14_FlexBoxModel.js` 

* Properties for parent component that contains a list of elements (of cource in styling object). It is valid for all child elements.
  * flexDirection -> is the list horizontal or vertical
    ```js

    flexDirection: "column", // horizontall list, default value
    flexDirection:"row", //verticall alligment,

    ```
  * alignItems -> Where are the list items alligned
    ```js
    alignItems: "flex-start", // on the start, if the direction is horizontal then it is on upper border, else left border.
    alignItems: "stretch", // default, the list item is stretched on whole parent component.
    alignItems: "center",
    alignItems: 'flex-end' 

    ```
    * If flexDirection is horizontal: alligment works vertically
    * If flexdirection is vertical: alligment works horizontally
    * It could be overwritten due every child item with `alignSelf`
  * justifyContent is opposite alligment of alignItems
    ```js
    justifyContent: "center", // similar to allign items but it works in the oposite direction
                                // if alligment is verticall it will make it vertical center
    justifyContent: "space-between" // start/element on edges and elements in the middle are spaced from each other
    justifyContent: "space-around" // the same but start ens spacing too.
    ```
    * values: center, flex-start, stretch, flex-end, space-between, space-around
  
  * Child element properties
    * alignSelf
      ```js
      
      alignSelf: "flex-start"
      alignSelf: "flex-end"
      alignSelf: "stretch"
      alignSelf: "center"
     
      ```
      * Aligment of only one element: center, flex-start, flex-end, stretch
      * It overwrites the parent alligment property for only a concrete child.
  * `flex` how the element(s) fill a rest place in component or make elements to have percentage proportional size to each other
    ```js
    flex: 1
    ```
    * Let us say we have 3 element: element1, element2, element3. Height of parent element is 300.
      * Case Nr.1: all elements have flex:1  (100 : 100 : 100)
      * Case Nr.2: only one element (lets say first) has flex:1 and anothe elements are 50. (200:50:50)
      * Case Nr.3: element1 has flex:1, element2 has flex:2 and elemen3 is 150. (50: 100 : 150)
      * Case Nr.4: elemen1 has flex:5, element2 has flex:4 and element3 has flex:1 (150:120:30)
      * There are of course more cases, but the principe must be clear with examples above.
     * If only one element has got flex:1 it fills the rest place in parent
     * If there are three elements and only 2 elements have flex:1 they fill rest space after elemet1, with same size.
     * If all of them are flex:1 they fill all space but they have same length
     * It is length relation too: 3:2:5 means one of them ist 30% another 20% and the third 50%
     * It would work with flex direction too
     
### Position Property
* As default every element has position: relative
* If we set it to absolute the sibling will ignore it
* And it can be positioned on the specific position
* If it is absolute we cannt use alignItem: stretch.      
* Example `15_PositionProperty.js`   
  #### top, buttom, right, left for posission relative
    * They are shifted after everything is located on the screen
    * It means it does not start at 0x0 coordinates, it is from the actual position of element
    * No other siblings are going to be affected.
  ### top, buttom, right, left for posission absolute
    * Start is 0x0 coordinates.
    * No other siblings are going to be affected.
  ### Shortcut to  fill parent container and have position absolute with 0x0 top/left
    ```js

    //Just in out style object:
    ...StyleSheet.absoluteFillObject, // fill height, width, absolute, 0,0

    ```
* Another example: `16_ExcerciseBoxScreen.js` 
