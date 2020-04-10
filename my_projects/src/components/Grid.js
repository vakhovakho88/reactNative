import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import GridElement from './GridElement';
const Grid = ({state, changeImage})=>{

    return (
        <View style={styles.mainContainer} >
            <FlatList
            data= {state}
            keyExtractor= {(item)=>item.id}
            renderItem = {({item})=>{
                return <GridElement path={item.url} id={item.id} changeImage={changeImage}/>
            }}
            numColumns={3}
         
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1
    }
});

export default Grid;