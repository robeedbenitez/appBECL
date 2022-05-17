import { NavigationContainer } from '@react-navigation/native';

import 
  React
  from 'react';
import {
  Text,
}from 'react-native';

import {
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';
import Login from './src/components/login/Login.js';
import MainPage from './src/components/dashboard/MainPage.js';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{
            header:()=> null
          }}
          />
        <Stack.Screen 
        name="mainpage" 
        component={MainPage} 
        options={{
          header:()=> null
        }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
export default App;
