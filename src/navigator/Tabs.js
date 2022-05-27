import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import inOutScreen from '../screens/InOutScreen'
import DashboardScreen from '../screens/DashboardScreen'
import UserScreen from '../screens/UserScreen'
const Tab = createBottomTabNavigator();

const Tabs=()=> {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
            <Tab.Screen name="UserScreen" component={UserScreen} />
        </Tab.Navigator>
    );
}
export default Tabs;