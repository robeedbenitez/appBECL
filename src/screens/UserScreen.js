
import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native'

import { AuthContext } from '../context/authContext/authContext'
import jwt_decode from "jwt-decode";
import style from '../theme/styles';





function UserScreen() {
  const { authState } = useContext(AuthContext)
  const { user } = authState.googleToken
  const BECLuser = jwt_decode(authState.BECLToken.access)
  console.log(JSON.stringify(user))
  return (
    <>
      <ImageBackground
        source={require('../img/backgroundprofile.png')}
        style={styles.background}
      >
        <SafeAreaView
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <View style={styles.photoContainer}>
                <Text>
                  foto
                </Text>
              <Image
              
                source={{
                  uri: user.photo,
                }}
              />
              {console.log(user.photo)}
              </View>
              
              
              <View style={styles.info}>
                <Text style={styles.textInfo}>
                  {user.id}
                </Text>
                <Text style={styles.textInfo}>
                  {user.name}
                </Text>
                <Text style={styles.textInfo}>
                  Cedula
                </Text>
                <Text style={styles.textInfo}>
                  {user.email}
                </Text>
                <Text style={styles.textInfo}>
                  Carrera
                </Text>
              </View>

            </View>
            <View style={styles.buttonsConstainer}>
              <TouchableOpacity
                style={styles.button}
              >
                <Text
                  style={styles.textWhite}>
                  Historial
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
              >
                <Text
                  style={styles.textWhite}>
                  Mis solicitudes
                </Text>
              </TouchableOpacity>


            </View>

          </View>
        </SafeAreaView>

      </ImageBackground>

    </>
  )
}

export default UserScreen;
//------------------------- Style Sheet --------------------------------- 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 5,
    //backgroundColor: '#Fdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info:{
    marginLeft: 50,
    justifyContent: 'space-around',
    
    width: '80%',
    height: '60%',
    //backgroundColor: '#Fee',
  },
  buttonsConstainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'red'
  },
  textInfo: {
    fontSize: 20,
  },
  button: {
    backgroundColor: style.secondaryColor.color,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 30,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textWhite: {
    color: 'white',
  },
  photoContainer: {
    //backgroundColor: 'red',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    
  }



})