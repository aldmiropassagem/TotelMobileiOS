import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import SecurityForm from "../components/SecurityForm";
import SectionCard1 from "../components/SectionCard1";
import NavigationBarContainer1 from "../components/NavigationBarContainer1";
import { Color } from "../GlobalStyles";

const SettingsSecurity = () => {
  return (
    <View style={styles.settingsSecurity}>
      <Image
        style={styles.textureIcon}
        contentFit="cover"
        source={require("../assets/texture.png")}
      />
      <SecurityForm />
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
  settingsSecurity: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SettingsSecurity;
