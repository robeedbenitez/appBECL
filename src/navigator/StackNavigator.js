import React from 'react';
import LoginScreen from '../screens/LoginScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../navigator/Tabs.js';
import ValidarUserBECL from '../components/login/ValidarUserBECL';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
                header: () => null
            }}
        />        
        <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
                header: () => null
            }}            
        />
    </Stack.Navigator>
    );
}
export default StackNavigator;