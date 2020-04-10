import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Slider from '../components/Slider';
import GridElement from '../components/GridElement';
import Grid from '../components/Grid';
const PhotoAlbum = ()=>{
    const [state, changeState] = useState([
        {id:'1', url: require('../photos/1.jpg'), title:'საირმის რკინიგაზა 2011 წ.'},
        {id:'2', url: require('../photos/2.jpg'), title:'ურეკის სამაშველო ბოძი'},
        {id:'3', url: require('../photos/4.jpeg'), title:'ჯამსარეცხელას ხიდი'},
        {id:'4', url: require('../photos/6.jpg'), title:'აჯამეთის ტყე'},
        {id:'5', url: require('../photos/7.jpg'), title:'კურორტ ამაღლების გოგირდის აბანოები'},
        {id:'6', url: require('../photos/10.jpg'), title:'კადრი ფილმიდან ფესვები'},
        {id:'7', url: require('../photos/11.jpg'), title:'ტაპაყუროს ტბა'},
        {id:'8', url: require('../photos/12.jpg'), title:'აჯამეთის ტყე, ბაღდათის მხარე'},
        {id:'9', url: require('../photos/1.jpg'), title:'საირმე 2011 წ.'},
        {id:'10', url: require('../photos/1.jpg'), title:'საირმის რკინიგზა 2011 წ.'},
        {id:'11', url: require('../photos/2.jpg'), title:'ურეკის სამაშველო ბოძი'},
        {id:'12', url: require('../photos/4.jpeg'), title:'ჯამსარეცხელას ხიდი'},
        {id:'13', url: require('../photos/6.jpg'), title:'აჯამეთის ტყე'},
        {id:'14', url: require('../photos/7.jpg'), title:'კურორტ ამაღლების გოგირდის აბანოები'},
        {id:'15', url: require('../photos/10.jpg'), title:'კადრი ფილმიდან ფესვები'},
        {id:'16', url: require('../photos/11.jpg'), title:'ტაპაყუროს ტბა'},
        {id:'17', url: require('../photos/12.jpg'), title:'აჯამეთის ტყე, ბაღდათის მხარე'},
    ]);

    const [selectedImage, updateSelectedImage] =useState(state[0]);
   
    const selectImage = (id)=>{
        const image = state.find((element)=>element.id===id);
        updateSelectedImage(image);
    };

    return (
        <View style={styles.mainContainer}>
          <Slider path={selectedImage.url} text={selectedImage.title}/>
          <Grid state={state} changeImage={selectImage}/>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:'#161313',
    }
});

export default PhotoAlbum;