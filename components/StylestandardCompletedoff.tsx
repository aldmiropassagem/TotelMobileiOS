import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type StylestandardCompletedoffType = {
  text?: string;

  /** Style props */
  stylestandardCompletedoffPosition?: string;
  stylestandardCompletedoffFlex?: number;
  stylestandardCompletedoffBorderRadius?: number;
  stylestandardCompletedoffMarginLeft?: number | string;
  stylestandardCompletedoffAlignSelf?: string;
  stylestandardCompletedoffMarginTop?: number | string;
  textHolderWidth?: number | string;
  textHolderAlignSelf?: string;
  textHolderAlignItems?: string;
  textFlex?: number | string;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StylestandardCompletedoff = ({
  text,
  stylestandardCompletedoffPosition,
  stylestandardCompletedoffFlex,
  stylestandardCompletedoffBorderRadius,
  stylestandardCompletedoffMarginLeft,
  stylestandardCompletedoffAlignSelf,
  stylestandardCompletedoffMarginTop,
  textHolderWidth,
  textHolderAlignSelf,
  textHolderAlignItems,
  textFlex,
  textColor,
}: StylestandardCompletedoffType) => {
  const stylestandardCompletedoffStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stylestandardCompletedoffPosition),
      ...getStyleValue("flex", stylestandardCompletedoffFlex),
      ...getStyleValue("borderRadius", stylestandardCompletedoffBorderRadius),
      ...getStyleValue("marginLeft", stylestandardCompletedoffMarginLeft),
      ...getStyleValue("alignSelf", stylestandardCompletedoffAlignSelf),
      ...getStyleValue("marginTop", stylestandardCompletedoffMarginTop),
    };
  }, [
    stylestandardCompletedoffPosition,
    stylestandardCompletedoffFlex,
    stylestandardCompletedoffBorderRadius,
    stylestandardCompletedoffMarginLeft,
    stylestandardCompletedoffAlignSelf,
    stylestandardCompletedoffMarginTop,
  ]);

  const textHolderStyle = useMemo(() => {
    return {
      ...getStyleValue("width", textHolderWidth),
      ...getStyleValue("alignSelf", textHolderAlignSelf),
      ...getStyleValue("alignItems", textHolderAlignItems),
    };
  }, [textHolderWidth, textHolderAlignSelf, textHolderAlignItems]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("flex", textFlex),
      ...getStyleValue("color", textColor),
    };
  }, [textFlex, textColor]);

  return (
    <View
      style={[styles.stylestandardCompletedoff, stylestandardCompletedoffStyle]}
    >
      <View style={[styles.textHolder, textHolderStyle]}>
        <Text style={[styles.text, text1Style]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightSecondary,
    textAlign: "left",
  },
  textHolder: {
    width: 336,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
  },
  stylestandardCompletedoff: {
    backgroundColor: Color.labelColorDarkSecondary,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
  },
});

export default StylestandardCompletedoff;
