import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding, Color } from "../GlobalStyles";

type StylestandardCompletedon1Type = {
  eyePasswordShow?: ImageSourcePropType;

  /** Style props */
  stylestandardCompletedonPosition?: string;
  stylestandardCompletedonMarginTop?: number | string;
  stylestandardCompletedonPaddingVertical?: number | string;
  stylestandardCompletedonBorderRadius?: number;
  textHolderHeight?: number | string;
  textHolderAlignItems?: string;
  textHolderHeight1?: number | string;
  textHolderPaddingTop?: number | string;
  textHolderPaddingBottom?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StylestandardCompletedon1 = ({
  eyePasswordShow,
  stylestandardCompletedonPosition,
  stylestandardCompletedonMarginTop,
  stylestandardCompletedonPaddingVertical,
  stylestandardCompletedonBorderRadius,
  textHolderHeight,
  textHolderAlignItems,
  textHolderHeight1,
  textHolderPaddingTop,
  textHolderPaddingBottom,
}: StylestandardCompletedon1Type) => {
  const stylestandardCompletedon1Style = useMemo(() => {
    return {
      ...getStyleValue("position", stylestandardCompletedonPosition),
      ...getStyleValue("marginTop", stylestandardCompletedonMarginTop),
      ...getStyleValue(
        "paddingVertical",
        stylestandardCompletedonPaddingVertical
      ),
      ...getStyleValue("borderRadius", stylestandardCompletedonBorderRadius),
    };
  }, [
    stylestandardCompletedonPosition,
    stylestandardCompletedonMarginTop,
    stylestandardCompletedonPaddingVertical,
    stylestandardCompletedonBorderRadius,
  ]);

  const textHolder1Style = useMemo(() => {
    return {
      ...getStyleValue("height", textHolderHeight),
      ...getStyleValue("alignItems", textHolderAlignItems),
    };
  }, [textHolderHeight, textHolderAlignItems]);

  const textHolder2Style = useMemo(() => {
    return {
      ...getStyleValue("height", textHolderHeight1),
      ...getStyleValue("paddingTop", textHolderPaddingTop),
      ...getStyleValue("paddingBottom", textHolderPaddingBottom),
    };
  }, [textHolderHeight1, textHolderPaddingTop, textHolderPaddingBottom]);

  return (
    <View
      style={[styles.stylestandardCompletedon, stylestandardCompletedon1Style]}
    >
      <View style={[styles.textHolder, styles.textFlexBox, textHolder1Style]}>
        <View
          style={[styles.textHolder1, styles.textFlexBox, textHolder2Style]}
        >
          <Image
            style={styles.textLayout}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.textHolderItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.textHolderItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.textHolderItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.textHolderItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.textHolderItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.textHolderItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.textHolderItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
        <Image
          style={styles.eyePasswordShowIcon}
          contentFit="cover"
          source={eyePasswordShow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    flexDirection: "row",
    height: 20,
  },
  textLayout: {
    height: 10,
    width: 10,
  },
  textHolderItem: {
    marginLeft: 4,
  },
  textHolder1: {
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_8xs,
    alignItems: "center",
  },
  eyePasswordShowIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  textHolder: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  stylestandardCompletedon: {
    backgroundColor: Color.labelColorDarkSecondary,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default StylestandardCompletedon1;
