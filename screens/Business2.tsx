import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import SectionCard from "../components/SectionCard";
import SectionCard2 from "../components/SectionCard2";
import TopNavigationContainer from "../components/TopNavigationContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Business2 = () => {
  return (
    <View style={[styles.business2, styles.tabBarBg]}>
      <View style={styles.business2Inner}>
        <View style={styles.frameWrapper}>
          <View style={[styles.spaceWrapper, styles.tabBarFlexBox]}>
            <Text style={styles.space}>Space</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.tabBarLayout]}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.earnings, styles.reviewsTypo]}>Earnings</Text>
          <View style={styles.groupPosition}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={[styles.reviews, styles.reviewsTypo]}>Reviews</Text>
          </View>
        </View>
        <View style={styles.groupContainer}>
          <SectionCard />
          <SectionCard groupIconTop={324} />
          <SectionCard groupIconTop={432} />
          <SectionCard2 />
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
  tabBarBg: {
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
  reviewsTypo: {
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    width: 195,
    right: 0,
    height: 44,
    top: 0,
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
    width: 311,
    paddingRight: Padding.p_406xl,
    left: 20,
  },
  frameWrapper: {
    top: 0,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  business2Inner: {
    top: 47,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.ghostwhite_200,
  },
  earnings: {
    marginLeft: -131,
    fontWeight: "500",
    color: Color.darkslategray_200,
    width: 67,
  },
  groupItem: {
    borderTopLeftRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    backgroundColor: Color.lightsteelblue,
  },
  reviews: {
    marginLeft: -32.5,
    color: Color.defaultSystemBlueLight,
    width: 65,
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 8,
  },
  groupContainer: {
    top: 65,
    width: 370,
    height: 524,
    left: 20,
    position: "absolute",
  },
  groupParent: {
    top: 147,
    height: 589,
    position: "absolute",
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
  business2: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Business2;
