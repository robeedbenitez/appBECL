import React, { useContext,useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Button,
} from 'react-native'
import jwt_decode from "jwt-decode";
import { AuthContext } from '../context/authContext/authContext'
import generarQr from '../components/general/generarQr'

const DashboardScreen = () => {

    const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    const BECLuser = jwt_decode(authState.BECLToken.access)
    console.log(JSON.stringify(authState))
    const [qr,setQr] = useState();

    const QrScreen = async() => {
        try {
            const data= {
                grupo: BECLuser.user.groups[0].id,
                token: authState.BECLToken.access,
            }
            await generarQr(data)
            .then(data => {
                setQr(data.qrcode)
                console.log("data de generar qr "+data)
            })
        } catch (error) {
            console.log(error)
        }

        
    }
    return (
        <>
            <Text>
                Bienvenido {user.givenName} al dashboardScreen BECL
            </Text>
            <View>
                <View>
                    <Button
                        title="Generar QR"
                        onPress={QrScreen}
                    />
                    {qr?<Text>{qr}</Text>:null}

                </View>
            </View>
        </>
    )
}

export default DashboardScreen;
