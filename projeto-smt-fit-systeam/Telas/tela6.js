// import React from 'react';
// import { Text, View, Button } from 'react-native';

// export default function Tela6({ navigation }) {
//  return (
//    <View>
//      <Text>Essa e a Tela 6</Text>

//      <Button title="Home" onPress={() => navigation.navigate('Home')} />
//    </View>
//  );
// }

import React from 'react';
import { StyleSheet, View, Text, Pressable, Image, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


const Tela6 = ({ navigation }) => {
  return (
    <View>
      <Text>Essa é a Tela 6</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};


const ProMax2Carrinho = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proMax2Carrinho}>
      <View style={[styles.proMax2CarrinhoChild, styles.childBg]} />
      <Text style={[styles.seuCarrinhoPossuiContainer, styles.totalClr]}>
        <Text style={styles.seuCarrinhoPossui}>{`Seu carrinho possui: `}</Text>
        <Text style={[styles.item, styles.itemTypo]}>1 Item</Text>
      </Text>
      <Image
        style={styles.fotoprint2Icon}
        contentFit="cover"
        source={require("../assets/fotoprint-2.png")}
      />
      <Text style={[styles.strogonoffDeFrango, styles.textTypo]}>
        strogonoff DE FRANGO, ARROZ E BATATA ASSADA.
      </Text>
      <View style={styles.proMax2CarrinhoItem} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <Image
        style={styles.materialSymbolscloseIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolsclose.png")}
      />
      <Text style={[styles.g, styles.gTypo]}>300g</Text>
      <Text style={[styles.r1690, styles.r1690Position]}>R$ 16,90</Text>
      <Text style={[styles.r2490, styles.r1690Position]}>R$24,90</Text>
      <View style={[styles.proMax2CarrinhoInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </View>
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.finalizarCompra, styles.finalizarTypo]}>
        Finalizar compra
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.totalPosition]}
        onPress={() => navigation.navigate("SeleoFormaDePagamento")}
      />
      <Text style={[styles.finalizarCompra1, styles.finalizarTypo]}>
        Finalizar compra
      </Text>
      <Text style={[styles.desconto, styles.totalTypo]}>desconto :</Text>
      <Text style={[styles.total, styles.totalTypo]}>total:</Text>
      <Text style={[styles.r0000, styles.r0000Typo]}>R$00,00</Text>
      <Text style={[styles.r16901, styles.r0000Typo]}>R$16,90</Text>
      <Pressable
        style={styles.zondiconscloseOutline}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/zondiconscloseoutline3.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  childBg: {
    backgroundColor: Color.colorPalegoldenrod,
    top: 0,
  },
  totalClr: {
    color: Color.colorSeagreen,
    textAlign: "left",
  },
  itemTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.colorSeagreen,
    position: "absolute",
  },
  vectorPosition: {
    height: "2.15%",
    width: "5.35%",
    bottom: "67.7%",
    top: "30.15%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  gTypo: {
    fontSize: FontSize.size_xs,
    top: 290,
  },
  r1690Position: {
    left: 278,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.colorSeagreen,
    position: "absolute",
  },
  groupChildLayout: {
    height: 138,
    width: 430,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorPalegoldenrod,
  },
  finalizarTypo: {
    fontFamily: FontFamily.radleyRegular,
    textTransform: "uppercase",
    textAlign: "left",
    position: "absolute",
  },
  totalPosition: {
    left: 15,
    position: "absolute",
  },
  totalTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  r0000Typo: {
    left: 316,
    textTransform: "uppercase",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorSeagreen,
    position: "absolute",
  },
  proMax2CarrinhoChild: {
    width: 427,
    height: 67,
    left: 0,
    backgroundColor: Color.colorPalegoldenrod,
    top: 0,
    position: "absolute",
  },
  seuCarrinhoPossui: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
  },
  item: {
    textTransform: "uppercase",
    fontSize: FontSize.size_xl,
  },
  seuCarrinhoPossuiContainer: {
    top: 67,
    left: 12,
    textAlign: "left",
    position: "absolute",
  },
  fotoprint2Icon: {
    left: 3,
    width: 213,
    height: 143,
    top: 162,
    position: "absolute",
  },
  strogonoffDeFrango: {
    left: 230,
    width: 186,
    height: 23,
    top: 162,
  },
  proMax2CarrinhoItem: {
    top: 310,
    left: -140,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen,
    borderTopWidth: 1,
    width: 568,
    height: 1,
    position: "absolute",
  },
  text: {
    top: 282,
    left: 393,
    width: 10,
    height: 28,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "93.95%",
    right: "0.7%",
  },
  vector1: {
    left: "85.12%",
    right: "9.53%",
  },
  materialSymbolscloseIcon: {
    top: 157,
    left: 389,
    width: 38,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  g: {
    left: 223,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: "#3f403f",
    textTransform: "uppercase",
    textAlign: "left",
    position: "absolute",
  },
  r1690: {
    fontSize: FontSize.size_xs,
    top: 290,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  r2490: {
    top: 271,
    fontSize: 13,
    textDecoration: "line-through",
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
  },
  groupChild: {
    backgroundColor: Color.colorPalegoldenrod,
    top: 0,
    width: 430,
  },
  proMax2CarrinhoInner: {
    top: 643,
  },
  rectangleView: {
    top: 855,
    left: 84,
    width: 232,
    height: 39,
    position: "absolute",
  },
  finalizarCompra: {
    top: 865,
    left: 121,
    fontSize: 16,
    color: Color.colorDimgray,
  },
  rectanglePressable: {
    top: 831,
    width: 399,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorPalegoldenrod,
    height: 67,
  },
  finalizarCompra1: {
    top: 845,
    left: 53,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 349,
    height: 20,
  },
  desconto: {
    top: 675,
    fontWeight: "600",
    left: 15,
    position: "absolute",
    textTransform: "uppercase",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorSeagreen,
  },
  total: {
    top: 740,
    left: 15,
    position: "absolute",
    textTransform: "uppercase",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorSeagreen,
  },
  r0000: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 675,
  },
  r16901: {
    top: 740,
    fontFamily: FontFamily.interRegular,
  },
  zondiconscloseOutline: {
    left: 363,
    top: 11,
    width: 45,
    height: 45,
    position: "absolute",
  },
  maskGroup: {
    left: "3.02%",
    top: "1.5%",
    right: "86.74%",
    bottom: "94.42%",
    width: "10.23%",
    height: "4.08%",
    position: "absolute",
  },
  proMax2Carrinho: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProMax2Carrinho

