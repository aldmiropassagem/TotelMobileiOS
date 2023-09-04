import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

type StylestandardCompletedoff2Type = {
  text?: string;

  /** Style props */
  stylestandardCompletedoffPosition?: string;
  stylestandardCompletedoffBorderRadius?: number | string;
  stylestandardCompletedoffMarginLeft?: number | string;
  stylestandardCompletedoffAlignSelf?: string;
  stylestandardCompletedoffFlex?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StylestandardCompletedoff2 = ({
  text,
  stylestandardCompletedoffPosition,
  stylestandardCompletedoffBorderRadius,
  stylestandardCompletedoffMarginLeft,
  stylestandardCompletedoffAlignSelf,
  stylestandardCompletedoffFlex,
}: StylestandardCompletedoff2Type) => {
  const stylestandardCompletedoff2Style = useMemo(() => {
    return {
      ...getStyleValue("position", stylestandardCompletedoffPosition),
      ...getStyleValue("borderRadius", stylestandardCompletedoffBorderRadius),
      ...getStyleValue("marginLeft", stylestandardCompletedoffMarginLeft),
      ...getStyleValue("alignSelf", stylestandardCompletedoffAlignSelf),
      ...getStyleValue("flex", stylestandardCompletedoffFlex),
    };
  }, [
    stylestandardCompletedoffPosition,
    stylestandardCompletedoffBorderRadius,
    stylestandardCompletedoffMarginLeft,
    stylestandardCompletedoffAlignSelf,
    stylestandardCompletedoffFlex,
  ]);

  return (
    <View
      style={[
        styles.stylestandardCompletedoff,
        stylestandardCompletedoff2Style,
      ]}
    >
      <View style={styles.textHolder}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.defaultRegularSubheadline_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightSecondary,
    textAlign: "left",
  },
  textHolder: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
  },
  stylestandardCompletedoff: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.labelColorDarkSecondary,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
});

export default StylestandardCompletedoff2;
