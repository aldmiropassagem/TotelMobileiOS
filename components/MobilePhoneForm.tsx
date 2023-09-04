import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StylestandardCompletedoff from "./StylestandardCompletedoff";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MobilePhoneForm = () => {
  return (
    <View style={styles.phoneNumberParent}>
      <Text style={[styles.phoneNumber, styles.textTypo]}>Phone Number</Text>
      <View style={styles.buttonParent}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <View style={styles.flag}>
              <Image
                style={styles.flagChild}
                contentFit="cover"
                source={require("../assets/rectangle-3.png")}
              />
            </View>
            <View style={styles.textWrapper}>
              <Text style={[styles.text, styles.textTypo]}>(+1)</Text>
            </View>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
        </View>
        <StylestandardCompletedoff
          text="Enter your mobile phone "
          stylestandardCompletedoffPosition="unset"
          stylestandardCompletedoffFlex={1}
          stylestandardCompletedoffBorderRadius={12}
          stylestandardCompletedoffMarginLeft={12}
          stylestandardCompletedoffAlignSelf="unset"
          stylestandardCompletedoffMarginTop="unset"
          textHolderWidth="unset"
          textHolderAlignSelf="unset"
          textHolderAlignItems="center"
          textColor="rgba(60, 60, 67, 0.6)"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    letterSpacing: 0,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  phoneNumber: {
    fontSize: FontSize.defaultRegularSubheadline_size,
    lineHeight: 20,
    textAlign: "left",
  },
  flagChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xl,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  flag: {
    width: 28,
    height: 28,
  },
  text: {
    top: 0,
    left: 0,
    fontSize: FontSize.defaultBoldFootnote_size,
    lineHeight: 18,
    textAlign: "center",
    position: "absolute",
  },
  textWrapper: {
    width: 26,
    height: 18,
    marginLeft: 8,
  },
  vectorIcon: {
    width: 10,
    height: 5,
  },
  vectorWrapper: {
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_9xs,
    display: "none",
    marginLeft: 8,
  },
  button: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.labelColorDarkSecondary,
    padding: Padding.p_5xs,
    overflow: "hidden",
  },
  buttonParent: {
    width: 358,
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  phoneNumberParent: {
    alignSelf: "stretch",
    marginTop: 24,
  },
});

export default MobilePhoneForm;
