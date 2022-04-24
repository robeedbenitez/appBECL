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
 
   const [text,setNumber] = useState("Style test");
   
   const onClickSet = () => {
     setNumber("Style updated");
   }
 
   return (
     <View style={styles.body}>
       <Text style={styles.text}> {text} </Text>
       <Button style={styles.button} title='Update State' onPress={onClickSet}></Button>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: '#FAA',
     borderWidth: 10,
     borderRadius:10,
   },
   text: {
     fontSize: 20,
     color: '#000',
     margin: 20,
     textTransform: 'uppercase',
   },
 
 });
 
 export default App;
 