import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";


export default function About({navigation}) {
  return (
    <View style={styles.container}>

    <Text> About</Text>
   
   <TouchableOpacity  style={styles.Butn}
   onPress={() =>  navigation.navigate('Home',{name:"aliabbas"})}>
       <Text style={styles.textC}>
         Go to Home
       </Text>
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