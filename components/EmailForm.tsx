import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StylestandardCompletedon from "./StylestandardCompletedon";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const EmailForm = () => {
  return (
    <View style={styles.emailAddressParent}>
      <Text style={styles.emailAddress}>Email Address</Text>
      <StylestandardCompletedon
        search={require("../assets/mail.png")}
        enterSearch="johndue@icloud.com"
        stylestandardCompletedonPosition="unset"
        stylestandardCompletedonMarginTop={12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailAddress: {
    fontSize: FontSize.defaultRegularSubheadline_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  emailAddressParent: {
    alignSelf: "stretch",
    marginTop: 24,
  },
});

export default EmailForm;
