import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type SizeSmallIconiconChevronType = {
  text?: string;

  /** Style props */
  sizeSmallIconiconChevronPosition?: string;
  sizeSmallIconiconChevronBackgroundColor?: string;
  sizeSmallIconiconChevronPaddingHorizontal?: number | string;
  sizeSmallIconiconChevronPaddingVertical?: number | string;
  sizeSmallIconiconChevronAlignSelf?: string;
  sizeSmallIconiconChevronOpacity?: number;
  sizeSmallIconiconChevronBorderStyle?: string;
  sizeSmallIconiconChevronBorderColor?: string;
  sizeSmallIconiconChevronBorderWidth?: number;
  sizeSmallIconiconChevronMarginLeft?: number | string;
  sizeSmallIconiconChevronOverflow?: string;
  sizeSmallIconiconChevronMarginTop?: number | string;
  sizeSmallIconiconChevronBorderRadius?: number | string;
  textFontSize?: number;
  textLineHeight?: number;
  textColor?: string;

  /** Action props */
  onButtonPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizeSmallIconiconChevron = ({
  text,
  sizeSmallIconiconChevronPosition,
  sizeSmallIconiconChevronBackgroundColor,
  sizeSmallIconiconChevronPaddingHorizontal,
  sizeSmallIconiconChevronPaddingVertical,
  sizeSmallIconiconChevronAlignSelf,
  sizeSmallIconiconChevronOpacity,
  sizeSmallIconiconChevronBorderStyle,
  sizeSmallIconiconChevronBorderColor,
  sizeSmallIconiconChevronBorderWidth,
  sizeSmallIconiconChevronMarginLeft,
  sizeSmallIconiconChevronOverflow,
  sizeSmallIconiconChevronMarginTop,
  sizeSmallIconiconChevronBorderRadius,
  textFontSize,
  textLineHeight,
  textColor,
  onButtonPress,
}: SizeSmallIconiconChevronType) => {
  const sizeSmallIconiconChevronStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sizeSmallIconiconChevronPosition),
      ...getStyleValue(
        "backgroundColor",
        sizeSmallIconiconChevronBackgroundColor
      ),
      ...getStyleValue(
        "paddingHorizontal",
        sizeSmallIconiconChevronPaddingHorizontal
      ),
      ...getStyleValue(
        "paddingVertical",
        sizeSmallIconiconChevronPaddingVertical
      ),
      ...getStyleValue("alignSelf", sizeSmallIconiconChevronAlignSelf),
      ...getStyleValue("opacity", sizeSmallIconiconChevronOpacity),
      ...getStyleValue("borderStyle", sizeSmallIconiconChevronBorderStyle),
      ...getStyleValue("borderColor", sizeSmallIconiconChevronBorderColor),
      ...getStyleValue("borderWidth", sizeSmallIconiconChevronBorderWidth),
      ...getStyleValue("marginLeft", sizeSmallIconiconChevronMarginLeft),
      ...getStyleValue("overflow", sizeSmallIconiconChevronOverflow),
      ...getStyleValue("marginTop", sizeSmallIconiconChevronMarginTop),
      ...getStyleValue("borderRadius", sizeSmallIconiconChevronBorderRadius),
    };
  }, [
    sizeSmallIconiconChevronPosition,
    sizeSmallIconiconChevronBackgroundColor,
    sizeSmallIconiconChevronPaddingHorizontal,
    sizeSmallIconiconChevronPaddingVertical,
    sizeSmallIconiconChevronAlignSelf,
    sizeSmallIconiconChevronOpacity,
    sizeSmallIconiconChevronBorderStyle,
    sizeSmallIconiconChevronBorderColor,
    sizeSmallIconiconChevronBorderWidth,
    sizeSmallIconiconChevronMarginLeft,
    sizeSmallIconiconChevronOverflow,
    sizeSmallIconiconChevronMarginTop,
    sizeSmallIconiconChevronBorderRadius,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
      ...getStyleValue("color", textColor),
    };
  }, [textFontSize, textLineHeight, textColor]);

  return (
    <View
      style={[
        styles.sizesmallIconiconChevron,
        styles.buttonContentFlexBox,
        sizeSmallIconiconChevronStyle,
      ]}
      onPress={onButtonPress}
    >
      <View style={styles.buttonContentFlexBox}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.defaultBoldFootnote_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
  },
  sizesmallIconiconChevron: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemBackgroundLightSecondary,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
  },
});

export default SizeSmallIconiconChevron;
