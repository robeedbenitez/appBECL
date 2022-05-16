import 
  React,
  {useState} 
from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput,
  Image,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';

const screenB = ({navigation}) => {
    return (
        <>
        <SafeAreaView>
            <View>
                <Text>pagina 2</Text>
                <Button
                title="ir a la screen A"
                onPress={() =>
                  navigation.navigate("screen A")
                }
                />
            </View>
        </SafeAreaView>
        </>
    );
};
export default screenB;