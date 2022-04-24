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

  const [number,setNumber] = useState(0);
  const [times1,setTimes1] = useState(0);
  const [times2,setTimes2] = useState(0);
  
  const onClickRes = () => {
    setNumber(number-5);
    setTimes2(times2+1);
  }
  
  const onClickSum = () => {
    setNumber(number+5);
    setTimes1(times1+1);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}> times: {times1}</Text>
      <Button style={styles.button} title='+' onPress={onClickSum}></Button>
      <Text style={styles.text}>Number: {number}</Text>
      <Button style={styles.button} title='-' onPress={onClickRes}></Button>
      <Text style={styles.text}> times: {times2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#eae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    margin: 20,
  },

});

export default App;
