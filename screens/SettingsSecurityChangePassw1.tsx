import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import ChangePasswordForm1 from "../components/ChangePasswordForm1";
import SectionCard1 from "../components/SectionCard1";
import NavigationBarContainer1 from "../components/NavigationBarContainer1";
import { Color } from "../GlobalStyles";

const SettingsSecurityChangePassw1 = () => {
  return (
    <View style={styles.settingsSecurityChangePassw}>
      <ChangePasswordForm1 />
      <Image
        style={styles.textureIcon}
        contentFit="cover"
        source={require("../assets/texture.png")}
      />
      <SectionCard1 />
      <NavigationBarContainer1 />
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
  settingsSecurityChangePassw: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SettingsSecurityChangePassw1;
