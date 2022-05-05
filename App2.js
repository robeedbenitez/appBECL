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
  const [submitted,setSumitted]=useState(false);
  const onPress = () => {
    setSumitted(!submitted);
  }
  return (
    
    <View styles={styles.body}>
      <Text style={styles.text}>
        Digite algo
      </Text>
      <TextInput 
      style={styles.input}
      placeholder='Ingrese algo'
      keyboardType='default'
      onChangeText={(e)=>setSomething(e)}
      maxLength={8}
      editable={true} // false para inhabilitar
      secureTextEntry
      />
      <Button
      title={submitted? 'Clear':'Enviar' }
      onPress={onPress}
      />
      {
        submitted?
        <Text style={styles.text}>
        Ud escribio esto: {something}
      </Text>
      :
      null
      }
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '80%',
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
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius:5,
  },

});

export default App;
