import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackRoutes from './src/routes/stack';

const App = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default App;
