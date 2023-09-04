import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormContainer from "../components/FormContainer";
import TransactionHistoryContainer from "../components/TransactionHistoryContainer";
import TopNavigationContainer from "../components/TopNavigationContainer";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Profile1 = () => {
  return (
    <View style={styles.profile1}>
      <View style={[styles.profile1Inner, styles.frameWrapperLayout]}>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={[styles.settingsWrapper, styles.tabBarFlexBox]}>
            <Text style={styles.settings}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={[styles.vectorParent, styles.groupChildPosition]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-874.png")}
        />
        <FormContainer />
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={styles.switchToGuest}>Switch to guest mode</Text>
          </View>
        </View>
        <View style={[styles.vectorGroup, styles.groupPosition]}>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-875.png")}
          />
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={styles.logout}>Logout</Text>
            <Image
              style={styles.layer1Icon}
              contentFit="cover"
              source={require("../assets/layer1.png")}
            />
          </View>
        </View>
        <TransactionHistoryContainer />
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
            source={require("../assets/confirmation-number1.png")}
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
  frameWrapperLayout: {
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  tabBarFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  groupChildPosition: {
    width: 350,
    left: "50%",
    marginLeft: -175,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    width: 350,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 319,
    left: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    width: 165,
    height: 50,
    position: "absolute",
  },
  settings: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.3,
    lineHeight: 40,
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    width: 308,
    fontWeight: "600",
  },
  settingsWrapper: {
    top: 20,
    left: 20,
    width: 311,
    paddingRight: Padding.p_406xl,
  },
  frameWrapper: {
    top: 0,
  },
  profile1Inner: {
    top: 47,
  },
  groupChild: {
    top: 77,
    height: 1,
  },
  groupItem: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.defaultSystemBlueLight,
    top: 0,
  },
  switchToGuest: {
    top: 10,
    left: 91,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 28,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.systemBackgroundLightPrimary,
    textAlign: "justify",
    width: 168,
    height: 20,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
  },
  groupWrapper: {
    top: 101,
  },
  groupInner: {
    marginLeft: -159.5,
    height: 1,
    top: 0,
  },
  rectangleView: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.tomato_200,
    top: 0,
    left: 0,
    width: 165,
  },
  logout: {
    top: 14,
    left: 75,
    fontSize: FontSize.textSMedium_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.tomato_100,
    textAlign: "center",
    position: "absolute",
  },
  layer1Icon: {
    height: "44%",
    width: "13.33%",
    top: "28%",
    right: "60.61%",
    bottom: "28%",
    left: "26.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 32,
    left: 78,
  },
  vectorGroup: {
    marginLeft: -173,
    top: 555,
    height: 82,
  },
  vectorParent: {
    top: 131,
    height: 637,
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
    justifyContent: "center",
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  profile1: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Profile1;
