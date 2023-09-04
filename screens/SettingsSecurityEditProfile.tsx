import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import StylestandardCompletedoff from "../components/StylestandardCompletedoff";
import SizeSmallIconiconChevron from "../components/SizeSmallIconiconChevron";
import EmailForm from "../components/EmailForm";
import MobilePhoneForm from "../components/MobilePhoneForm";
import NavigationBarContainer from "../components/NavigationBarContainer";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const SettingsSecurityEditProfile = () => {
  return (
    <View style={styles.settingsSecurityEditProfile}>
      <Image
        style={styles.textureIcon}
        contentFit="cover"
        source={require("../assets/texture.png")}
      />
      <View style={styles.view}>
        <View style={styles.view1}>
          <View style={styles.frameParentSpaceBlock}>
            <Text style={[styles.profile, styles.profileFlexBox]}>Profile</Text>
          </View>
          <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
            <View style={styles.inputParent}>
              <StylestandardCompletedoff
                text="John"
                stylestandardCompletedoffPosition="unset"
                stylestandardCompletedoffFlex={1}
                stylestandardCompletedoffBorderRadius={12}
                stylestandardCompletedoffMarginLeft="unset"
                stylestandardCompletedoffAlignSelf="unset"
                stylestandardCompletedoffMarginTop="unset"
                textHolderWidth="unset"
                textHolderAlignSelf="stretch"
                textHolderAlignItems="flex-start"
                textColor="#000"
              />
              <StylestandardCompletedoff
                text="Due"
                stylestandardCompletedoffPosition="unset"
                stylestandardCompletedoffFlex={1}
                stylestandardCompletedoffBorderRadius={12}
                stylestandardCompletedoffMarginLeft={12}
                stylestandardCompletedoffAlignSelf="unset"
                stylestandardCompletedoffMarginTop="unset"
                textHolderWidth="unset"
                textHolderAlignSelf="stretch"
                textHolderAlignItems="flex-start"
                textColor="#000"
              />
            </View>
            <View style={styles.dateOfBirthParent}>
              <Text style={[styles.dateOfBirth, styles.profileFlexBox]}>
                Date of Birth?
              </Text>
              <View style={styles.inputGroup}>
                <StylestandardCompletedoff
                  text="Day"
                  stylestandardCompletedoffPosition="unset"
                  stylestandardCompletedoffFlex={1}
                  stylestandardCompletedoffBorderRadius={12}
                  stylestandardCompletedoffMarginLeft="unset"
                  stylestandardCompletedoffAlignSelf="unset"
                  stylestandardCompletedoffMarginTop="unset"
                  textHolderWidth="unset"
                  textHolderAlignSelf="stretch"
                  textHolderAlignItems="center"
                  textFlex={1}
                  textColor="rgba(60, 60, 67, 0.6)"
                />
                <StylestandardCompletedoff
                  text="Month"
                  stylestandardCompletedoffPosition="unset"
                  stylestandardCompletedoffFlex={1}
                  stylestandardCompletedoffBorderRadius={12}
                  stylestandardCompletedoffMarginLeft={12}
                  stylestandardCompletedoffAlignSelf="unset"
                  stylestandardCompletedoffMarginTop="unset"
                  textHolderWidth="unset"
                  textHolderAlignSelf="stretch"
                  textHolderAlignItems="center"
                  textFlex={1}
                  textColor="rgba(60, 60, 67, 0.6)"
                />
                <StylestandardCompletedoff
                  text="Year"
                  stylestandardCompletedoffPosition="unset"
                  stylestandardCompletedoffFlex={1}
                  stylestandardCompletedoffBorderRadius={12}
                  stylestandardCompletedoffMarginLeft={12}
                  stylestandardCompletedoffAlignSelf="unset"
                  stylestandardCompletedoffMarginTop="unset"
                  textHolderWidth="unset"
                  textHolderAlignSelf="stretch"
                  textHolderAlignItems="center"
                  textFlex={1}
                  textColor="rgba(60, 60, 67, 0.6)"
                />
              </View>
            </View>
            <View style={styles.dateOfBirthParent}>
              <Text style={[styles.dateOfBirth, styles.profileFlexBox]}>
                Date of Birth?
              </Text>
              <View style={styles.inputGroup}>
                <SizeSmallIconiconChevron
                  text="Male"
                  sizeSmallIconiconChevronPosition="unset"
                  sizeSmallIconiconChevronBackgroundColor="rgba(235, 235, 245, 0.6)"
                  sizeSmallIconiconChevronPaddingHorizontal="unset"
                  sizeSmallIconiconChevronPaddingVertical="unset"
                  sizeSmallIconiconChevronAlignSelf="unset"
                  sizeSmallIconiconChevronBorderStyle="solid"
                  sizeSmallIconiconChevronBorderColor="rgba(235, 235, 245, 0.6)"
                  sizeSmallIconiconChevronBorderWidth={1}
                  sizeSmallIconiconChevronMarginLeft="unset"
                  sizeSmallIconiconChevronOverflow="unset"
                  sizeSmallIconiconChevronMarginTop="unset"
                  sizeSmallIconiconChevronBorderRadius={100}
                  textFontSize={15}
                  textLineHeight={20}
                  textColor="#000"
                />
                <SizeSmallIconiconChevron
                  text="Female"
                  sizeSmallIconiconChevronPosition="unset"
                  sizeSmallIconiconChevronBackgroundColor="#000"
                  sizeSmallIconiconChevronPaddingHorizontal="unset"
                  sizeSmallIconiconChevronPaddingVertical="unset"
                  sizeSmallIconiconChevronAlignSelf="unset"
                  sizeSmallIconiconChevronBorderStyle="unset"
                  sizeSmallIconiconChevronBorderColor="unset"
                  sizeSmallIconiconChevronMarginLeft={12}
                  sizeSmallIconiconChevronOverflow="unset"
                  sizeSmallIconiconChevronMarginTop="unset"
                  sizeSmallIconiconChevronBorderRadius={100}
                  textFontSize={15}
                  textLineHeight={20}
                  textColor="#fff"
                />
                <SizeSmallIconiconChevron
                  text="Prefer not to say"
                  sizeSmallIconiconChevronPosition="unset"
                  sizeSmallIconiconChevronBackgroundColor="rgba(235, 235, 245, 0.6)"
                  sizeSmallIconiconChevronPaddingHorizontal="unset"
                  sizeSmallIconiconChevronPaddingVertical="unset"
                  sizeSmallIconiconChevronAlignSelf="unset"
                  sizeSmallIconiconChevronBorderStyle="solid"
                  sizeSmallIconiconChevronBorderColor="rgba(235, 235, 245, 0.6)"
                  sizeSmallIconiconChevronBorderWidth={1}
                  sizeSmallIconiconChevronMarginLeft={12}
                  sizeSmallIconiconChevronOverflow="unset"
                  sizeSmallIconiconChevronMarginTop="unset"
                  sizeSmallIconiconChevronBorderRadius={100}
                  textFontSize={15}
                  textLineHeight={20}
                  textColor="#000"
                />
              </View>
            </View>
            <View style={styles.bioParent}>
              <Text style={[styles.dateOfBirth, styles.profileFlexBox]}>
                Bio
              </Text>
              <StylestandardCompletedoff
                text="Hi there! I’m creative individual who loves to spend time outdoors and explore new places. I work as a graphic designer and enjoy spending my free time drawing and painting."
                stylestandardCompletedoffPosition="unset"
                stylestandardCompletedoffMarginLeft="unset"
                stylestandardCompletedoffAlignSelf="stretch"
                stylestandardCompletedoffMarginTop={12}
                textHolderWidth={336}
                textHolderAlignSelf="unset"
                textHolderAlignItems="center"
                textFlex={1}
                textColor="#000"
              />
            </View>
            <EmailForm />
            <MobilePhoneForm />
          </View>
        </View>
      </View>
      <NavigationBarContainer />
      <View style={styles.o}>
        <SizeSmallIconiconChevron
          text="Save"
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
  profileFlexBox: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
  },
  frameParentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  textureIcon: {
    top: -8,
    left: -15,
    width: 432,
    height: 833,
    display: "none",
    position: "absolute",
  },
  profile: {
    fontSize: FontSize.defaultBoldTitle1_size,
    fontWeight: "700",
    fontFamily: FontFamily.defaultBoldTitle1,
    alignSelf: "stretch",
  },
  inputParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dateOfBirth: {
    fontSize: FontSize.defaultRegularSubheadline_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  inputGroup: {
    width: 358,
    marginTop: 8,
    flexDirection: "row",
  },
  dateOfBirthParent: {
    marginTop: 24,
  },
  bioParent: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 16,
  },
  view1: {
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
  },
  view: {
    marginTop: -362.5,
    alignItems: "center",
    left: "50%",
    top: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  o: {
    marginTop: 381,
    padding: Padding.p_base,
    justifyContent: "center",
    width: 390,
    alignItems: "center",
    left: "50%",
    top: "50%",
    marginLeft: -195,
    position: "absolute",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  settingsSecurityEditProfile: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default SettingsSecurityEditProfile;
