import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Telas/home';
import Tela1 from './Telas/tela1.js';
import Tela2 from './Telas/tela2.js';
import Tela3 from './Telas/tela3.js';
import Tela4 from './Telas/tela4.js';
import Tela5 from './Telas/tela5.js';
import Tela6 from './Telas/tela6.js';
import Tela7 from './Telas/tela7.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
        <Stack.Screen name="Tela6" component={Tela6} />
        <Stack.Screen name="Tela7" component={Tela7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
