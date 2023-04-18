import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import CreateAccount from '../pages/create-account/CreateAccount';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import CreateVaccine from '../pages/create-vaccine/CreateVaccine';
import DrawerComponent from '../components/drawer/DrawerComponent';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerComponent {...props} />}>
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
      <Drawer.Screen
        name="Nova vacina"
        component={CreateVaccine}
        options={{
          title: 'Nova vacina',
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
          drawerLabel: () => null,
          title: undefined,
          drawerIcon: () => null,
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
