import 
  React,
  {useState} 
from 'react';

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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import screenA from './screenA'
import screenB from './screenB'

const Stack = createNativeStackNavigator();

const p1 = () => {
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="screen A" 
                    component={screenA}
                />
                <Stack.Screen
                    name="screen B" 
                    component={screenB}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
};
export default p1;