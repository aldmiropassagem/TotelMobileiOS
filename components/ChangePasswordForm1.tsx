import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StylestandardCompletedon1 from "./StylestandardCompletedon1";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const ChangePasswordForm1 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.parentSpaceBlock}>
        <Text style={styles.changePassword}>Change Password</Text>
        <View style={styles.component1}>
          <Text style={[styles.atLeast8, styles.atLeast8Typo]}>
            At least 8 digit should be in your password.
          </Text>
          <Text style={[styles.help, styles.helpTypo]}>Help?</Text>
        </View>
        <Text style={[styles.byProceedingYou, styles.atLeast8Typo]}>
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Totel and its affiliates to the
          number provided.
        </Text>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.createPasswordParent}>
          <Text style={[styles.createPassword, styles.helpTypo]}>
            Create password
          </Text>
          <StylestandardCompletedon1
            eyePasswordShow={require("../assets/visibility-off.png")}
            stylestandardCompletedonPosition="unset"
            stylestandardCompletedonMarginTop={8}
            stylestandardCompletedonPaddingVertical="unset"
            stylestandardCompletedonBorderRadius={12}
            textHolderHeight="unset"
            textHolderAlignItems="center"
            textHolderHeight1="unset"
            textHolderPaddingTop={6}
            textHolderPaddingBottom={6}
          />
        </View>
        <View style={styles.confirmPasswordParent}>
          <Text style={[styles.createPassword, styles.helpTypo]}>
            Confirm password
          </Text>
          <StylestandardCompletedon1
            eyePasswordShow={require("../assets/visibility-off.png")}
            stylestandardCompletedonPosition="unset"
            stylestandardCompletedonMarginTop={8}
            stylestandardCompletedonPaddingVertical="unset"
            stylestandardCompletedonBorderRadius={12}
            textHolderHeight="unset"
            textHolderAlignItems="center"
            textHolderHeight1="unset"
            textHolderPaddingTop={4}
            textHolderPaddingBottom={4}
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <SizeSmallIconiconChevron
          text="Change Password"
          sizeSmallIconiconChevronPosition="unset"
          sizeSmallIconiconChevronBackgroundColor="#0057ff"
          sizeSmallIconiconChevronPaddingHorizontal="unset"
          sizeSmallIconiconChevronPaddingVertical="unset"
          sizeSmallIconiconChevronAlignSelf="stretch"
          sizeSmallIconiconChevronBorderStyle="unset"
          sizeSmallIconiconChevronBorderColor="unset"
          sizeSmallIconiconChevronMarginLeft="unset"
          sizeSmallIconiconChevronOverflow="hidden"
          sizeSmallIconiconChevronMarginTop="unset"
          sizeSmallIconiconChevronBorderRadius={100}
          textFontSize={17}
          textLineHeight={22}
          textColor="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  atLeast8Typo: {
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "left",
    letterSpacing: 0,
  },
  helpTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  parentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  changePassword: {
    fontSize: FontSize.defaultBoldTitle1_size,
    fontWeight: "700",
    fontFamily: FontFamily.defaultBoldTitle1,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
  },
  atLeast8: {
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
  },
  help: {
    color: Color.defaultSystemBlueLight,
    marginLeft: 4,
  },
  component1: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  byProceedingYou: {
    fontSize: FontSize.defaultBoldFootnote_size,
    lineHeight: 18,
    color: Color.labelColorLightSecondary,
    width: 358,
    marginTop: 4,
  },
  createPassword: {
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  createPasswordParent: {
    alignSelf: "stretch",
  },
  confirmPasswordParent: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 24,
  },
  view: {
    position: "absolute",
    top: 95,
    left: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    width: 390,
  },
});

export default ChangePasswordForm1;
