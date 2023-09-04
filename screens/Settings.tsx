import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ProfileSection from "../components/ProfileSection";
import AssistanceSection from "../components/AssistanceSection";
import SectionCard1 from "../components/SectionCard1";
import NavigationBarContainer1 from "../components/NavigationBarContainer1";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const Settings = () => {
  return (
    <View style={styles.settings}>
      <Image
        style={styles.textureIcon}
        contentFit="cover"
        source={require("../assets/texture.png")}
      />
      <View style={styles.view}>
        <View style={[styles.uilistdefault, styles.uilistdefaultSpaceBlock]}>
          <Text style={[styles.settings1, styles.signOutTypo]}>Settings</Text>
          <Text style={styles.seeAll}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book.png")}
          />
        </View>
        <ProfileSection profileMarginTop={24} />
        <AssistanceSection />
        <View style={[styles.signOutWrapper, styles.uilistdefaultSpaceBlock]}>
          <Text style={[styles.signOut, styles.signOutTypo]}>Sign Out</Text>
        </View>
      </View>
      <SectionCard1 />
      <NavigationBarContainer1 />
    </View>
  );
};

const styles = StyleSheet.create({
  uilistdefaultSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  signOutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldTitle1,
  },
  textureIcon: {
    top: -8,
    left: -15,
    width: 432,
    height: 833,
    display: "none",
    position: "absolute",
  },
  settings1: {
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
  signOut: {
    fontSize: FontSize.regular_size,
    lineHeight: 28,
    color: Color.defaultSystemRedLight,
  },
  signOutWrapper: {
    marginTop: 24,
  },
  view: {
    top: 95,
    left: 0,
    width: 390,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    position: "absolute",
  },
  settings: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Settings;
