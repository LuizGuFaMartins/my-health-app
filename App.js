import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackRoutes from './src/routes/stack';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
