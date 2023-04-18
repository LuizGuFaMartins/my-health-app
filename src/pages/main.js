import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerRoutes from '../routes/drawer'

const Main = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <DrawerRoutes />
    </NavigationContainer>
  );
};

export default Main;
