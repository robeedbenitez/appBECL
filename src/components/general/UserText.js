import React from 'react'
import {
    Text,
    StyleSheet,
    View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserText = (props) => {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.icon}>
                <Icon
                    name={props.iconName}
                    size={30}
                    color='#A81F2B' />
            </Text>
            <Text style={styles.textInfo}>
                {props.data}
            </Text>
        </View>

    )
}

export default UserText

const styles = StyleSheet.create({

    textInfo: {
        fontSize: 20,
        width: '60%',
    },
    icon: {
        marginRight: 20,
    },
    viewContainer: {
        flexDirection: 'row',

    }
})