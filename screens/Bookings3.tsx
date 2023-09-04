import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ContainerWrapper from "../components/ContainerWrapper";
import DateCard from "../components/DateCard";
import TopNavigationContainer from "../components/TopNavigationContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Bookings3 = () => {
  return (
    <View style={[styles.bookings3, styles.tabBarBg]}>
      <View style={styles.bookings3Inner}>
        <View style={styles.frameWrapper}>
          <View style={[styles.bookingsWrapper, styles.tabBarFlexBox]}>
            <Text style={styles.bookings}>Bookings</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.tabBarLayout]}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.booked, styles.bookedTypo]}>Booked</Text>
          <Text style={[styles.history, styles.bookedTypo]}>History</Text>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={styles.calendar}>Calendar</Text>
          </View>
        </View>
        <ContainerWrapper />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/vector-876.png")}
        />
        <DateCard />
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
  bookedTypo: {
    color: Color.darkslategray_200,
    fontWeight: "500",
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
    width: 130,
    left: "50%",
    height: 44,
    top: 0,
    position: "absolute",
  },
  bookings: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.3,
    lineHeight: 40,
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorLightPrimary,
    width: 308,
    textAlign: "left",
    fontWeight: "600",
  },
  bookingsWrapper: {
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
  bookings3Inner: {
    top: 47,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.ghostwhite_200,
  },
  booked: {
    marginLeft: -159,
    width: 59,
  },
  history: {
    marginLeft: -30.12,
    width: 61,
  },
  groupItem: {
    marginLeft: -65,
    borderTopLeftRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    backgroundColor: Color.lightsteelblue,
  },
  calendar: {
    marginLeft: -37,
    color: Color.defaultSystemBlueLight,
    width: 75,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 8,
    left: "50%",
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: 65,
  },
  groupInner: {
    marginLeft: -175,
    top: 398,
    width: 350,
    height: 1,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    top: 147,
    height: 628,
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
  bookings3: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Bookings3;
