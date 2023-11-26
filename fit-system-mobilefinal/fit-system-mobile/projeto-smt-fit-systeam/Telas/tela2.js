// import React from 'react';
// import { Text, View, Button } from 'react-native';

// export default function Tela2({ navigation }) {
//  return (
//    <View>
//      <Text>Essa e a Tela 2</Text>

//      <Button title="Home" onPress={() => navigation.navigate('Home')} />
//    </View>
//  );
// }
import React from 'react';
import { StyleSheet, View, Text, Pressable, Image, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";


const Tela2 = ({ navigation }) => {
  return (
    <View>
      <Text>Essa é a Tela 2</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};


const IPhone1415ProMax8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1415ProMax8}>
      <Pressable
        style={styles.zondiconscloseOutline}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/img/zondicons_close-outline.png")}
        />
      </Pressable>
      <View style={[styles.iphone1415ProMax8Child, styles.iphone1415Layout]} />
      <View
        style={[styles.iphone1415ProMax8Item, styles.rectangleViewPosition]}
      />
      <View style={[styles.iphone1415ProMax8Inner, styles.iphone1415Layout]} />
      <Text style={[styles.montarMarmita, styles.montarMarmitaTypo]}>
        Montar Marmita
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.iphone1415ProMax8Inner, styles.iphone1415Layout]} />
      <Text style={[styles.marmitasIndividuais, styles.montarMarmitaTypo]}>
        Marmitas individuais
      </Text>
      <View style={[styles.marmita2Back, styles.marmita2BackPosition]} />
      <Text style={[styles.r2390, styles.gTypo]}>R$23,90</Text>
      <Text style={[styles.r1690, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.frangoComLimo, styles.gTypo]}>
        Frango com limão siciliano com arroz de brócolis
      </Text>
      <View style={styles.iphone1415ProMax8Child2} />
      <Text style={[styles.adicionar, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Image
        style={styles.gridiconsaddOutline}
        contentFit="cover"
        source={require("../assets/img/gridicons_add-outline.png")}
      />
      <Text style={[styles.r1690, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.adicionar, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Text style={[styles.r1690, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.adicionar, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Text style={[styles.r16903, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.adicionar3, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Image
        style={styles.gridiconsaddOutline}
        contentFit="cover"
        source={require("../assets/img/gridicons_add-outline.png")}
      />
      <Image
        style={[styles.marmita1Icon, styles.marmita2BackPosition]}
        contentFit="cover"
        source={require("../assets/Marmita-1.png")}
      />
      <Text style={[styles.g, styles.gTypo]}>250g</Text>
      <Text style={[styles.r2390, styles.gTypo]}>R$23,90</Text>
      <Text style={[styles.r1690, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.frangoComLimo, styles.gTypo]}>
        Frango com limão siciliano com arroz de brócolis
      </Text>
      <Pressable
        style={styles.iphone1415ProMax8Child2}
        onPress={() => navigation.navigate("EntregaEFormaDePagamento")}
      />
      <Text style={[styles.adicionar, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Image
        style={styles.gridiconsaddOutline}
        contentFit="cover"
        source={require("../assets/img/gridicons_add-outline.png")}
      />
      <Text style={[styles.r1690, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.adicionar, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Text style={[styles.r1690, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.adicionar, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Text style={[styles.r16903, styles.r1690Position]}>R$16,90</Text>
      <Text style={[styles.adicionar3, styles.adicionarPosition]}>
        ADICIONAR
      </Text>
      <Image
        style={styles.gridiconsaddOutline}
        contentFit="cover"
        source={require("../assets/img/gridicons_add-outline.png")}
      />
      <Image
        style={[styles.marmita1Icon, styles.marmita2BackPosition]}
        contentFit="cover"
        source={require("../assets/Marmita-1.png")}
      />
      <Text style={[styles.g, styles.gTypo]}>250g</Text>
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/img/Mask group.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  rectangleViewPosition: {
    height: 92,
    top: 67,
    position: "absolute",
    backgroundColor: Color.colorPalegoldenrod,
  },
  montarMarmitaTypo: {
    width: 601,
    textAlign: "center",
    fontFamily: FontFamily.radleyRegular,
    color: Color.colorSeagreen,
    position: "absolute",
  },
  marmita2BackPosition: {
    width: 377,
    left: 25,
    position: "absolute",
  },
  gTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    letterSpacing: 0.7,
    fontSize: FontSize.size_lg,
    color: Color.colorSeagreen,
    position: "absolute",
  },
  r1690Position: {
    top: 695,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    letterSpacing: 0.7,
    fontSize: FontSize.size_lg,
    left: 38,
    position: "absolute",
  },
  adicionarPosition: {
    left: 160,
    top: 737,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    letterSpacing: 0.7,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  zondiconscloseOutline: {
    left: 357,
    top: 12,
    width: 45,
    height: 45,
    position: "absolute",
  },
  iphone1415ProMax8Child: {
    top: 79,
    left: 28,
    backgroundColor: Color.colorGainsboro,
    width: 374,
    height: 68,
  },
  iphone1415ProMax8Item: {
    left: -153,
    width: 716,
  },
  iphone1415ProMax8Inner: {
    left: 12,
    backgroundColor: Color.colorLightcoral,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen,
    borderWidth: 3,
    width: 402,
    height: 59,
    top: 84,
  },
  montarMarmita: {
    left: -90,
    fontSize: FontSize.size_11xl,
    height: 57,
    top: 84,
  },
  rectangleView: {
    left: -1,
    width: 423,
  },
  marmitasIndividuais: {
    top: 91,
    left: -95,
    fontSize: FontSize.size_13xl,
    height: 56,
  },
  marmita2Back: {
    top: 442,
    backgroundColor: Color.colorSnow,
    height: 332,
  },
  r2390: {
    top: 658,
    textDecoration: "line-through",
    left: 38,
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    letterSpacing: 0.7,
    fontSize: FontSize.size_lg,
  },
  r1690: {
    color: Color.colorBlack,
  },
  frangoComLimo: {
    top: 510,
    width: 196,
    left: 38,
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    letterSpacing: 0.7,
    fontSize: FontSize.size_lg,
  },
  iphone1415ProMax8Child2: {
    top: 730,
    left: 33,
    backgroundColor: Color.colorSeagreen,
    width: 360,
    height: 37,
    position: "absolute",
  },
  adicionar: {
    color: Color.colorBlack,
  },
  gridiconsaddOutline: {
    top: 734,
    left: 51,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  r16903: {
    color: Color.colorSeagreen,
    top: 695,
  },
  adicionar3: {
    color: Color.colorPalegoldenrod,
  },
  marmita1Icon: {
    top: 193,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 249,
  },
  g: {
    top: 701,
    left: 340,
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  maskGroup: {
    left: "44.19%",
    top: "85.19%",
    right: "45.58%",
    bottom: "10.73%",
    width: "10.23%",
    height: "4.08%",
    position: "absolute",
  },
  iphone1415ProMax8: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorPalegoldenrod,
  },
});

export default IPhone1415ProMax;

