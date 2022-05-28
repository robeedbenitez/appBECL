import React, { useContext } from 'react';
import {
    Button,
    StyleSheet,
} from 'react-native';
import {
    GoogleSignin,
    statusCodes,
    GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { AuthContext } from '../../context/authContext/authContext';
import ValidarUserBECL from './ValidarUserBECL';

const GoogleButton = ({ props }) => {
    const { 
        logIn, 
        setGoogleToken, 
        logOut,
        setBECLToken 
    } = useContext(AuthContext);

    const signIn = async () => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            //androidClientId: '557760474593-du8krnoga2bme4l6ac5sauniv6hps3i6.apps.googleusercontent.com',            
            webClientId: '557760474593-3cduoqecia7n1bbcf7mmfbivq60d8vcf.apps.googleusercontent.com'
            //webClientId: '557760474593-3cduoqecia7n1bbcf7mmfbivq60d8vcf.apps.googleusercontent.com'

        });
        try {
            await GoogleSignin.hasPlayServices();
            const userGoogle = await GoogleSignin.signIn();
            logIn()
            setGoogleToken(userGoogle)
            //console.log(userGoogle.idToken)           
            ValidarUserBECL(userGoogle.idToken)
            .then(res => {
                setBECLToken(res)
            })
            props.navigation.navigate('Tabs')

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                console.error(error);
            }
        }
    };

    const signOut = async () => {

        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            logOut()
            //props.navigation.navigate('LoginScreen')
            //setloggedIn({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Button
                style={styles.button}
                title={'Sign in with Google'}
                onPress={signIn}
            />

            <Button
                style={styles.button}
                title="Sign out"
                onPress={signOut}
            />
        </>
    )
};
const styles = StyleSheet.create({
    button: {
        color: "white",
        borderRadius: 40,
    },
    view: {
        width: '100%',
    },
});

export default GoogleButton;
