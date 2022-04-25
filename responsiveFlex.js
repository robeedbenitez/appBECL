/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';

 import {
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 const App = () => {

     return (
     <View style={styles.body}>
       <View style={styles.viewc1} >
         <View style={styles.view1}>  
         <Text style={styles.text}>1</Text>
         </View>
         <View style={styles.view2}>  
         <Text style={styles.text}>2</Text>
         </View>
         <View style={styles.view3}>  
         <Text style={styles.text}>3</Text>
         </View>
       </View>
        <View style={styles.viewc2} >
          <View style={styles.view4}>
            <Text style={styles.text}>4</Text>
          </View>  
          <View style={styles.view5}>
            <Text style={styles.text}>5</Text>
          </View> 
        </View>
        <View style={styles.viewc3}>
         <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
         </View>
         <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
         </View>
        
        </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     backgroundColor: '#fff',
   },
   viewc1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'stretch',
    justifyContent:'center',
    flexDirection:'row',
   },
   viewc2: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems:'stretch',
    justifyContent:'center',
    flexDirection:'column',
   },
   viewc3: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems:'stretch',
    justifyContent:'center',
    flexDirection:'row',
   },
   view1:{
      flex:1,
      backgroundColor:'black',
      justifyContent: 'center',
      alignItems:'center',

   },
   view2:{
    flex:2,
    backgroundColor:"pink",
    justifyContent:'center',
      alignItems:'center',  
   },
   view3:{
    flex:3,
    backgroundColor:'yellow',
    justifyContent:'center',
      alignItems:'center',  
   },
   view4:{
    flex:1,
    backgroundColor:'red',
    justifyContent:'center',
      alignItems:'center',  
   },
   view5:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
      alignItems:'center',  
   },
   view6:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',  
    },
    view7:{
      flex:1,
      backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center',  
      },
   text: {
     fontSize: 20,
     color: '#000',
     margin: 20,
     textTransform: 'uppercase',
   },
 
 });
 
 export default App;
 