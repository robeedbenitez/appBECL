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
import styles from '../theme/styles.js';//importando el stylesheet
import SesionText from '../components/login/sesionText';
import GoogleButton from '../components/login/GoogleButton.js';



const Login = (props) => {
    const context = useContext(AuthContext);

    console.log(context)
    return (
        <ImageBackground
            style={styles.background}
            source={require('../img/fonini.png')}
        >
            <SafeAreaView style={styles.body}>
                <View style={[styles.viewLogo]}>
                    <Image
                        source={require('../img/logo.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={[styles.viewOptions]}>
                    <SesionText
                        text="Bienvenido"
                    />
                    <GoogleButton
                        props={props}
                    />
                    <View
                        style={styles.footer}
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
