import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import FaceIdForm from "../components/FaceIdForm";
import SectionCard1 from "../components/SectionCard1";
import Container1 from "../components/Container1";
import { Color } from "../GlobalStyles";

const SettingsSecurityScrolled = () => {
  return (
    <View style={styles.settingsSecurityScrolled}>
      <Image
        style={styles.textureIcon}
        contentFit="cover"
        source={require("../assets/texture.png")}
      />
      <FaceIdForm />
      <SectionCard1 />
      <Container1 iconName="Security" />
    </View>
  );
};

const styles = StyleSheet.create({
  textureIcon: {
    position: "absolute",
    top: -8,
    left: -15,
    width: 432,
    height: 833,
    display: "none",
  },
  settingsSecurityScrolled: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SettingsSecurityScrolled;
