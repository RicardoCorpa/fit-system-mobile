import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Tela3({ navigation }) {
  return (
    <View>
      <Text>Essa e a Tela 3</Text>

      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
