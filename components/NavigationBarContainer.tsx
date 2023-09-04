import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DarkModeFalseTypeDefault from "./DarkModeFalseTypeDefault";
import SizeSmallIconiconChevron from "./SizeSmallIconiconChevron";
import { Border, Color, Padding } from "../GlobalStyles";

const NavigationBarContainer = () => {
  return (
    <View style={styles.topnavigation}>
      <DarkModeFalseTypeDefault
        darkModeFalseTypeDefaultOverflow="unset"
        textColor="#000"
      />
      <View style={styles.buttonParent}>
        <View style={styles.button}>
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevron-left.png")}
          />
        </View>
        <SizeSmallIconiconChevron
          text="Skip"
          sizeSmallIconiconChevronPosition="unset"
          sizeSmallIconiconChevronBackgroundColor="#f2f2f7"
          sizeSmallIconiconChevronPaddingHorizontal="unset"
          sizeSmallIconiconChevronPaddingVertical="unset"
          sizeSmallIconiconChevronAlignSelf="unset"
          sizeSmallIconiconChevronOpacity={0}
          sizeSmallIconiconChevronBorderStyle="unset"
          sizeSmallIconiconChevronBorderColor="unset"
          sizeSmallIconiconChevronMarginLeft="unset"
          sizeSmallIconiconChevronOverflow="unset"
          sizeSmallIconiconChevronMarginTop="unset"
          sizeSmallIconiconChevronBorderRadius={100}
          textFontSize={13}
          textLineHeight={18}
          textColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chevronLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemBackgroundLightSecondary,
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 390,
  },
  topnavigation: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.systemBackgroundLightPrimary,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    width: 390,
  },
});

export default NavigationBarContainer;
