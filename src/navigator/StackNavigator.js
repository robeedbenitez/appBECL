import React from 'react';
import LoginScreen from '../screens/LoginScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../navigator/Tabs.js';
import QrScreen from '../screens/QrScreen.js';
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
                name="QrScreen"
                component={QrScreen}
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