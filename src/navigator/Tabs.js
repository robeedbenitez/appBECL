import React from 'react'
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen'
import UserScreen from '../screens/UserScreen'
import theme from '../theme/theme.js'
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: '#fff' }}
            
            screenOptions={
                
                ({ route }) => ({
                    tabBarActiveTintColor:theme.primaryColor.color,
                    tabBarIcon: ({ color, focused, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'DashboardScreen':
                                iconName = 'dashboard';
                                break;                            
                            case 'UserScreen':
                                iconName = 'person';
                                break;
                        }
                        return <Icon name={iconName} size={30} color={color} />
                    }
                })
            
            }
        >
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