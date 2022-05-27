import React,{useContext} from 'react'
import {
    View,
    Text,
    ScrollView,
} from 'react-native'
import {AuthContext} from '../context/authContext/authContext'
import GoogleButton from '../components/login/GoogleButton'

const DashboardScreen =()=> {
    
    const authState= useContext(AuthContext)
    //console.log('este es el context '+ JSON.stringify(authState))
    return (
        <ScrollView>
            <Text>
            dashboardScreen
            </Text>
            <Text>
                {JSON.stringify(authState)}
            </Text>
        </ScrollView>
    )
}

export default DashboardScreen;