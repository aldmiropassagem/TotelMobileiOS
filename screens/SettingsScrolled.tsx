import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SectionCard1 from "../components/SectionCard1";
import ProfileSection from "../components/ProfileSection";
import SupportSection from "../components/SupportSection";
import Container1 from "../components/Container1";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SettingsScrolled = () => {
  return (
    <View style={styles.settingsScrolled}>
      <Image
        style={styles.textureIcon}
        contentFit="cover"
        source={require("../assets/texture.png")}
      />
      <SectionCard1 />
      <View style={styles.view}>
        <ProfileSection profileMarginTop="unset" />
        <SupportSection />
        <View style={styles.signOutWrapper}>
          <Text style={styles.signOut}>Sign Out</Text>
        </View>
      </View>
      <Container1 iconName="Settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  textureIcon: {
    top: -8,
    left: -15,
    width: 432,
    height: 833,
    display: "none",
    position: "absolute",
  },
  signOut: {
    fontSize: FontSize.regular_size,
    lineHeight: 28,
    fontFamily: FontFamily.defaultBoldTitle1,
    color: Color.defaultSystemRedLight,
    textAlign: "left",
  },
  signOutWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 24,
  },
  view: {
    top: 32,
    left: 0,
    width: 390,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    position: "absolute",
  },
  settingsScrolled: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SettingsScrolled;
