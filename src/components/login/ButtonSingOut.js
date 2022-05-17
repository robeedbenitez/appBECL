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
    statusCodes,
} from '@react-native-google-signin/google-signin';

const ButtonSingOut = (props) => {
    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
        };
    return <>
    <Button
    title={props.title}
    margin={props.margin}
    onPress={signOut}

    />
    </>
};
export default ButtonSingOut;