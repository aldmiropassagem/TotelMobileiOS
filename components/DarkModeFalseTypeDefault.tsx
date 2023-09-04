import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Border } from "../GlobalStyles";

type DarkModeFalseTypeDefaultType = {
  /** Style props */
  darkModeFalseTypeDefaultOverflow?: string;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalseTypeDefault = ({
  darkModeFalseTypeDefaultOverflow,
  textColor,
}: DarkModeFalseTypeDefaultType) => {
  const darkModeFalseTypeDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", darkModeFalseTypeDefaultOverflow),
    };
  }, [darkModeFalseTypeDefaultOverflow]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View
      style={[styles.darkModefalseTypedefault, darkModeFalseTypeDefaultStyle]}
    >
      <Image
        style={[styles.notchIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notch.png")}
      />
      <View style={[styles.leftSideParent, styles.leftLayout]}>
        <View style={[styles.leftSide, styles.textLayout]}>
          <View style={[styles.statusbarTime, styles.textLayout]}>
            <Text style={[styles.text, styles.textLayout, text2Style]}>
              9:41
            </Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftLayout: {
    height: 21,
    left: "50%",
  },
  textLayout: {
    width: 54,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    width: 164,
    height: 32,
    top: 0,
  },
  text: {
    top: 1,
    left: 0,
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
    color: "#010101",
    textAlign: "center",
    height: 20,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    height: 21,
    left: "50%",
    top: 0,
  },
  leftSide: {
    height: 21,
    left: "50%",
    marginLeft: -179.7,
    top: 0,
  },
  rightSideIcon: {
    marginLeft: 102.3,
    top: 4,
    width: 77,
    height: 13,
  },
  leftSideParent: {
    top: 14,
    width: 359,
    marginLeft: -179.7,
    height: 21,
    position: "absolute",
  },
  darkModefalseTypedefault: {
    height: 47,
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default DarkModeFalseTypeDefault;
