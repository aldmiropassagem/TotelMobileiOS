import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NotificationSection from "./NotificationSection";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const SecurityForm = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.uilistdefault, styles.uilistdefaultSpaceBlock]}>
        <Text style={styles.security}>Security</Text>
        <Text style={styles.seeAll}>See All</Text>
        <Image
          style={styles.ic24bookIcon}
          contentFit="cover"
          source={require("../assets/ic24book.png")}
        />
      </View>
      <NotificationSection
        notificationIcon="Face ID"
        iconLabel={require("../assets/ic24book.png")}
        notificationText="Remember me"
        notificationIconSize={require("../assets/ic24book.png")}
        featureIconLabel="Touch ID"
        iconCode={require("../assets/ic24book3.png")}
        generalNotificationMarginTop={16}
      />
      <View style={[styles.buttonWrapper, styles.uilistdefaultSpaceBlock]}>
        <SizeSmallIconiconChevron
          text="Change Password"
          sizeSmallIconiconChevronPosition="unset"
          sizeSmallIconiconChevronBackgroundColor="#f2f2f7"
          sizeSmallIconiconChevronPaddingHorizontal="unset"
          sizeSmallIconiconChevronPaddingVertical="unset"
          sizeSmallIconiconChevronAlignSelf="stretch"
          sizeSmallIconiconChevronBorderStyle="solid"
          sizeSmallIconiconChevronBorderColor="#f2f2f7"
          sizeSmallIconiconChevronBorderWidth={1}
          sizeSmallIconiconChevronMarginLeft="unset"
          sizeSmallIconiconChevronOverflow="hidden"
          sizeSmallIconiconChevronMarginTop="unset"
          sizeSmallIconiconChevronBorderRadius={100}
          textFontSize={17}
          textLineHeight={22}
          textColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uilistdefaultSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  security: {
    fontSize: FontSize.defaultBoldTitle1_size,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.defaultBoldTitle1,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  seeAll: {
    fontSize: FontSize.textSMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelBlack30,
    textAlign: "right",
    display: "none",
  },
  ic24bookIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  uilistdefault: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonWrapper: {
    marginTop: 16,
    width: 390,
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

export default SecurityForm;
