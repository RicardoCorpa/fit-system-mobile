import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Tela5({ navigation }) {
  return (
    <View>
      <Text>Essa e a Tela 5</Text>

      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
