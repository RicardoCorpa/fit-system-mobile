// import React from 'react';
// import { Text, View, Button } from 'react-native';

// export default function Tela4({ navigation }) {
//  return (
//    <View>
//      <Text>Essa e a Tela 4</Text>

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
          source={require("../assets/img/9110880_chicken_icon 2.png")}
        />
      </Pressable>
      <Text style={[styles.formaDePagamento, styles.porMotivosDeTypo]}>
        Forma de pagamento
      </Text>
      <Image
        style={styles.seleoFormaDePagamentoChild}
        contentFit="cover"
        source={require("../assets/img/Rectangle 53.png")}
      />
      <Pressable
        style={styles.paypalCreditCardDebitCard}
        onPress={() => navigation.navigate("Carto")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/img/184157_paypal_credit card_debit card_payment_icon 1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.mastercardBankingCreditVisa}
        onPress={() => navigation.navigate("Carto")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/img/184095_mastercard_banking_credit_visa_debit_icon 1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.pixIcon1}
        onPress={() => navigation.navigate("Carto")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/img/8666421_pix_icon 1.png")}
        />
      </Pressable>
      <Text style={[styles.porMotivosDe, styles.porMotivosDeTypo]}>
        Por motivos de seguranca, nao aceitamos pagamento em especie.
      </Text>
      <View style={styles.seleoFormaDePagamentoItem} />
      <Pressable
        style={styles.zondiconscloseOutline}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/img/zondicons_close-outline.png")}
        />
      </Pressable>
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("ProMax1TelaInicial")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/img/Mask group.png")}
        />
      </Pressable>
      <Image
        style={styles.logofitsy8Icon}
        contentFit="cover"
        source={require("../assets/logo_fit-system (1).png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  porMotivosDeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  chickenIcon3: {
    top: -12,
    left: -58,
    width: 512,
    height: 512,
    backgroundColor: "transparent",
    position: "absolute",
  },
  chickenIcon2: {
    left: 131,
    top: 244,
    width: 155,
    height: 155,
    position: "absolute",
  },
  formaDePagamento: {
    top: 159,
    left: 48,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 322,
    height: 39,
  },
  seleoFormaDePagamentoChild: {
    top: 580,
    left: 72,
    borderRadius: Border.br_16xl,
    width: 211,
    height: 61,
    position: "absolute",
  },
  paypalCreditCardDebitCard: {
    left: 128,
    top: 365,
    width: 174,
    height: 174,
    position: "absolute",
  },
  mastercardBankingCreditVisa: {
    left: 115,
    top: 466,
    width: 199,
    height: 199,
    position: "absolute",
  },
  pixIcon1: {
    left: 166,
    top: 641,
    width: 97,
    height: 97,
    position: "absolute",
  },
  porMotivosDe: {
    top: 846,
    left: 15,
    fontSize: FontSize.size_5xl,
    color: Color.colorRed,
    width: 399,
    height: 30,
  },
  seleoFormaDePagamentoItem: {
    top: 829,
    left: 0,
    borderStyle: "solid",
    borderColor: "#5cc6ba",
    borderTopWidth: 1,
    width: 431,
    height: 1,
    position: "absolute",
  },
  icon4: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  zondiconscloseOutline: {
    left: "85.12%",
    top: "1.72%",
    right: "3.72%",
    bottom: "93.13%",
    width: "11.16%",
    height: "5.15%",
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
  logofitsy8Icon: {
    top: 21,
    left: 113,
    width: 190,
    height: 157,
    position: "absolute",
  },
  seleoFormaDePagamento: {
    backgroundColor: Color.colorPalegoldenrod,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default SeleoFormaDePagamento1;


