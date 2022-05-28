import React, { useContext } from 'react'
import {
    View,
    Text,
    ScrollView,
} from 'react-native'
import jwt_decode from "jwt-decode";
import { AuthContext } from '../context/authContext/authContext'
import CardService from '../components/general/CardService'

const DashboardScreen = (props) => {

    
    const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    const BECLuser = jwt_decode(authState.BECLToken.access)
    console.log('este es el context ' + JSON.stringify(authState))
    
    return (
        <>
            <Text>
                Bienvenido {user.givenName} al dashboardScreen BECL
            </Text>
            <View>
                <CardService
                    props={props}
                    title="Generar Qr"
                    action="generarQr"
                    grupoId={BECLuser.user.groups[0].id}
                />
                <CardService
                    title="Servicio 2"

                />
            </View>
        </>
    )
}

export default DashboardScreen;
