// import React from 'react';
// import { Text, View, Button } from 'react-native';

// export default function Tela7({ navigation }) {
//  return (
//    <View>
//      <Text>Essa e a Tela 7</Text>

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


const Tela7 = ({ navigation }) => {
  return (
    <View>
      <Text>Essa é a Tela 7</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};


const TelaInicial1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaInicial}>
      <Pressable
        style={styles.zondiconscloseOutline}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/zondiconscloseoutline.png")}
        />
      </Pressable>
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </Pressable>
      <View style={styles.telaInicialChild} />
      <Text style={[styles.acompanheOPedido, styles.entregadorJooClr]}>
        Acompanhe o pedido
      </Text>
      <Image
        style={[styles.telaInicialItem, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-80.png")}
      />
      <View style={[styles.telaInicialInner, styles.rectangleViewLayout]} />
      <Text style={[styles.entregadorJoo, styles.minTypo]}>
        Entregador Joao
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.min, styles.minTypo]}>10 min</Text>
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-92.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  entregadorJooClr: {
    color: Color.colorBlack,
    left: "11.63%",
    width: "74.88%",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_100,
    height: "8.26%",
    position: "absolute",
  },
  minTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    height: "4.18%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  zondiconscloseOutline: {
    left: "82.33%",
    top: "2.58%",
    bottom: "92.27%",
    width: "11.16%",
    height: "5.15%",
    right: "6.51%",
    position: "absolute",
  },
  maskGroup: {
    left: "6.74%",
    top: "3.11%",
    right: "83.02%",
    bottom: "92.81%",
    width: "10.23%",
    height: "4.08%",
    position: "absolute",
  },
  telaInicialChild: {
    top: "10.3%",
    bottom: "81.44%",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhitesmoke_100,
    height: "8.26%",
    left: "4.65%",
    width: "88.84%",
    right: "6.51%",
    position: "absolute",
  },
  acompanheOPedido: {
    top: "12.34%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    height: "4.18%",
    color: Color.colorBlack,
    left: "11.63%",
    width: "74.88%",
    position: "absolute",
  },
  telaInicialItem: {
    height: "42.06%",
    width: "79.3%",
    top: "21.89%",
    right: "11.16%",
    bottom: "36.05%",
    left: "9.53%",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  telaInicialInner: {
    top: "66.52%",
    bottom: "25.21%",
    left: "4.65%",
    width: "88.84%",
    borderRadius: Border.br_3xs,
    right: "6.51%",
  },
  entregadorJoo: {
    top: "68.56%",
    color: Color.colorBlack,
    left: "11.63%",
    width: "74.88%",
    textAlign: "center",
  },
  rectangleView: {
    width: "46.51%",
    top: "78.22%",
    right: "27.67%",
    bottom: "13.52%",
    left: "25.81%",
  },
  min: {
    width: "52.09%",
    top: "80.26%",
    left: "20.23%",
    color: Color.colorRed,
  },
  rectangleIcon: {
    height: "6.55%",
    width: "49.07%",
    top: "57.08%",
    right: "35.23%",
    bottom: "36.37%",
    left: "15.7%",
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  telaInicial: {
    backgroundColor: Color.colorPalegoldenrod,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaInicial;