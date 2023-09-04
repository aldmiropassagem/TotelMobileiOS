import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

type DarkModeFalseActiveFalseType = {
  darkModeFalseActiveFalseD?: ImageSourcePropType;
};

const DarkModeFalseActiveFalse = ({
  darkModeFalseActiveFalseD,
}: DarkModeFalseActiveFalseType) => {
  return (
    <Image
      style={styles.darkModefalseActivefalse}
      contentFit="cover"
      source={darkModeFalseActiveFalseD}
    />
  );
};

const styles = StyleSheet.create({
  darkModefalseActivefalse: {
    width: 57,
    height: 43,
  },
});

export default DarkModeFalseActiveFalse;
