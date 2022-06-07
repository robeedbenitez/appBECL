import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import inOutScreen from '../screens/InOutScreen'
import DashboardScreen from '../screens/DashboardScreen'
import UserScreen from '../screens/UserScreen'
const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="DashboardScreen"
                component={DashboardScreen} 
                options={{
                    tabBarLabel: "Servicios",
                    header: () => null,
                }}
            />
            <Tab.Screen 
            name="UserScreen" 
            component={UserScreen} 
            options={{
                tabBarLabel: "Perfil",
                header: () => null,
            }}
            />
        </Tab.Navigator>
    );
}
export default Tabs;