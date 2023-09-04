import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StylestandardCompletedoff2 from "./StylestandardCompletedoff2";
import StylestandardCompletedoff1 from "./StylestandardCompletedoff1";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const SectionCard1 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.basicInfoParent}>
        <Text style={styles.basicInfo}>Basic info</Text>
        <View style={styles.component1}>
          <Text style={[styles.enterThe6Digit, styles.textTypo]}>
            Enter the 6-digit code sent to
          </Text>
          <Text style={[styles.text, styles.textTypo]}>+44 07417 558294</Text>
        </View>
      </View>
      <View style={styles.frameGroupSpaceBlock}>
        <View style={styles.inputParent}>
          <StylestandardCompletedoff2
            text="First name"
            stylestandardCompletedoffPosition="unset"
            stylestandardCompletedoffMarginLeft="unset"
            stylestandardCompletedoffAlignSelf="stretch"
            stylestandardCompletedoffFlex={1}
          />
          <StylestandardCompletedoff2
            text="Last name"
            stylestandardCompletedoffPosition="unset"
            stylestandardCompletedoffMarginLeft={8}
            stylestandardCompletedoffAlignSelf="stretch"
            stylestandardCompletedoffFlex={1}
          />
        </View>
        <StylestandardCompletedoff1
          enterAText="Date of birth"
          stylestandardCompletedoffPosition="unset"
          stylestandardCompletedoffMarginTop={12}
        />
        <View style={styles.inputGroup}>
          <StylestandardCompletedoff2
            text="Male"
            stylestandardCompletedoffPosition="unset"
            stylestandardCompletedoffMarginLeft="unset"
            stylestandardCompletedoffAlignSelf="unset"
          />
          <StylestandardCompletedoff2
            text="Female"
            stylestandardCompletedoffPosition="unset"
            stylestandardCompletedoffMarginLeft={8}
            stylestandardCompletedoffAlignSelf="unset"
          />
        </View>
      </View>
      <View style={[styles.buttonWrapper, styles.frameGroupSpaceBlock]}>
        <SizeSmallIconiconChevron
          text="Continue"
          sizeSmallIconiconChevronPosition="unset"
          sizeSmallIconiconChevronBackgroundColor="#0057ff"
          sizeSmallIconiconChevronPaddingHorizontal="unset"
          sizeSmallIconiconChevronPaddingVertical="unset"
          sizeSmallIconiconChevronAlignSelf="stretch"
          sizeSmallIconiconChevronBorderStyle="unset"
          sizeSmallIconiconChevronBorderColor="unset"
          sizeSmallIconiconChevronMarginLeft="unset"
          sizeSmallIconiconChevronOverflow="unset"
          sizeSmallIconiconChevronMarginTop="unset"
          textFontSize={17}
          textLineHeight={22}
          textColor="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameGroupSpaceBlock: {
    marginTop: 16,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  basicInfo: {
    fontSize: FontSize.defaultBoldTitle1_size,
    fontWeight: "700",
    fontFamily: FontFamily.defaultBoldTitle1,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelColorLightPrimary,
  },
  enterThe6Digit: {
    color: Color.labelColorLightPrimary,
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
  },
  text: {
    fontWeight: "600",
    color: Color.defaultSystemBlueLight,
    marginLeft: 8,
  },
  component1: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  basicInfoParent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  inputParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  inputGroup: {
    width: 358,
    marginTop: 12,
    flexDirection: "row",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 1905,
    left: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
  },
});

export default SectionCard1;
