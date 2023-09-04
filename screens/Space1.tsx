import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import RoomAvailabilityContainer from "../components/RoomAvailabilityContainer";
import TopNavigationContainer from "../components/TopNavigationContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Space1 = () => {
  return (
    <View style={[styles.space1, styles.space1Bg]}>
      <View style={styles.space1Inner}>
        <View style={styles.frameWrapper}>
          <View style={[styles.spaceWrapper, styles.tabBarFlexBox]}>
            <Text style={styles.space}>Space</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.tabBarLayout]}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={styles.groupPosition}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={[styles.listings, styles.claimsTypo]}>Listings</Text>
          </View>
          <Text style={[styles.claims, styles.claimsTypo]}>Claims</Text>
        </View>
        <View style={styles.groupContainer}>
          <RoomAvailabilityContainer />
          <RoomAvailabilityContainer nightTop={122} />
          <RoomAvailabilityContainer nightTop={244} />
          <RoomAvailabilityContainer nightTop={366} />
          <RoomAvailabilityContainer nightTop={488} />
        </View>
      </View>
      <TopNavigationContainer />
      <View style={[styles.tabBar, styles.tabBarFlexBox]}>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/confirmation-number.png")}
          />
        </View>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/notifications.png")}
          />
        </View>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/account-circle.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  space1Bg: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    overflow: "hidden",
  },
  tabBarFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  tabBarLayout: {
    width: 390,
    left: 0,
  },
  groupChildPosition: {
    height: 44,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 195,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
  },
  claimsTypo: {
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 8,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  space: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.3,
    lineHeight: 40,
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorLightPrimary,
    width: 308,
    textAlign: "left",
    fontWeight: "600",
  },
  spaceWrapper: {
    top: 20,
    left: 20,
    width: 311,
    paddingRight: Padding.p_406xl,
  },
  frameWrapper: {
    top: 0,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  space1Inner: {
    top: 47,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.ghostwhite_200,
  },
  groupItem: {
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    backgroundColor: Color.lightsteelblue,
  },
  listings: {
    marginLeft: -31.5,
    color: Color.defaultSystemBlueLight,
    width: 64,
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 8,
  },
  claims: {
    marginLeft: 71,
    fontWeight: "500",
    color: Color.darkslategray_200,
    width: 54,
  },
  groupContainer: {
    marginLeft: -175,
    top: 65,
    width: 350,
    height: 594,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    top: 147,
    height: 659,
    position: "absolute",
    left: 0,
  },
  houseIcon: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  lightTabItem: {
    alignItems: "center",
    flex: 1,
  },
  tabBar: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: "#f2f2f7",
    borderTopWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    width: 390,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  space1: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Space1;
