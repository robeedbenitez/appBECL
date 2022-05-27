import React, {useContext } from 'react';
import {
    Button,
    StyleSheet,
} from 'react-native';

import {
    GoogleSignin,
    statusCodes,
    GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {AuthContext} from '../../context/authContext/authContext'




const GoogleButton = ({ props }) => {
    const {logIn,setUser,user} = useContext(AuthContext);
    const signIn = async () => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            androidClientId: '557760474593-udunhvofgt4i46djq47q6j2u1k6ivpqa.apps.googleusercontent.com',
            webClientId: '557760474593-3cduoqecia7n1bbcf7mmfbivq60d8vcf.apps.googleusercontent.com'
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userGoogle = await GoogleSignin.signIn();
            setUser(userGoogle)
            logIn()
            props.navigation.navigate('Tabs')

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };


    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
            } else {
                // some other error
            }
        }
    };

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        this.setState({ isLoginScreenPresented: !isSignedIn });
    };

    const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
    };

    const signOut = async ({ props }) => {

        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            props.navigation.navigate('LoginScreen')
            //setloggedIn({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    const revokeAccess = async () => {
        try {
            await GoogleSignin.revokeAccess();
            console.log('deleted');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {!user ? 
            <Button 
                style={styles.button}
                title={'Sign in with Google'}
                onPress={signIn}
            /> 
            :
            <Button
                style={styles.button}
                title="Sign out"
                onPress={signOut}
            />
            }


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
