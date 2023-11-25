import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Tela4({ navigation }) {
  return (
    <View>
      <Text>Essa e a Tela 4</Text>

      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
