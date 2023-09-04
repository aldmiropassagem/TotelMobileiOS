import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import SizeSmallIconiconChevron1 from "./SizeSmallIconiconChevron1";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const HelpSection = () => {
  return (
    <View style={styles.uititlesectionParent}>
      <View style={styles.uititlesection}>
        <Text style={[styles.information, styles.clearAllFlexBox]}>
          Information
        </Text>
        <Text style={[styles.clearAll, styles.allTypo]}>Clear All</Text>
      </View>
      <View style={styles.uilistdefaultParent}>
        <View style={styles.uilistdefaultFlexBox}>
          <Text style={[styles.help, styles.helpTypo]}>Help</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book2.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/help-outline.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={[styles.help, styles.helpTypo]}>Version</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book1.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/phone-android.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={[styles.help, styles.helpTypo]}>Terms of Service</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book1.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/text-snippet.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={[styles.help, styles.helpTypo]}>Privacy Policy</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book2.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/approval.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clearAllFlexBox: {
    alignItems: "center",
    lineHeight: 16,
    fontSize: FontSize.regular1_size,
  },
  allTypo: {
    textAlign: "right",
    display: "none",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  helpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  uilistdefaultFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 390,
  },
  information: {
    fontWeight: "500",
    color: Color.labelColorLightSecondary,
    display: "flex",
    width: 89,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  clearAll: {
    color: Color.labelBlack60,
    width: 59,
    marginLeft: 10,
    display: "none",
    alignItems: "center",
    lineHeight: 16,
    fontSize: FontSize.regular1_size,
  },
  uititlesection: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 390,
  },
  help: {
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
  },
  seeAll: {
    fontSize: FontSize.textSMedium_size,
    lineHeight: 20,
    color: Color.labelBlack30,
    display: "none",
  },
  ic24bookIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  uilistdefault1: {
    marginTop: 16,
  },
  uilistdefaultParent: {
    alignSelf: "stretch",
    marginTop: 8,
  },
  uititlesectionParent: {
    marginTop: 16,
  },
});

export default HelpSection;
