import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import DrawerComponent from '../components/drawer/DrawerComponent';
import Home from '../pages/home/Home';
import NextVaccine from '../pages/nextVaccine/NextVaccine';

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
        name="NextVaccine"
        component={NextVaccine}
        options={{
          title: 'Próximas vacinas',
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
