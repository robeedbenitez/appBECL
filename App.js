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
  SafeAreaView,
  Alert,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from './assets/css/styles.js';//importando el stylesheet
import SesionText from './assets/components/sesionText.js';
import GoogleButton from './assets/components/GoogleButton.js';
import ButtonSingOut from './assets/components/ButtonSingOut.js';

const App = () => {

  const [something,setSomething]=useState('Digite algo primero');
  const onPress = () => {
    setSomething("hola");
  }
  
  return (
    <ImageBackground 
      style={styles.background}
      source={require('./assets/img/fonini.png')}
    >
      <SafeAreaView style={styles.body}>
        <View style={[styles.viewLogo]}>
          <Image       
            source={require('./assets/img/logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={[styles.viewOptions]}>
          <SesionText
            text="Bienvenido"
          />
          <GoogleButton
          />
          <View
            style={styles.footer}
          >
            <SesionText
              text="Ayuda"
            />
            <SesionText
              text="UFPS"
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
