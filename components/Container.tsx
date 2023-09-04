import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Container = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signOut}>
      <View style={[styles.sharingInfoClose, styles.closeFlexBox]}>
        <Text style={styles.version}>Version</Text>
        <Pressable
          style={[styles.closeWrapper, styles.closeFlexBox]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.closeIcon}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
        </Pressable>
      </View>
      <View style={styles.usingNowV1230Parent}>
        <Text style={[styles.usingNowV, styles.usingNowVTypo]}>
          Using Now V 1.2.3.0
        </Text>
        <Text style={[styles.totelRecommendsThat, styles.usingNowVTypo]}>
          Totel recommends that you update to the the latest version or a
          seamless enhanced performance of the app.
        </Text>
      </View>
      <View style={styles.buttonParent}>
        <SizeSmallIconiconChevron
          text="Update Now"
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
        <SizeSmallIconiconChevron
          text="No, thanks"
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
          onButtonPress={() => navigation.navigate("Settings")}
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
  usingNowVTypo: {
    width: 358,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultRegularBody_size,
  },
  version: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultRegularBody_size,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
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
  usingNowV: {
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    width: 358,
  },
  totelRecommendsThat: {
    color: Color.labelColorLightSecondary,
    marginTop: 16,
  },
  usingNowV1230Parent: {
    marginTop: 16,
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

export default Container;
