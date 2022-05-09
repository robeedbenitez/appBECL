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
    } from 'react-native-google-signin';

const GoogleButton = (props) => {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const {accessToken, idToken} = await GoogleSignin.signIn();
            setloggedIn(true);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Signin in progress');
            // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('PLAY_SERVICES_NOT_AVAILABLE');
            // play services not available or outdated
            } else {
            // some other error happened
            }
        }
        };
    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setloggedIn(false);
            setuserInfo([]);
        } catch (error) {
            console.error(error);
        }
    };
  
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            webClientId:
            '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
        }, []);

    return (
        <>
        <View style={styles.sectionContainer}>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn} />
        </View>
        <View style={styles.buttonContainer}>
            {!loggedIn && <Text>You are currently logged out</Text>}
            {loggedIn && (
                <Button
                    onPress={this.signOut}
                    title="LogOut"
                    color="red"></Button>
            )}
        </View></>
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
