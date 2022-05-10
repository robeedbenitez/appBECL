import React,{useState,useEffect} from 'react';
import {
    Button,
    StyleSheet,
    View,
    Text,
    Alert,
} from 'react-native';


import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  
  


const GoogleButton = (props) => {

const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
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

    const signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ user: null }); // Remember to remove the user from your app's state as well
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
        <View >
            <Text >Google Authentication</Text>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress} 
            />
        </View>
        </>
    )
};
const styles = StyleSheet.create({
    button: {
        color:"white",
        borderRadius: 40,
    },
    view: {
        width: '100%',
    },
});

export default GoogleButton;
