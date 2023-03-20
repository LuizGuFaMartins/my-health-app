import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Login from '../pages/login';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
