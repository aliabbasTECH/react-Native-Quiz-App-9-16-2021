import React from "react";
import {useState} from 'react'
import { ImageBackground, StyleSheet, Text, View, TextInput,TouchableOpacity,  } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

 
export default function Quiz({navigation}) {


const [questions, setQuestions] = useState([
   {
     question: "HTML stands for __________",
     options: [
       "Hypertext markup langauge",
       "Programming langauge",
       "markup language",
     ],
     correctAns: "Hypertext markup langauge",
   },
   {
     question: "CSS stands for __________",
     options: [
       "Cascading Style sheet",
       "Programming langauge",
       "markup language",
     ],
     correctAns: "Cascading Style sheet",
   },
   {
     question: "HTML is programming language",
     options: ["True", "False"],
     correctAns: "False",
   },
 ]);

const [indx,SetIndex]=useState(0);
const [score, setScore] = useState(0)
const [selectedOption, setSelectedOption] = useState("")
const [showresult, setShowResult] = useState(false)
function checkAns(){
   let correctOption = questions[indx].correctAns;
   if (selectedOption==correctOption){
      setScore(score + 1);

   }
   if (questions.length == indx +1){
      setShowResult(true);
   }
   else{
     SetIndex(indx+1) 
   }
   
} 
console.log(score)
    return (
    <View style={{flex:1}} > 
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
  
     {!showresult? (
       <View style={styles.header} > 
    
       <View style={styles.Q_Container}>
          <Text style={{ textAlign:"right",width:"95%",padding:5,fontSize:12,color:"#050B51", }}> 
             Question <Text> {indx+1} </Text>/<Text> 10 </Text> 
          </Text>
          <Text style={styles.question}> {questions[indx].question} </Text>
      </View>

      <View style={styles.AnsContainer}>
         {questions[indx].options.map((e,i)=>{
            return(
               <TouchableOpacity onPress={()=>setSelectedOption(e)}  key={i}  style={styles.Ans} >
                <Text style={styles.AnsText} >{e}</Text>
                 </TouchableOpacity  > 
            )
         })} 
       </View> 
       <View style={{justifyContent:"center",alignItems:"center",}}>
        <TouchableOpacity 
               onPress={()=>checkAns()}
        style={styles.btns}>
            <Text style={styles.btnTxt} > next </Text>
        </TouchableOpacity>
        
       </View>
     </View>  

     ): null} 
          
          {showresult? (<View style={{flex:1,justifyContent:"center",
        alignItems:"center",}}>
           <View style={styles.resultBox}>
            <Text style={styles.resultText} >{((score/questions.length) * 100).toFixed(2)}%</Text>
             <Text style={styles.resultText} >{((score/questions.length) * 100) <60 ? "fail":"pass"}</Text>
           </View>
           </View>
              ) :null}
          
      </LinearGradient>  
    </View> 
    )
}


const styles = StyleSheet.create({
    container:{
      height:"100%",
      alignItems:"center", 
      backgroundColor:"#32A1FF",

    },
    header:{
    //   backgroundColor:"#FCA607",
      width:"90%",
      marginTop:50,
    },
    Q_Container:{
        marginTop:50,
        height:"37%",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:20,
        shadowColor: "#000",
       shadowOffset: {
	      width: 0,
	      height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
    },
    question: {
      fontWeight:"bold",
      fontSize:20,
      marginTop:30,
      width:"95%", 
      padding:5,
      color:"#000000"
    },
    probar:{  

    },
    AnsContainer:{   
        padding:2,
        marginTop:20,
        marginBottom:20,
        // backgroundColor:"#A9FC07",
        justifyContent:"center",
        alignItems:"center",
    },
    Ans:{
       
       backgroundColor:"#fff",
       width:"95%",
       margin:5,
       marginTop:10,
       padding:10,
       borderRadius: 20,
       shadowColor: "#000",
       shadowOffset: {
	      width: 0,
	      height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
    },

    AnsText:{
       fontSize:16,
       fontWeight:"bold",
       color:"#000000"
    },

    btns:{
        
        backgroundColor:"#54CD02",
        width:"95%",
        margin:5,
        marginTop:10,
        padding:10,
        borderRadius: 20,
        shadowColor: "#000",
       shadowOffset: {
	      width: 0,
	      height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,   
    },
    btnTxt:{
    textAlign:"center",
    fontSize:19,
    fontWeight:"bold",
  },
  resultBox:{
    justifyContent:"center",
        alignItems:"center",  
    padding:100,
    backgroundColor:"#fff",
    borderRadius:20,
    shadowColor: "#000",
   shadowOffset: {
    width: 0,
    height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,  
  },
  resultText:{
     
     fontSize:50
  }
    
    
  })