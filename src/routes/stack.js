import { createStackNavigator } from '@react-navigation/stack';

import CreateAccount from '../pages/create-account/CreateAccount';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import Login from '../pages/login/Login';
import Main from '../pages/main';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CreateAccount"
        component={CreateAccount}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Main"
        component={Main}
      />
      {/* <Stack.Screen
        name="Nova vacina"
        component={CreateVaccine}
        options={{
          title: 'Nova vacina',
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle          
        }}
      /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#C1E7E3',
  },
  headerTintColor: '#419ED7',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'Averia Libre',
  },
});

export default StackNavigator;
