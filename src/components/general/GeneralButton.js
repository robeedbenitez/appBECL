import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import theme from '../../theme/theme';

const GeneralButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
        >
            <Text
                style={styles.textWhite}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default GeneralButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.secondaryColor.color,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        fontSize: 30,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWhite: {
        color: 'white',
    },
})