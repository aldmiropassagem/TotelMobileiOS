import * as React from "react";
import { StyleSheet, View } from "react-native";
import NotificationSection from "./NotificationSection";
import { Padding } from "../GlobalStyles";

const GeneralNotificationContainer = () => {
  return (
    <View style={styles.view}>
      <NotificationSection
        notificationIcon="General Notification"
        iconLabel={require("../assets/ic24book3.png")}
        notificationText="Sound"
        notificationIconSize={require("../assets/ic24book3.png")}
        featureIconLabel="Vibrate"
        iconCode={require("../assets/ic24book.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: 53,
    left: 0,
    width: 390,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
  },
});

export default GeneralNotificationContainer;
