import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={[styles.groupParent, styles.groupPosition]}>
      <View style={styles.sihyunChaeParent}>
        <Text style={[styles.sihyunChae, styles.sihyunChaeLayout]}>
          Sihyun Chae
        </Text>
        <Text style={[styles.viewAndEdit, styles.sihyunChaeLayout]}>
          View and edit profile
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 53,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sihyunChaeLayout: {
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  sihyunChae: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    width: 97,
    top: 0,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
  },
  viewAndEdit: {
    top: 23,
    fontSize: FontSize.textSMedium_size,
    fontWeight: "500",
    color: Color.defaultSystemBlueLight,
    width: 137,
  },
  sihyunChaeParent: {
    top: 5,
    left: 62,
    height: 43,
    width: 137,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 53,
  },
  groupParent: {
    width: 199,
  },
});

export default FormContainer;
