import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, AddCurrencyScreen } from './js/screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Home"
            component = {HomeScreen}
            options = {{ title: 'Crypto Tracker App'}}
          />
          <Stack.Screen
            name = "AddCurrency"
            component = {AddCurrencyScreen}
            options = {{ title: 'Add a Cryptocurrency'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
