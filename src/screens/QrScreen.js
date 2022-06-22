
import React from 'react'
import {
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native'
const QrScreen = (props) => {
    console.log("props de qrscreen " + props.route.params)
    const base64Image = props.route.params;

    return (
        <>
            <ImageBackground
                source={require('../img/qrbackground.png')}
            >
                <Image
                    source={{ uri: `data:image/jpeg;base64,${base64Image}` }}
                    style={styles.qr}
                />
                <Text>Qr screen</Text>
            </ImageBackground>
        </>
    )
}

export default QrScreen

const styles = StyleSheet.create({
    qr: {
        width: 200,
        height: 200,
    }
})