import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import CreateAccount from '../pages/create-account/CreateAccount';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Minhas Vacinas',
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Drawer.Navigator>
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
