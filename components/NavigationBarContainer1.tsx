import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DarkModeFalseTypeDefault from "./DarkModeFalseTypeDefault";
import { Border, Color, Padding } from "../GlobalStyles";

const NavigationBarContainer1 = () => {
  return (
    <View style={styles.topnavigation}>
      <DarkModeFalseTypeDefault
        darkModeFalseTypeDefaultOverflow="unset"
        textColor="#000"
      />
      <View style={styles.view}>
        <View style={styles.button}>
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevron-left.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chevronLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemBackgroundLightSecondary,
    flexDirection: "row",
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "center",
  },
  topnavigation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
});

export default NavigationBarContainer1;
