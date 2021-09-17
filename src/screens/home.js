import React from "react";
import {useState} from 'react'
import { ImageBackground, StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";





export default function Home({navigation}) {

   
    

  return (
    <View style={styles.container}>
   
   <Text > Home</Text>
     <TouchableOpacity style={styles.Butn} onPress={() => navigation.navigate('About')}>
       <Text style={styles.textC}> Go to About</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.Butn} onPress={() => navigation.navigate('Quiz')}>
       <Text style={styles.textC}> quiz</Text>
     </TouchableOpacity>
     
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center", 
    backgroundColor:"#fff",
  },
  Bacground:{
    width:"100%" ,height:"100%" ,
  },
  textC:{color:"#fff"},
  Butn:{
    borderWidth:1,
    backgroundColor:"#009Bf1",
    shadowColor: "#000",
  }
  
})