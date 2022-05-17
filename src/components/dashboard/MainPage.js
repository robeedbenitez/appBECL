import 
  React
from 'react';

import {
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';

const mainPages = ({route}) => {
  const {user}=route.params
  console.log(user)
    return (
        <>
        <SafeAreaView>
            <View>
                <Text>Nombre: {user.user.name}</Text>
                <Text>Email: {user.user.email}</Text>
                <Text>ID: {user.user.id}</Text>
                <Text> Url Photo: {user.user.photo}</Text>
                <Text> Id Token: {user.idToken}</Text>

            </View>
        </SafeAreaView>
        </>
    );
};
export default mainPages;