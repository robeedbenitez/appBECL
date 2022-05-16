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

const screenA = ({navigation}) => {
    return (
        <>
        <SafeAreaView>
            <View>
                <Text>pagina A</Text>
                <Button
                title="ir a la screen B"
                onPress={() =>
                  navigation.replace("screen B")
                }
                />
            </View>
        </SafeAreaView>
        </>
    );
};
export default screenA;