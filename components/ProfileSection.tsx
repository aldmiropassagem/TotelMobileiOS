import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import SizeSmallIconiconChevron1 from "./SizeSmallIconiconChevron1";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

type ProfileSectionType = {
  /** Style props */
  profileMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileSection = ({ profileMarginTop }: ProfileSectionType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", profileMarginTop),
    };
  }, [profileMarginTop]);

  return (
    <View style={[styles.uititlesectionParent, frameViewStyle]}>
      <View style={styles.uititlesection}>
        <Text style={styles.myAccount}>My Account</Text>
        <Text style={[styles.clearAll, styles.allTypo]}>Clear All</Text>
      </View>
      <View style={styles.uilistdefaultParent}>
        <View style={styles.uilistdefaultFlexBox}>
          <Text style={[styles.profile, styles.usdTypo]}>Profile</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book1.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/person.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={[styles.profile, styles.usdTypo]}>
            Payment Information
          </Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book1.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/credit-card.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={[styles.profile, styles.usdTypo]}>Notification</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book2.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/notifications-none.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={[styles.profile, styles.usdTypo]}>Security</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book1.png")}
          />
          <SizeSmallIconiconChevron1
            tune={require("../assets/lock-outline.png")}
            sizeSmallIconiconChevronPosition="unset"
            sizeSmallIconiconChevronMarginLeft="unset"
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={[styles.profile, styles.usdTypo]}>Currency</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book2.png")}
          />
          <View style={styles.button}>
            <Text style={[styles.usd, styles.usdTypo]}>$USD</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allTypo: {
    textAlign: "right",
    display: "none",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  usdTypo: {
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultRegularBody_size,
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
  myAccount: {
    fontWeight: "500",
    color: Color.labelColorLightSecondary,
    display: "flex",
    width: 89,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 16,
    fontSize: FontSize.regular1_size,
  },
  clearAll: {
    color: Color.labelBlack60,
    width: 59,
    marginLeft: 10,
    display: "none",
    alignItems: "center",
    lineHeight: 16,
    fontSize: FontSize.regular1_size,
    textAlign: "right",
  },
  uititlesection: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
    flexDirection: "row",
  },
  profile: {
    textAlign: "left",
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
  usd: {
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemBackgroundLightSecondary,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  uilistdefaultParent: {
    marginTop: 8,
  },
  uititlesectionParent: {
    marginTop: 16,
  },
});

export default ProfileSection;
