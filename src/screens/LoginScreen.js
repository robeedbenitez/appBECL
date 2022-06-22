//import { NavigationContainer } from '@react-navigation/native';

import
React,
{useContext}
    from 'react';
import {
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    Alert,
} from 'react-native';
import {AuthContext} from '../context/authContext/authContext';
//import Login from './src/components/login/Login.js';
import theme from '../theme/theme.js';//importando el stylesheet
import SesionText from '../components/login/sesionText';
import GoogleButton from '../components/login/GoogleButton.js';



const Login = (props) => {
    const context = useContext(AuthContext);

    console.log(context)
    return (
        <ImageBackground
            style={theme.background}
            source={require('../img/fonini.png')}
        >
            <SafeAreaView style={theme.body}>
                <View style={[theme.viewLogo]}>
                    <Image
                        source={require('../img/logo.png')}
                        style={theme.logo}
                    />
                </View>
                <View style={[theme.viewOptions]}>
                    <SesionText
                        text="Bienvenido"
                    />
                    <GoogleButton
                        props={props}
                    />
                    <View
                        style={theme.footer}
                    >
                        <SesionText
                            text="Ayuda"
                        />
                        <SesionText
                            text="UFPS"
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};
export default Login;
