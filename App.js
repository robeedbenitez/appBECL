
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigator/StackNavigator.js';
import { AuthProvider } from './src/context/authContext/authContext.js';

const App = () => {

  return (

    <NavigationContainer>
      <AppSate>
        <StackNavigator />
      </AppSate>
    </NavigationContainer>
  );
};
const AppSate = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
export default App;
