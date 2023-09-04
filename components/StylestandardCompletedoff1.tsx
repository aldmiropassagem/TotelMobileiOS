import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

type StylestandardCompletedoff1Type = {
  enterAText?: string;

  /** Style props */
  stylestandardCompletedoffPosition?: string;
  stylestandardCompletedoffBorderRadius?: number | string;
  stylestandardCompletedoffMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StylestandardCompletedoff1 = ({
  enterAText,
  stylestandardCompletedoffPosition,
  stylestandardCompletedoffBorderRadius,
  stylestandardCompletedoffMarginTop,
}: StylestandardCompletedoff1Type) => {
  const stylestandardCompletedoff1Style = useMemo(() => {
    return {
      ...getStyleValue("position", stylestandardCompletedoffPosition),
      ...getStyleValue("borderRadius", stylestandardCompletedoffBorderRadius),
      ...getStyleValue("marginTop", stylestandardCompletedoffMarginTop),
    };
  }, [
    stylestandardCompletedoffPosition,
    stylestandardCompletedoffBorderRadius,
    stylestandardCompletedoffMarginTop,
  ]);

  return (
    <View
      style={[
        styles.stylestandardCompletedoff,
        stylestandardCompletedoff1Style,
      ]}
    >
      <View style={[styles.contentArea, styles.textHolderFlexBox]}>
        <View style={[styles.textHolder, styles.textHolderFlexBox]}>
          <Text style={styles.enterAText}>{enterAText}</Text>
        </View>
        <Image
          style={styles.dateRangeIcon}
          contentFit="cover"
          source={require("../assets/date-range.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHolderFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  enterAText: {
    fontSize: FontSize.defaultRegularSubheadline_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightSecondary,
    textAlign: "left",
  },
  textHolder: {
    height: 20,
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_8xs,
  },
  dateRangeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  contentArea: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  stylestandardCompletedoff: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.labelColorDarkSecondary,
    padding: Padding.p_base,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default StylestandardCompletedoff1;
