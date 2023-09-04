import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StylestandardCompletedon1 from "./StylestandardCompletedon1";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const ChangePasswordForm = () => {
  return (
    <View style={styles.view}>
      <View style={styles.parentSpaceBlock}>
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
        <View style={styles.currentPasswordParent}>
          <Text style={[styles.currentPassword, styles.helpTypo]}>
            Current password
          </Text>
          <StylestandardCompletedon1
            eyePasswordShow={require("../assets/visibility-off.png")}
            stylestandardCompletedonPosition="unset"
            stylestandardCompletedonMarginTop={12}
            stylestandardCompletedonPaddingVertical="unset"
            textHolderHeight={20}
            textHolderAlignItems="flex-start"
            textHolderHeight1={20}
            textHolderPaddingTop={5}
            textHolderPaddingBottom={5}
          />
        </View>
        <View style={styles.newPasswordParent}>
          <Text style={[styles.currentPassword, styles.helpTypo]}>
            New password
          </Text>
          <StylestandardCompletedon1
            eyePasswordShow={require("../assets/visibility-off.png")}
            stylestandardCompletedonPosition="unset"
            stylestandardCompletedonMarginTop={12}
            stylestandardCompletedonPaddingVertical="unset"
            textHolderHeight={20}
            textHolderAlignItems="flex-start"
            textHolderHeight1={20}
            textHolderPaddingTop={5}
            textHolderPaddingBottom={5}
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
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
  },
  helpTypo: {
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.defaultRegularSubheadline_size,
  },
  parentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  atLeast8: {
    color: Color.labelColorLightPrimary,
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
  },
  help: {
    color: Color.defaultSystemBlueLight,
    marginLeft: 4,
  },
  component1: {
    flexDirection: "row",
    alignItems: "center",
  },
  byProceedingYou: {
    fontSize: FontSize.defaultBoldFootnote_size,
    lineHeight: 18,
    color: Color.labelColorLightSecondary,
    width: 358,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
  },
  currentPassword: {
    color: Color.labelColorLightPrimary,
  },
  currentPasswordParent: {
    alignSelf: "stretch",
  },
  newPasswordParent: {
    alignSelf: "stretch",
    marginTop: 24,
  },
  frameParent: {
    marginTop: 24,
  },
  view: {
    position: "absolute",
    top: 87,
    left: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    width: 390,
  },
});

export default ChangePasswordForm;
