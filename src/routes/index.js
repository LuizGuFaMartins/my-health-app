import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Home from '../pages/home';
import Login from '../pages/login';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Minhas Vacinas',
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
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
