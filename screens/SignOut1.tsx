import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ProfileSection from "../components/ProfileSection";
import HelpSection from "../components/HelpSection";
import NavigationBarContainer1 from "../components/NavigationBarContainer1";
import SignOutConfirmationContainer from "../components/SignOutConfirmationContainer";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const SignOut1 = () => {
  return (
    <View style={styles.signOut}>
      <View style={[styles.view, styles.viewPosition]}>
        <View style={[styles.uilistdefault, styles.uilistdefaultSpaceBlock]}>
          <Text style={[styles.settings, styles.settingsTypo]}>Settings</Text>
          <Text style={styles.seeAll}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book.png")}
          />
        </View>
        <ProfileSection profileMarginTop={16} />
        <HelpSection />
        <View style={[styles.signOutWrapper, styles.uilistdefaultSpaceBlock]}>
          <Text style={[styles.signOut1, styles.settingsTypo]}>Sign Out</Text>
        </View>
      </View>
      <NavigationBarContainer1 />
      <View style={[styles.signOutChild, styles.viewPosition]} />
      <SignOutConfirmationContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  uilistdefaultSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  settingsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldTitle1,
  },
  settings: {
    fontSize: FontSize.defaultBoldTitle1_size,
    letterSpacing: 0,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
  },
  seeAll: {
    fontSize: FontSize.textSMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelBlack30,
    textAlign: "right",
    display: "none",
  },
  ic24bookIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  uilistdefault: {
    alignItems: "center",
  },
  signOut1: {
    fontSize: FontSize.regular_size,
    lineHeight: 28,
    color: Color.defaultSystemRedLight,
  },
  signOutWrapper: {
    marginTop: 16,
  },
  view: {
    top: 95,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
  },
  signOutChild: {
    top: 0,
    backgroundColor: Color.gray_200,
    height: 844,
  },
  signOut: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default SignOut1;
