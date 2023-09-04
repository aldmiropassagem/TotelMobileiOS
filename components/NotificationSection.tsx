import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import DarkModeFalseActiveFalse from "./DarkModeFalseActiveFalse";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

type NotificationSectionType = {
  notificationIcon?: string;
  iconLabel?: ImageSourcePropType;
  notificationText?: string;
  notificationIconSize?: ImageSourcePropType;
  featureIconLabel?: string;
  iconCode?: ImageSourcePropType;

  /** Style props */
  generalNotificationMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NotificationSection = ({
  notificationIcon,
  iconLabel,
  notificationText,
  notificationIconSize,
  featureIconLabel,
  iconCode,
  generalNotificationMarginTop,
}: NotificationSectionType) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", generalNotificationMarginTop),
    };
  }, [generalNotificationMarginTop]);

  return (
    <View>
      <View>
        <View style={styles.uilistdefaultFlexBox}>
          <Text style={styles.generalNotification}>{notificationIcon}</Text>
          <Text style={styles.seeAll}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={iconLabel}
          />
          <DarkModeFalseActiveFalse
            darkModeFalseActiveFalseD={require("../assets/dark-modefalse-activetrue.png")}
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={styles.generalNotification}>{notificationText}</Text>
          <Text style={styles.seeAll}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={notificationIconSize}
          />
          <DarkModeFalseActiveFalse
            darkModeFalseActiveFalseD={require("../assets/dark-modefalse-activefalse.png")}
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={styles.generalNotification}>{featureIconLabel}</Text>
          <Text style={styles.seeAll}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={iconCode}
          />
          <DarkModeFalseActiveFalse
            darkModeFalseActiveFalseD={require("../assets/dark-modefalse-activetrue.png")}
          />
        </View>
        <View style={[styles.uilistdefault1, styles.uilistdefaultFlexBox]}>
          <Text style={styles.generalNotification}>App Updates</Text>
          <Text style={styles.seeAll}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book.png")}
          />
          <DarkModeFalseActiveFalse
            darkModeFalseActiveFalseD={require("../assets/dark-modefalse-activetrue.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uilistdefaultFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 390,
  },
  generalNotification: {
    fontSize: FontSize.defaultRegularBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  seeAll: {
    fontSize: FontSize.textSMedium_size,
    lineHeight: 20,
    color: Color.labelBlack30,
    textAlign: "right",
    display: "none",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  ic24bookIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  uilistdefault1: {
    marginTop: 16,
  },
});

export default NotificationSection;
