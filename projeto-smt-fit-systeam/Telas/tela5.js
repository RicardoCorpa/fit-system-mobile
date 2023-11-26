// import React from 'react';
// import { Text, View, Button } from 'react-native';

// export default function Tela5({ navigation }) {
//  return (
//    <View>
//      <Text>Essa e a Tela 5</Text>

//      <Button title="Home" onPress={() => navigation.navigate('Home')} />
//    </View>
//  );
// }

import React from 'react';
import { StyleSheet, View, Text, Pressable, Image, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";


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


const SeleoFormaDePagamento1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.seleoFormaDePagamento}>
      <LinearGradient
        style={styles.chickenIcon3}
        locations={[0, 1]}
        colors={["#5cc6ba", "rgba(255, 255, 255, 0)"]}
      />
      <Pressable
        style={styles.chickenIcon2}
        onPress={() => navigation.navigate("Carto")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/9110880-chicken-icon-2.png")}
        />
      </Pressable>
      <Text style={[styles.formaDePagamento, styles.porMotivosDeTypo]}>
        Forma de pagamento
      </Text>
      <Image
        style={styles.seleoFormaDePagamentoChild}
        contentFit="cover"
        source={require("../assets/rectangle-92.png")}
      />
      <Pressable
        style={styles.paypalCreditCardDebitCard}
        onPress={() => navigation.navigate("Carto")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/184157-paypal-credit-card-debit-card-payment-icon-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.mastercardBankingCreditVisa}
        onPress={() => navigation.navigate("Carto")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/184095-mastercard-banking-credit-visa-debit-icon-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.pixIcon1}
        onPress={() => navigation.navigate("Carto")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/8666421-pix-icon-1.png")}
        />
      </Pressable>
      <Text style={[styles.porMotivosDe, styles.porMotivosDeTypo]}>
        Por motivos de segurança, não aceitamos pagamento em espécie.
      </Text>
      <View style={styles.seleoFormaDePagamentoItem} />
      <Pressable
        style={styles.zondiconscloseOutline}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/zondiconscloseoutline.png")}
        />
      </Pressable>
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </Pressable>
      <Image
        style={styles.logofitsy8Icon}
        contentFit="cover"
        source={require("../assets/logofitsy-81.png")}
      />
    </View>
  );
};


const Carto = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.carto, styles.iconLayout]}>
      <LinearGradient
        style={styles.chickenIcon2}
        locations={[0, 1]}
        colors={["#5cc6ba", "rgba(255, 255, 255, 0)"]}
      />
      <View style={[styles.cartoChild, styles.cartoLayout]} />
      <View style={[styles.cartoItem, styles.cartoLayout]} />
      <View style={[styles.cartoInner, styles.cartoLayout]} />
      <View style={[styles.rectangleView, styles.cartoLayout]} />
      <Text style={[styles.nmero, styles.cvcTypo]}>Numero</Text>
      <Text style={[styles.nomeNoCarto, styles.cvcTypo]}>Nome no cartao</Text>
      <Text style={[styles.validade, styles.cvcTypo]}>Validade</Text>
      <Text style={[styles.cvc, styles.cvcTypo]}>CVC</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-91.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("ProMax2Carrinho")}
      />
      <Text style={styles.confirmarPedido}>Confirmar pedido</Text>
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
      <Image
        style={styles.logofitsy8Icon}
        contentFit="cover"
        source={require("../assets/logofitsy-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  cartoLayout: {
    height: 57,
    width: 310,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    left: 54,
    position: "absolute",
  },
  cvcTypo: {
    height: 39,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  rectangleLayout: {
    width: 211,
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  chickenIcon2: {
    top: -12,
    left: -61,
    width: 512,
    height: 512,
    backgroundColor: "transparent",
    position: "absolute",
  },
  cartoChild: {
    top: 181,
  },
  cartoItem: {
    top: 281,
  },
  cartoInner: {
    top: 481,
  },
  rectangleView: {
    top: 381,
  },
  nmero: {
    top: 190,
    width: 239,
    height: 39,
    textAlign: "left",
    color: Color.colorBlack,
    left: 75,
  },
  nomeNoCarto: {
    top: 490,
    width: 263,
    height: 39,
    textAlign: "left",
    color: Color.colorBlack,
    left: 75,
  },
  validade: {
    top: 390,
    width: 239,
    height: 39,
    textAlign: "left",
    color: Color.colorBlack,
    left: 75,
  },
  cvc: {
    top: 290,
    left: 76,
    width: 239,
    height: 39,
    textAlign: "left",
    color: Color.colorBlack,
  },
  rectangleIcon: {
    top: 580,
    left: 72,
    height: 61,
  },
  rectanglePressable: {
    top: 587,
    left: 109,
    backgroundColor: Color.colorSeagreen,
    height: 96,
  },
  confirmarPedido: {
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
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  zondiconscloseOutline: {
    left: "85.12%",
    top: "1.29%",
    right: "3.72%",
    bottom: "93.56%",
    width: "11.16%",
    height: "5.15%",
    position: "absolute",
  },
  maskGroup: {
    left: "2.09%",
    top: "1.82%",
    right: "87.67%",
    bottom: "94.1%",
    width: "10.23%",
    height: "4.08%",
    position: "absolute",
  },
  logofitsy8Icon: {
    top: 644,
    left: 51,
    width: 329,
    height: 239,
    position: "absolute",
  },
  carto: {
    backgroundColor: Color.colorPalegoldenrod,
    flex: 1,
    height: 932,
  },
});

export default Carto;

