import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Ola pessoa essa pagina é a home</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Tela 1" onPress={() => navigation.navigate('Tela1')} />
      <Button title="Tela 2" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Tela 3" onPress={() => navigation.navigate('Tela3')} />
      <Button title="Tela 4" onPress={() => navigation.navigate('Tela4')} />
      <Button title="Tela 5" onPress={() => navigation.navigate('Tela5')} />
      <Button title="Tela 6" onPress={() => navigation.navigate('Tela6')} />
      <Button title="Tela 7" onPress={() => navigation.navigate('Tela7')} />
    </View>
  );
}
