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
         <Text style={styles.text}> View 1</Text>
         </View>
         <View style={styles.view2}>  
         <Text style={styles.text}> View 2</Text>
         </View>
         <View style={styles.view3}>  
         <Text style={styles.text}> View 3</Text>
         </View>
       </View>
        <View style={styles.viewc2} >
          <View style={styles.view4}>
            <Text style={styles.text}> View 4</Text>
          </View>  
          <View style={styles.view5}>
            <Text style={styles.text}> View 4</Text>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'stretch',
    justifyContent:'center',
    flexDirection:'column',
   },
   view1:{
      flex:1,
      backgroundColor:'blue',
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
   text: {
     fontSize: 20,
     color: '#000',
     margin: 20,
     textTransform: 'uppercase',
   },
 
 });
 
 export default App;
 