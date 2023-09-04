import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const AccountContainer = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.groupContainer, styles.accountParentPosition]}>
        <View style={[styles.accountParent, styles.accountParentPosition]}>
          <Text style={styles.account}>Account</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-1171275068.png")}
          />
        </View>
        <Image
          style={[styles.mingcutedownLineIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/mingcutedownline.png")}
        />
      </View>
      <View style={styles.bookingsParent}>
        <Text style={styles.bookings}>Bookings</Text>
        <Text style={[styles.inbox, styles.inboxTypo]}>Inbox</Text>
        <Text style={[styles.space, styles.inboxTypo]}>Space</Text>
        <Text style={[styles.business, styles.inboxTypo]}>Business</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275105.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275106.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275107.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275108.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountParentPosition: {
    height: 28,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 24,
    width: 24,
    top: 2,
    position: "absolute",
  },
  inboxTypo: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.textSMedium_size,
    left: 28,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "500",
    lineHeight: 28,
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    width: 20,
    left: 0,
    position: "absolute",
  },
  account: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "500",
    lineHeight: 28,
    left: 40,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  accountParent: {
    width: 104,
  },
  mingcutedownLineIcon: {
    left: 306,
    overflow: "hidden",
  },
  groupContainer: {
    width: 330,
  },
  bookings: {
    fontSize: FontSize.textSMedium_size,
    left: 28,
    textAlign: "left",
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "500",
    lineHeight: 28,
    top: 0,
    position: "absolute",
  },
  inbox: {
    top: 36,
  },
  space: {
    top: 72,
  },
  business: {
    top: 108,
  },
  groupItem: {
    top: 4,
  },
  groupInner: {
    top: 40,
  },
  groupIcon: {
    top: 76,
  },
  groupChild1: {
    top: 112,
  },
  bookingsParent: {
    top: 44,
    width: 91,
    height: 136,
    left: 40,
    position: "absolute",
  },
  groupParent: {
    height: 180,
    width: 330,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default AccountContainer;
