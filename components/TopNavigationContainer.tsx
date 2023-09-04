import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DarkModeFalseTypeDefault from "./DarkModeFalseTypeDefault";
import { Color } from "../GlobalStyles";

const TopNavigationContainer = () => {
  return (
    <View style={styles.topnavigation}>
      <DarkModeFalseTypeDefault
        darkModeFalseTypeDefaultOverflow="unset"
        textColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topnavigation: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.systemBackgroundLightPrimary,
    borderStyle: "solid",
    borderColor: "#f2f2f7",
    borderBottomWidth: 1,
    width: 390,
    alignItems: "center",
  },
});

export default TopNavigationContainer;
