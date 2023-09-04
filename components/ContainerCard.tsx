import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import SizeSmallIconiconChevron1 from "./SizeSmallIconiconChevron1";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

type ContainerCardType = {
  iconImageUrl?: string;
  buttonText?: ImageSourcePropType;
  contextIconText?: ImageSourcePropType;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerCard = ({
  iconImageUrl,
  buttonText,
  contextIconText,
  propMarginTop,
}: ContainerCardType) => {
  const uIlistdefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.uilistdefault, uIlistdefaultStyle]}>
      <Text style={styles.help}>{iconImageUrl}</Text>
      <Text style={styles.seeAll}>See All</Text>
      <Image
        style={styles.ic24bookIcon}
        contentFit="cover"
        source={buttonText}
      />
      <SizeSmallIconiconChevron1
        tune={require("../assets/help-outline.png")}
        sizeSmallIconiconChevronPosition="unset"
        sizeSmallIconiconChevronMarginLeft="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  help: {
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  seeAll: {
    fontSize: FontSize.textSMedium_size,
    lineHeight: 20,
    color: Color.labelBlack30,
    textAlign: "right",
    display: "none",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  ic24bookIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  uilistdefault: {
    width: 390,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ContainerCard;
