
import React, {
  useContext
} from 'react'

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
import UserText from '../components/general/UserText'

function UserScreen() {
  const { authState } = useContext(AuthContext)
  const { user } = authState.googleToken
  const BECLuser = jwt_decode(authState.BECLToken.access)
  console.log(JSON.stringify(user))

  return (
    <>
      <ImageBackground
        source={require('../img/backgroundprofile.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <SafeAreaView
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <View style={[styles.photoContainer]}>
                <Image
                  style={styles.photo}
                  source={{
                    uri: user.photo
                  }}
                />
              </View>


              <View style={styles.info}>
                <UserText
                  iconName="fingerprint"
                  data={user.id}
                />
                <UserText
                  iconName="face"
                  data={user.name}
                />
                <UserText
                  iconName="portrait"
                  data='Cedula'
                />
                <UserText
                  iconName="email"
                  data={user.email}
                />
                <UserText
                  iconName="school"
                  data='Carrera'
                />
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
  info: {
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

  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }



})