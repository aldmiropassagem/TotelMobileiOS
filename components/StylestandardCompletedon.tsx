import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type StylestandardCompletedonType = {
  search?: ImageSourcePropType;
  enterSearch?: string;

  /** Style props */
  stylestandardCompletedonPosition?: string;
  stylestandardCompletedonMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StylestandardCompletedon = ({
  search,
  enterSearch,
  stylestandardCompletedonPosition,
  stylestandardCompletedonMarginTop,
}: StylestandardCompletedonType) => {
  const stylestandardCompletedonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stylestandardCompletedonPosition),
      ...getStyleValue("marginTop", stylestandardCompletedonMarginTop),
    };
  }, [stylestandardCompletedonPosition, stylestandardCompletedonMarginTop]);

  return (
    <View
      style={[styles.stylestandardCompletedon, stylestandardCompletedonStyle]}
    >
      <View style={[styles.contentArea, styles.textHolderFlexBox]}>
        <Image style={styles.searchIcon} contentFit="cover" source={search} />
        <View style={[styles.textHolder, styles.textHolderFlexBox]}>
          <Text style={styles.enterSearch}>{enterSearch}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHolderFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  enterSearch: {
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  textHolder: {
    height: 20,
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_8xs,
    marginLeft: 12,
  },
  contentArea: {
    alignSelf: "stretch",
  },
  stylestandardCompletedon: {
    backgroundColor: Color.labelColorDarkSecondary,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default StylestandardCompletedon;
