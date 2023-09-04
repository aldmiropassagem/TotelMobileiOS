import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

type SizeSmallIconiconChevron1Type = {
  tune?: ImageSourcePropType;

  /** Style props */
  sizeSmallIconiconChevronPosition?: string;
  sizeSmallIconiconChevronMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizeSmallIconiconChevron1 = ({
  tune,
  sizeSmallIconiconChevronPosition,
  sizeSmallIconiconChevronMarginLeft,
}: SizeSmallIconiconChevron1Type) => {
  const sizeSmallIconiconChevron1Style = useMemo(() => {
    return {
      ...getStyleValue("position", sizeSmallIconiconChevronPosition),
      ...getStyleValue("marginLeft", sizeSmallIconiconChevronMarginLeft),
    };
  }, [sizeSmallIconiconChevronPosition, sizeSmallIconiconChevronMarginLeft]);

  return (
    <View
      style={[styles.sizesmallIconiconChevron, sizeSmallIconiconChevron1Style]}
    >
      <Image style={styles.tuneIcon} contentFit="cover" source={tune} />
    </View>
  );
};

const styles = StyleSheet.create({
  tuneIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  sizesmallIconiconChevron: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemBackgroundLightSecondary,
    flexDirection: "row",
    padding: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SizeSmallIconiconChevron1;
