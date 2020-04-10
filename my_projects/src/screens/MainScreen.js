import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const MainScreen = ({navigation})=>{
    return <View>
            <Button title="Go to Photo Galerie" onPress={()=>navigation.navigate("PhotoAlbum")} />
            <Button title="Go to Test" onPress={()=>navigation.navigate("Test")} />
        </View>
}

const styles = StyleSheet.create({});

export default MainScreen;