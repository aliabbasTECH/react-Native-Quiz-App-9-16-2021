
import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";
import Navigation from './src/config/navigation'


const image = { uri: "https://i.imgur.com/kxUyuPUh.png" };

export default function App() {
  return (
    <View style={styles.container}>
     <Navigation/>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
       flex:1,

  },
  
})