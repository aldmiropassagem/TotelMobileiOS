import React, { useMemo } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border, Color, Padding, FontFamily } from "../GlobalStyles";

type RoomAvailabilityContainerType = {
  /** Style props */
  nightTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RoomAvailabilityContainer = ({
  nightTop,
}: RoomAvailabilityContainerType) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", nightTop),
    };
  }, [nightTop]);

  return (
    <View style={[styles.groupChildPosition, groupView1Style]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={[styles.frameParent, styles.frameLayout1]}>
        <ImageBackground
          style={[styles.frameWrapper, styles.frameLayout1]}
          resizeMode="cover"
          source={require("../assets/frame1171274929.png")}
        >
          <View style={styles.frameContainer}>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-61.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-62.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-62.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-62.png")}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.headlineParent}>
          <Text style={styles.headline}>Cerulean Tower Hotel</Text>
          <Text style={styles.roomsAvailable}>2 rooms available</Text>
          <Text style={[styles.night, styles.textTypo]}>75$ / Night</Text>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/group-1171275235.png")}
          />
          <View style={[styles.parent, styles.textLayout]}>
            <Text style={[styles.text, styles.textLayout]}>(4.5)</Text>
            <Image
              style={[styles.groupInner, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-11712752501.png")}
            />
            <Image
              style={[styles.groupIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-11712752511.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-11712752521.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-11712752531.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-11712752541.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 106,
    width: 350,
    left: "50%",
    marginLeft: -175,
    top: 0,
    position: "absolute",
  },
  frameLayout1: {
    height: 90,
    position: "absolute",
  },
  frameLayout: {
    width: 6,
    height: 6,
  },
  textTypo: {
    fontSize: FontSize.regular1_size,
    letterSpacing: 0,
    textAlign: "left",
    lineHeight: 16,
  },
  textLayout: {
    height: 15,
    position: "absolute",
  },
  groupChildLayout: {
    width: 17,
    height: 15,
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
  },
  frameItem: {
    marginLeft: 6,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 6,
  },
  frameWrapper: {
    borderRadius: Border.br_8xs,
    width: 109,
    padding: Padding.p_base,
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
    top: 0,
  },
  headline: {
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray700,
    width: 205,
    height: 13,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.textSMedium_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  roomsAvailable: {
    top: 21,
    fontFamily: FontFamily.textSMedium,
    color: Color.gray25,
    width: 203,
    fontWeight: "500",
    letterSpacing: 0,
    height: 13,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.textSMedium_size,
    left: 0,
    position: "absolute",
  },
  night: {
    top: 64,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorLightPrimary,
    width: 72,
    height: 11,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 56,
    left: 187,
    width: 24,
    height: 23,
    position: "absolute",
  },
  text: {
    left: 95,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.darkslategray_100,
    width: 31,
    fontSize: FontSize.regular1_size,
    letterSpacing: 0,
    textAlign: "left",
    lineHeight: 16,
    fontWeight: "500",
    top: 0,
  },
  groupInner: {
    left: 0,
  },
  groupIcon: {
    left: 19,
  },
  groupChild1: {
    left: 38,
  },
  groupChild2: {
    left: 57,
  },
  groupChild3: {
    left: 76,
  },
  parent: {
    top: 42,
    width: 126,
    left: 0,
  },
  headlineParent: {
    top: 6,
    left: 118,
    width: 211,
    height: 79,
    position: "absolute",
  },
  frameParent: {
    top: 8,
    left: 9,
    width: 329,
  },
});

export default RoomAvailabilityContainer;
