// import React from 'react';
// import { Text, View, Button } from 'react-native';

// export default function Tela1({ navigation }) {
//  return (
//    <View>
//      <Text>Essa e a Tela 1</Text>

//     <Button title="Home" onPress={() => navigation.navigate('Home')} />
//    </View>
//  );
// }
import React from 'react';
import { StyleSheet, View, Pressable, Text, Image, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ProMax1TelaInicial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proMax1TelaInicial}>
      <View style={styles.proMax1TelaInicialChild} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/img/Vector.png")}
      />
      <Pressable
        style={styles.proMax1TelaInicialChild}
        onPress={() => navigation.navigate("ProMax3Login1")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/img/Vector (1).png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/img/Vector.png")}
      />
      <Pressable
        style={styles.r}
        onPress={() => navigation.navigate("IPhone1415ProMax1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/img/R.png")}
        />
      </Pressable>
      <View
        style={[
          styles.proMax1TelaInicialInner,
          styles.rectanglePressablePosition,
        ]}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.montarMarmita, styles.montarMarmitaLayout]}>
        Montar Marmita
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.marmitasIndividuais, styles.montarMarmitaLayout]}>
        Marmitas individuais
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/img/Rectangle 53.png")}
        />
      </Pressable>
    </View>
  );
};

const Tela2 = ({ navigation }) => {
  return (
    <View>
      <Text>Essa é a Tela 2</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "2.25%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePressablePosition: {
    height: 71,
    top: 430,
    position: "absolute",
    backgroundColor: Color.colorPalegoldenrod,
  },
  montarMarmitaLayout: {
    height: 44,
    width: 466,
    textAlign: "center",
    color: Color.colorSeagreen,
    fontFamily: FontFamily.radleyRegular,
    left: -13,
    position: "absolute",
  },
  proMax1TelaInicialChild: {
    top: 16,
    left: 333,
    backgroundColor: Color.colorGray_100,
    width: 31,
    height: 31,
    display: "none",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.47%",
    width: "5.12%",
    right: "16.05%",
    bottom: "95.28%",
    left: "78.84%",
  },
  vectorIcon1: {
    height: "2.68%",
    width: "5.81%",
    right: "26.74%",
    bottom: "95.06%",
    left: "67.44%",
  },
  icon: {
    borderRadius: Border.br_11xl,
    height: "100%",
    width: "100%",
  },
  r: {
    left: 1,
    top: 163,
    width: 429,
    height: 245,
    position: "absolute",
  },
  proMax1TelaInicialInner: {
    left: -62,
    width: 555,
  },
  rectangleView: {
    left: 66,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLightcoral,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen,
    borderWidth: 3,
    width: 312,
    height: 45,
    top: 443,
    position: "absolute",
  },
  montarMarmita: {
    fontSize: FontSize.size_11xl,
    top: 443,
  },
  rectanglePressable: {
    left: 56,
    width: 328,
  },
  marmitasIndividuais: {
    top: 450,
    fontSize: FontSize.size_5xl,
  },
  wrapper: {
    left: 9,
    top: 531,
    width: 421,
    height: 237,
    position: "absolute",
  },
  proMax1TelaInicial: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorPalegoldenrod,
    width: "100%",
  },
});

export { ProMax1TelaInicial, Tela2 };

