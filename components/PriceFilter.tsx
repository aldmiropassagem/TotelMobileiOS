import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PriceFilter = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={styles.groupParent}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-1171275103.png")}
        />
        <Text style={styles.text}>$0</Text>
        <Text style={[styles.jan, styles.janLayout]}>Jan</Text>
        <Text style={[styles.jul, styles.janLayout]}>Jul</Text>
        <Text style={[styles.text1, styles.textLayout]}>$1000</Text>
        <Text style={[styles.text2, styles.textLayout]}>$2000</Text>
        <Text style={[styles.text3, styles.textLayout]}>$3000</Text>
        <Text style={[styles.text4, styles.textLayout]}>$4000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 238,
    width: 390,
    left: 0,
    position: "absolute",
  },
  janLayout: {
    width: 23,
    textAlign: "left",
    top: 177,
    height: 21,
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.regular1_size,
    position: "absolute",
  },
  textLayout: {
    width: 43,
    height: 21,
    textAlign: "right",
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.regular1_size,
    left: 306,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.ghostwhite_100,
    top: 0,
  },
  groupItem: {
    top: 14,
    left: 1,
    width: 297,
    height: 165,
    position: "absolute",
  },
  text: {
    top: 157,
    width: 20,
    height: 21,
    textAlign: "right",
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.regular1_size,
    left: 306,
    position: "absolute",
  },
  jan: {
    left: 0,
    width: 23,
    textAlign: "left",
    top: 177,
  },
  jul: {
    left: 163,
  },
  text1: {
    top: 118,
  },
  text2: {
    top: 79,
  },
  text3: {
    top: 39,
  },
  text4: {
    top: 0,
  },
  groupParent: {
    top: 26,
    left: 22,
    width: 349,
    height: 199,
    position: "absolute",
  },
  rectangleParent: {
    top: 142,
  },
});

export default PriceFilter;
