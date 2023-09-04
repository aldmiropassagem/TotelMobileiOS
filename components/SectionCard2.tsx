import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SectionCard2 = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
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
          <Text style={[styles.bookingNo, styles.textTypo2]}>
            Booking No : OGF123546
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo2]}>(4.5)</Text>
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
          source={require("../assets/group-11712752581.png")}
        />
      </View>
      <Text style={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla ligula in diam aliquet feugiat. Cras eu aliquet dui. Proin
        luctus vestibulum lorem ac venenatis.
      </Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild4, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275265.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>452</Text>
      </View>
      <View style={[styles.groupContainer, styles.dayAgoPosition]}>
        <Image
          style={[styles.groupChild5, styles.text2Layout]}
          contentFit="cover"
          source={require("../assets/group-1171275266.png")}
        />
        <Text style={[styles.text2, styles.text2Layout]}>98</Text>
      </View>
      <Text style={[styles.dayAgo, styles.dayAgoPosition]}>1 day ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 200,
    left: 0,
    position: "absolute",
  },
  beautyLayout: {
    height: 60,
    position: "absolute",
  },
  textTypo2: {
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
  groupLayout: {
    height: 18,
    position: "absolute",
  },
  textTypo: {
    color: Color.darkgray,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 16,
    letterSpacing: 0,
  },
  dayAgoPosition: {
    top: 171,
    position: "absolute",
  },
  text2Layout: {
    width: 15,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.systemBackgroundLightPrimary,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 351,
    top: 0,
  },
  beautyFashionWomenConceptPIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    top: 0,
    left: 0,
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
    top: 0,
    left: 0,
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
    width: 353,
    left: 17,
  },
  loremIpsumDolor: {
    top: 94,
    color: Color.dimgray_100,
    textAlign: "justify",
    width: 316,
    fontSize: FontSize.regular1_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 16,
    letterSpacing: 0,
    left: 17,
    position: "absolute",
  },
  groupChild4: {
    width: 20,
    top: 0,
    left: 0,
  },
  text1: {
    left: 25,
    width: 22,
    fontWeight: "700",
    color: Color.darkgray,
    fontSize: FontSize.size_3xs,
    top: 1,
    position: "absolute",
  },
  groupParent: {
    top: 170,
    width: 47,
    left: 17,
  },
  groupChild5: {
    height: 14,
    top: 1,
    left: 0,
  },
  text2: {
    left: 19,
    color: Color.darkgray,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 16,
    letterSpacing: 0,
    fontWeight: "700",
    top: 0,
  },
  groupContainer: {
    left: 100,
    width: 35,
    height: 16,
  },
  dayAgo: {
    left: 285,
    width: 49,
    color: Color.darkgray,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 16,
    letterSpacing: 0,
    top: 171,
    fontWeight: "500",
  },
  rectangleParent: {
    top: 108,
    width: 370,
  },
});

export default SectionCard2;
