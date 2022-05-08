import React,{useState} from 'react';
import {
    Button,
    StyleSheet,
    View,
} from 'react-native';



const GoogleButton = (props) => {
    const [something,setSomething]=useState('Digite algo primero');

    const oP = () => {
        setSomething('hola');
    }
    return (
        <View style={styles.body}>
            <Button
            style={styles.button}
            title="Iniciar sesión con Google"
            onPress={oP}
        />

        </View>
        
        
        
    )
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
    },
    view: {
        width: '100%',
    },
});

export default GoogleButton;
