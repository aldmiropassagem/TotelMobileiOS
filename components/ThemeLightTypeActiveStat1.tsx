import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

type ThemeLightTypeActiveStat1Type = {
  subtract?: ImageSourcePropType;
  rectangle1?: ImageSourcePropType;
  date?: string;
  underline?: boolean;

  /** Style props */
  themeLightTypeActiveStatBorderRadius?: number | string;
  themeLightTypeActiveStatMarginLeft?: number | string;
  subtractIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ThemeLightTypeActiveStat1 = ({
  subtract,
  rectangle1,
  date,
  underline = false,
  themeLightTypeActiveStatBorderRadius,
  themeLightTypeActiveStatMarginLeft,
  subtractIconLeft,
}: ThemeLightTypeActiveStat1Type) => {
  const themeLightTypeActiveStat1Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", themeLightTypeActiveStatBorderRadius),
      ...getStyleValue("marginLeft", themeLightTypeActiveStatMarginLeft),
    };
  }, [
    themeLightTypeActiveStatBorderRadius,
    themeLightTypeActiveStatMarginLeft,
  ]);

  const subtractIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", subtractIconLeft),
    };
  }, [subtractIconLeft]);

  return (
    <View
      style={[styles.themelightTypeactiveStat, themeLightTypeActiveStat1Style]}
    >
      <Image
        style={[styles.subtractIcon, subtractIconStyle]}
        contentFit="cover"
        source={subtract}
      />
      {underline && (
        <Image
          style={styles.themelightTypeactiveStatChild}
          contentFit="cover"
          source={rectangle1}
        />
      )}
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtractIcon: {
    top: 0,
    left: 0,
    width: 54,
    zIndex: 0,
    position: "absolute",
    height: 36,
  },
  themelightTypeactiveStatChild: {
    right: 10,
    bottom: 4,
    left: 10,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    display: "none",
    zIndex: 1,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  date: {
    fontSize: FontSize.textSMedium_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.textSMedium,
    color: Color.gray700,
    textAlign: "center",
    zIndex: 2,
  },
  themelightTypeactiveStat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    borderRadius: Border.br_8xs,
    flex: 1,
  },
});

export default ThemeLightTypeActiveStat1;
