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
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  const [something,setSomething]=useState('Digite algo primero');
  return (
    
    <View styles={styles.body}>
      <Text style={styles.text}>
        Digite algo
      </Text>
      <TextInput 
      style={styles.input}
      placeholder='Ingrese algo'
      onChangeText={(value)=>setSomething(value)}
      keyboardType='default'
      maxLength={8}
      editable={true} // false para inhabilitar
      secureTextEntry
      />
      <Text style={styles.text}>
        Ud escribio esto: {something}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    with: '80%',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 20,
    color: '#000',
    margin: 20,
  },
  input: {
    with: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius:5,
  },

});

export default App;
