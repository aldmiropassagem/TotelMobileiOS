import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import NotificationSection from "./NotificationSection";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { Padding } from "../GlobalStyles";

const FaceIdForm = () => {
  return (
    <View style={styles.view}>
      <NotificationSection
        notificationIcon="Face ID"
        iconLabel={require("../assets/ic24book.png")}
        notificationText="Remember me"
        notificationIconSize={require("../assets/ic24book.png")}
        featureIconLabel="Touch ID"
        iconCode={require("../assets/ic24book3.png")}
        generalNotificationMarginTop="unset"
      />
      <View style={styles.buttonWrapper}>
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
  buttonWrapper: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 24,
    width: 390,
  },
  view: {
    position: "absolute",
    top: 79,
    left: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    width: 390,
  },
});

export default FaceIdForm;
