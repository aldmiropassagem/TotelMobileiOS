import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

type SectionCardType = {
  /** Style props */
  groupIconTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({ groupIconTop }: SectionCardType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupIconTop),
    };
  }, [groupIconTop]);

  return (
    <View
      style={[
        styles.rectangleParent,
        styles.groupChildPosition,
        groupViewStyle,
      ]}
    >
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View
        style={[styles.beautyFashionWomenConceptPParent, styles.beautyLayout]}
      >
        <Image
          style={[styles.beautyFashionWomenConceptPIcon, styles.beautyLayout]}
          contentFit="cover"
          source={require("../assets/beautyfashionwomenconceptportraitfeminineflirtycaucasianwomanhidingsecretaskingkeepsilentshushingwithsensualcoquettishsmilewearwhitedresspinkbackground-1.png")}
        />
        <View style={styles.mishellDeAlwisParent}>
          <Text style={styles.mishellDeAlwis}>Mishell De Alwis</Text>
          <Text style={[styles.bookingNo, styles.textTypo]}>
            Booking No : OGF123546
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>(4.5)</Text>
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-1171275250.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-1171275251.png")}
            />
            <Image
              style={[styles.groupIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-1171275252.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-1171275253.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-1171275254.png")}
            />
          </View>
        </View>
        <Image
          style={styles.groupChild3}
          contentFit="cover"
          source={require("../assets/group-1171275258.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 92,
    left: 0,
    top: 0,
    position: "absolute",
  },
  beautyLayout: {
    height: 60,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "500",
    fontSize: FontSize.regular1_size,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 18,
    height: 17,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.systemBackgroundLightPrimary,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: -4,
      height: -10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 351,
  },
  beautyFashionWomenConceptPIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    left: 0,
    top: 0,
  },
  mishellDeAlwis: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    width: 137,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 16,
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bookingNo: {
    top: 41,
    color: Color.gray_100,
    width: 157,
    left: 0,
  },
  text: {
    left: 103,
    color: Color.darkslategray_100,
    width: 30,
    top: 0,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 21,
  },
  groupIcon: {
    left: 41,
  },
  groupChild1: {
    left: 62,
  },
  groupChild2: {
    left: 82,
  },
  parent: {
    top: 20,
    width: 133,
    height: 17,
    left: 0,
    position: "absolute",
  },
  mishellDeAlwisParent: {
    top: 2,
    left: 79,
    height: 57,
    width: 157,
    position: "absolute",
  },
  groupChild3: {
    top: 12,
    left: 313,
    width: 40,
    height: 37,
    position: "absolute",
  },
  beautyFashionWomenConceptPParent: {
    top: 16,
    left: 17,
    width: 353,
  },
  rectangleParent: {
    width: 370,
  },
});

export default SectionCard;
