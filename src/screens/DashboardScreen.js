import React, { useContext, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Button,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
} from 'react-native'
import jwt_decode from "jwt-decode";
import { AuthContext } from '../context/authContext/authContext'
import generarQr from '../components/general/generarQr'

const DashboardScreen = (props) => {
    //console.log("props de dashboardScreen "+JSON.stringify(props))
    const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    const BECLuser = jwt_decode(authState.BECLToken.access)
    //console.log(JSON.stringify(authState))
    const [qr, setQr] = useState();

    const QrScreen = async () => {
        try {
            const data = {
                grupo: BECLuser.user.groups[0].id,
                token: authState.BECLToken.access,
            }
            await generarQr(data)
                .then(data => {
                    setQr(data.qrcode)
                    console.log("data de generar qr " + data)
                })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <ImageBackground
                style={styles.background}
                source={require('../img/Servicios.png')}
                resizeMode='cover'
            >

               {/* <SafeAreaView>
                    <Text>
                        Bienvenido {user.givenName} al dashboardScreen BECL
                    </Text>
                    <View>
                        <View>
                            <Button
                                title="Generar QR"
                                onPress={QrScreen}
                            />
                            <Button
                                style={styles.google}
                                title="Ir a QrScreen"
                            />
                            {qr ? <Text>{qr}</Text> : null}
                            

                        </View>
                    </View>
                </SafeAreaView>*/}
            </ImageBackground>

        </>
    )
}

export default DashboardScreen;


const styles = StyleSheet.create({
    google: {
        backgroundColor: '#420bbb',
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,

    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        
    },
});