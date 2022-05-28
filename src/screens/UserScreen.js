import React, {useContext} from 'react'
import {
  View,
  Text,
} from 'react-native'
import { AuthContext } from '../context/authContext/authContext'
import jwt_decode from "jwt-decode";
function UserScreen() {
  const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    const BECLuser = jwt_decode(authState.BECLToken.access)
    console.log(JSON.stringify(BECLuser.user.groups))
  return (
    <>
      <Text> user Screen</Text>
      <View>
        <Text>
          nombre: {user.name}
        </Text>
        <Text>
          id: {user.id}
        </Text>
        <Text>
          email: {user.email}
        </Text>
        <Text>
          User: {BECLuser.user.id}
          user Groups: {BECLuser.user.groups[0].id}
          Groups Name: {BECLuser.user.groups[0].name}
          BECLUser: {JSON.stringify(BECLuser)}
        </Text>
      </View>
    </>
  )
}

export default UserScreen;