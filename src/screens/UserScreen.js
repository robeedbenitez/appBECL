import React, {useContext} from 'react'
import {
  View,
  Text,
} from 'react-native'
import { AuthContext } from '../context/authContext/authContext'
function UserScreen() {
  const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    
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

        </Text>
      </View>
    </>
  )
}

export default UserScreen;