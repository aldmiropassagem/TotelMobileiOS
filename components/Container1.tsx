import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DarkModeFalseTypeDefault from "./DarkModeFalseTypeDefault";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type Container1Type = {
  iconName?: string;
};

const Container1 = ({ iconName }: Container1Type) => {
  return (
    <View style={styles.topnavigation}>
      <DarkModeFalseTypeDefault
        darkModeFalseTypeDefaultOverflow="unset"
        textColor="#000"
      />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevron-left.png")}
          />
          <Text style={styles.settings}>{iconName}</Text>
        </View>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/more-horiz.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  chevronLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  settings: {
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    marginLeft: 8,
  },
  frameParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    width: 390,
  },
  topnavigation: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.systemBackgroundLightPrimary,
    borderStyle: "solid",
    borderColor: "#f2f2f7",
    borderBottomWidth: 1,
    paddingBottom: Padding.p_5xs,
    overflow: "hidden",
    width: 390,
  },
});

export default Container1;
