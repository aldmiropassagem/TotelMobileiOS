import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NotificationSection from "./NotificationSection";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const NotificationCard = () => {
  return (
    <View style={styles.view}>
      <View style={styles.uilistdefault}>
        <Text style={styles.notification}>Notification</Text>
        <Text style={styles.seeAll}>See All</Text>
        <Image
          style={styles.ic24bookIcon}
          contentFit="cover"
          source={require("../assets/ic24book.png")}
        />
      </View>
      <NotificationSection
        notificationIcon="General Notification"
        iconLabel={require("../assets/ic24book3.png")}
        notificationText="Sound"
        notificationIconSize={require("../assets/ic24book3.png")}
        featureIconLabel="Vibrate"
        iconCode={require("../assets/ic24book.png")}
        generalNotificationMarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
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
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
  },
  view: {
    position: "absolute",
    top: 95,
    left: 0,
    width: 390,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
  },
});

export default NotificationCard;
