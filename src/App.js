import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {getCurrencyData} from './js/messari.js';

const App = () => {
  return (
      <>
        <Text>
          Crypto Tracker App
        </Text>
        <ScrollView>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
          <Button
            onPress={() => getCurrencyData("btc").then(a => console.log(a)).catch(e => console.log(e))}
            title="Bitcoin"
          ></Button>
        </ScrollView>
      </>
  );
};

export default App;
