import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

type ThemeLightTypeActiveStatType = {
  date?: string;
  rectangle1?: ImageSourcePropType;
  underline?: boolean;

  /** Style props */
  themeLightTypeActiveStatBackgroundColor?: string;
  themeLightTypeActiveStatFlex?: number;
  themeLightTypeActiveStatMarginLeft?: number | string;
  themeLightTypeActiveStatBorderRadius?: number | string;
  dateColor?: string;
  rectangleIconMarginLeft?: number | string;
  rectangleIconLeft?: number | string;
  rectangleIconWidth?: number | string;
  rectangleIconRight?: number | string;
  rectangleIconMaxWidth?: number | string;
  rectangleIconOverflow?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ThemeLightTypeActiveStat = ({
  date,
  rectangle1,
  underline = false,
  themeLightTypeActiveStatBackgroundColor,
  themeLightTypeActiveStatFlex,
  themeLightTypeActiveStatMarginLeft,
  themeLightTypeActiveStatBorderRadius,
  dateColor,
  rectangleIconMarginLeft,
  rectangleIconLeft,
  rectangleIconWidth,
  rectangleIconRight,
  rectangleIconMaxWidth,
  rectangleIconOverflow,
}: ThemeLightTypeActiveStatType) => {
  const themeLightTypeActiveStatStyle = useMemo(() => {
    return {
      ...getStyleValue(
        "backgroundColor",
        themeLightTypeActiveStatBackgroundColor
      ),
      ...getStyleValue("flex", themeLightTypeActiveStatFlex),
      ...getStyleValue("marginLeft", themeLightTypeActiveStatMarginLeft),
      ...getStyleValue("borderRadius", themeLightTypeActiveStatBorderRadius),
    };
  }, [
    themeLightTypeActiveStatBackgroundColor,
    themeLightTypeActiveStatFlex,
    themeLightTypeActiveStatMarginLeft,
    themeLightTypeActiveStatBorderRadius,
  ]);

  const dateStyle = useMemo(() => {
    return {
      ...getStyleValue("color", dateColor),
    };
  }, [dateColor]);

  const rectangleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", rectangleIconMarginLeft),
      ...getStyleValue("left", rectangleIconLeft),
      ...getStyleValue("width", rectangleIconWidth),
      ...getStyleValue("right", rectangleIconRight),
      ...getStyleValue("maxWidth", rectangleIconMaxWidth),
      ...getStyleValue("overflow", rectangleIconOverflow),
    };
  }, [
    rectangleIconMarginLeft,
    rectangleIconLeft,
    rectangleIconWidth,
    rectangleIconRight,
    rectangleIconMaxWidth,
    rectangleIconOverflow,
  ]);

  return (
    <View
      style={[styles.themelightTypeactiveStat, themeLightTypeActiveStatStyle]}
    >
      <Text style={[styles.date, dateStyle]}>{date}</Text>
      {underline && (
        <Image
          style={[styles.themelightTypeactiveStatChild, rectangleIconStyle]}
          contentFit="cover"
          source={rectangle1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    fontSize: FontSize.textSMedium_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.textSMedium,
    color: Color.gray700,
    textAlign: "center",
    zIndex: 0,
  },
  themelightTypeactiveStatChild: {
    position: "absolute",
    marginLeft: -8,
    bottom: 4,
    left: "50%",
    width: 16,
    height: 1,
    display: "none",
    zIndex: 1,
    borderRadius: Border.br_8xs,
  },
  themelightTypeactiveStat: {
    backgroundColor: Color.primary25,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    flex: 1,
  },
});

export default ThemeLightTypeActiveStat;
