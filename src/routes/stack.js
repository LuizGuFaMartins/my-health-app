import { createStackNavigator } from '@react-navigation/stack';

import CreateAccount from '../pages/create-account/CreateAccount';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import Login from '../pages/login/Login';
import Main from '../pages/main';

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
    </Stack.Navigator>
  );
}

export default StackNavigator;
