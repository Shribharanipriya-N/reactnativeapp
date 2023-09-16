import { Alert } from 'bootstrap';
import React,{Component} from 'react';
import {ImageBackground, StyleSheet, Text, View,Button} from 'react-native';
//import { Dimensions } from 'react-native';

const image = {uri: "https://plus.unsplash.com/premium_photo-1669349127520-fa1e30b02055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MSUyMDF8ZW58MHx8MHx8fDA%3D&w=1000&q=80"};

const Main = () => (
  <>
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Product name</Text>
    </ImageBackground>
    </View>
    <View style={styles.container1}>
    <Button style={styles.button}title='Order'/>
    <Button style={styles.button1}title='Sales' onClick={()=>Alert.alert("sales!!")}></Button></View>
    
    </>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%", 
    
    //backgroundColor:'white',
  },
  container1:{
    //flex:1,

    display:'flex',
    flexDirection:'row',
    
    //justifyContent:'flex-start',
    //alignItems:'flex-start'
  },
  
  /*button:{
    display:'flex',
    alignItems:'flex-start',
   width:50,
   alignItems:'flex-start',
   justifyContent:'center',
   //backgroundColor:'white'
  },*/
  image: {
    flex: 1,
    top:43,
    height:250,
    border: 1,
    borderColor:"black",
    borderRadius:25,
     
    
  },
  text: {
    color: 'white',
    fontSize: 22,
    lineHeight: 84,
    fontWeight: 'bold',
    marginLeft:15,
    top:185,
  },
});

export default Main;