import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SignOutConfirmationContainer = () => {
  return (
    <View style={styles.signOut}>
      <View style={[styles.sharingInfoClose, styles.closeFlexBox]}>
        <Text style={styles.areYouSure}>
          Are you sure you want to Sign Out?
        </Text>
        <View style={[styles.closeWrapper, styles.closeFlexBox]}>
          <Image
            style={styles.closeIcon}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
        </View>
      </View>
      <View style={styles.buttonParent}>
        <SizeSmallIconiconChevron
          text="Yes, Sign Out"
          sizeSmallIconiconChevronPosition="unset"
          sizeSmallIconiconChevronBackgroundColor="#ff3b30"
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
        <SizeSmallIconiconChevron
          text="Cancel"
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
          sizeSmallIconiconChevronMarginTop={12}
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
  closeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  areYouSure: {
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  closeIcon: {
    borderRadius: Border.br_81xl,
    width: 30,
    height: 30,
  },
  closeWrapper: {
    width: 42,
    justifyContent: "center",
  },
  sharingInfoClose: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  buttonParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 16,
    width: 390,
  },
  signOut: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.systemBackgroundLightPrimary,
    overflow: "hidden",
    padding: Padding.p_base,
    alignItems: "center",
    width: 390,
  },
});

export default SignOutConfirmationContainer;
