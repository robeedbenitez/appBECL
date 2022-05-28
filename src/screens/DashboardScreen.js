import React, { useContext } from 'react'
import {
    View,
    Text,
    ScrollView,
} from 'react-native'
import { AuthContext } from '../context/authContext/authContext'

const DashboardScreen = () => {

    const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    //console.log('este es el context ' + JSON.stringify(authState))
    return (
        <ScrollView>
            <Text>
                Bienvenido {user.givenName} al dashboardScreen BECL
            </Text>
            
        </ScrollView>
    )
}

export default DashboardScreen;