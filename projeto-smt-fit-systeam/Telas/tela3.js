// import React from 'react';
// import { Text, View, Button } from 'react-native';

// export default function Tela3({ navigation }) {
//  return (
//    <View>
//      <Text>Essa e a Tela 3</Text>

//      <Button title="Home" onPress={() => navigation.navigate('Home')} />
//    </View>
//  );
// }
import React from 'react';
import { StyleSheet, View, Text, Pressable, Image, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";


const Tela3 = ({ navigation }) => {
  return (
    <View>
      <Text>Essa é a Tela 3</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};


const EntregaEFormaDePagamento = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.entregaEFormaDePagamento}>
      <LinearGradient
        style={styles.chickenIcon2}
        locations={[0, 1]}
        colors={["#5cc6ba", "rgba(255, 255, 255, 0)"]}
      />
      <View
        style={[styles.entregaEFormaDePagamentoChild, styles.entregaLayout]}
      />
      <View
        style={[styles.entregaEFormaDePagamentoItem, styles.entregaLayout]}
      />
      <View
        style={[styles.entregaEFormaDePagamentoInner, styles.entregaLayout]}
      />
      <View style={[styles.rectangleView, styles.entregaLayout]} />
      <Text style={[styles.cep, styles.cepTypo]}>CEP</Text>
      <Text style={[styles.nmero, styles.cepTypo]}>Número</Text>
      <Text style={[styles.rua, styles.cepTypo]}>Rua</Text>
      <Text style={[styles.bairro, styles.cepTypo]}>Bairro</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("SeleoFormaDePagamento1")}
      />
      <Text style={styles.confirmarEndereo}>Confirmar endereço</Text>
      <Pressable
        style={styles.zondiconscloseOutline}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/zondiconscloseoutline.png")}
        />
      </Pressable>
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </Pressable>
      <Image
        style={styles.logofitsy7Icon}
        contentFit="cover"
        source={require("../assets/logofitsy-8.png")}
      />
    </View>
  );
};


const Tela4 = ({ navigation }) => {
  return (
    <View>
      <Text>Essa é a Tela 4</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};


const Tela5 = ({ navigation }) => {
  return (
    <View>
      <Text>Essa é a Tela 5</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  entregaLayout: {
    height: 57,
    width: 310,
    backgroundColor: Color.colorWhite,
    left: 54,
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  cepTypo: {
    height: 39,
    width: 239,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chickenIcon2: {
    top: -12,
    left: -61,
    width: 512,
    height: 512,
    backgroundColor: "transparent",
    position: "absolute",
  },
  entregaEFormaDePagamentoChild: {
    top: 181,
  },
  entregaEFormaDePagamentoItem: {
    top: 281,
  },
  entregaEFormaDePagamentoInner: {
    top: 481,
  },
  rectangleView: {
    top: 381,
  },
  cep: {
    top: 190,
    left: 75,
    width: 239,
    textAlign: "left",
    color: Color.colorBlack,
  },
  nmero: {
    top: 490,
    left: 75,
    width: 239,
    textAlign: "left",
    color: Color.colorBlack,
  },
  rua: {
    top: 390,
    left: 75,
    width: 239,
    textAlign: "left",
    color: Color.colorBlack,
  },
  bairro: {
    top: 290,
    left: 76,
  },
  rectanglePressable: {
    top: 587,
    left: 109,
    backgroundColor: Color.colorSeagreen,
    width: 211,
    height: 96,
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  confirmarEndereo: {
    top: 599,
    left: 133,
    color: Color.colorWhite,
    textAlign: "center",
    width: 163,
    height: 45,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  zondiconscloseOutline: {
    left: 366,
    top: 16,
    width: 48,
    height: 48,
    position: "absolute",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  maskGroup: {
    left: "2.79%",
    top: "1.82%",
    right: "86.98%",
    bottom: "94.1%",
    width: "10.23%",
    height: "4.08%",
    position: "absolute",
  },
  logofitsy7Icon: {
    top: 657,
    left: 51,
    width: 329,
    height: 239,
    position: "absolute",
  },
  entregaEFormaDePagamento: {
    backgroundColor: Color.colorPalegoldenrod,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default EntregaEFormaDePagamento;


