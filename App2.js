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
  Image,
  ImageBackground,

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
    <ImageBackground 
      styles={styles.fonini}
      source={require('./assets/img/fonini.png')}
      resizeMode='stretch'
    >
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
      style={styles.button}
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
      <Image
      
      />
      
    </ImageBackground>
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
  button: {
    
    width: 150, 
    height:50,

    backgroundColor:'black',
  },
  fonini:{
    width:'100%',
    height:'100%',
  }

});

export default App;
