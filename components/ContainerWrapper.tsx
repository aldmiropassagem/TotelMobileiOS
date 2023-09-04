import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ThemeLightTypeActiveStat from "./ThemeLightTypeActiveStat";
import ThemeLightTypeActiveStat1 from "./ThemeLightTypeActiveStat1";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContainerWrapper = () => {
  return (
    <View style={styles.rightCalendarParent}>
      <View style={styles.rightCalendar}>
        <View style={[styles.calendarContent, styles.contentFlexBox]}>
          <View style={[styles.datesContent, styles.contentFlexBox]}>
            <View style={[styles.date, styles.rowFlexBox]}>
              <ThemeLightTypeActiveStat
                date="Mo"
                rectangle1={require("../assets/rectangle-12.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft="unset"
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="Tu"
                rectangle1={require("../assets/rectangle-13.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="We"
                rectangle1={require("../assets/rectangle-14.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="Th"
                rectangle1={require("../assets/rectangle-15.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="Fr"
                rectangle1={require("../assets/rectangle-16.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="Sat"
                rectangle1={require("../assets/rectangle-17.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="Su"
                rectangle1={require("../assets/rectangle-18.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
            </View>
            <View style={[styles.row, styles.rowFlexBox]}>
              <ThemeLightTypeActiveStat
                date="29"
                rectangle1={require("../assets/rectangle-12.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft="unset"
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="30"
                rectangle1={require("../assets/rectangle-13.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="30"
                rectangle1={require("../assets/rectangle-19.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="2"
                rectangle1={require("../assets/rectangle-110.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="3"
                rectangle1={require("../assets/rectangle-111.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="4"
                rectangle1={require("../assets/rectangle-112.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="5"
                rectangle1={require("../assets/rectangle-113.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
            </View>
            <View style={[styles.row, styles.rowFlexBox]}>
              <ThemeLightTypeActiveStat
                date="6"
                rectangle1={require("../assets/rectangle-114.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft="unset"
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="7"
                rectangle1={require("../assets/rectangle-115.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="8"
                rectangle1={require("../assets/rectangle-19.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="9"
                rectangle1={require("../assets/rectangle-110.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="10"
                rectangle1={require("../assets/rectangle-111.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="11"
                rectangle1={require("../assets/rectangle-112.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="12"
                rectangle1={require("../assets/rectangle-113.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
            </View>
            <View style={[styles.row, styles.rowFlexBox]}>
              <ThemeLightTypeActiveStat
                date="13"
                rectangle1={require("../assets/rectangle-116.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft="unset"
                themeLightTypeActiveStatBorderRadius={100}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract1.png")}
                rectangle1={require("../assets/rectangle-115.png")}
                date="14"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract2.png")}
                rectangle1={require("../assets/rectangle-19.png")}
                date="15"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract3.png")}
                rectangle1={require("../assets/rectangle-110.png")}
                date="16"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract4.png")}
                rectangle1={require("../assets/rectangle-111.png")}
                date="17"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract2.png")}
                rectangle1={require("../assets/rectangle-112.png")}
                date="18"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat
                date="19"
                rectangle1={require("../assets/rectangle-117.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                dateColor="#272d37"
                rectangleIconMarginLeft={-8.36}
                rectangleIconLeft="50%"
                rectangleIconWidth={16}
                rectangleIconRight="unset"
                rectangleIconMaxWidth="unset"
                rectangleIconOverflow="unset"
              />
            </View>
            <View style={[styles.row, styles.rowFlexBox]}>
              <ThemeLightTypeActiveStat
                date="20"
                rectangle1={require("../assets/rectangle-118.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft="unset"
                dateColor="#272d37"
                rectangleIconMarginLeft={-8.36}
                rectangleIconLeft="50%"
                rectangleIconWidth={16}
                rectangleIconRight="unset"
                rectangleIconMaxWidth="unset"
                rectangleIconOverflow="unset"
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract5.png")}
                rectangle1={require("../assets/rectangle-115.png")}
                date="21"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract2.png")}
                rectangle1={require("../assets/rectangle-19.png")}
                date="22"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract3.png")}
                rectangle1={require("../assets/rectangle-110.png")}
                date="23"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat1
                subtract={require("../assets/subtract4.png")}
                rectangle1={require("../assets/rectangle-111.png")}
                date="24"
                underline={false}
                themeLightTypeActiveStatMarginLeft={4}
                subtractIconLeft={-9}
              />
              <ThemeLightTypeActiveStat
                date="25"
                rectangle1={require("../assets/rectangle-119.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="#0057ff"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={100}
                dateColor="#fff"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="26"
                rectangle1={require("../assets/rectangle-113.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
            </View>
            <View style={[styles.row, styles.rowFlexBox]}>
              <ThemeLightTypeActiveStat
                date="27"
                rectangle1={require("../assets/rectangle-114.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft="unset"
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="28"
                rectangle1={require("../assets/rectangle-115.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="29"
                rectangle1={require("../assets/rectangle-19.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="30"
                rectangle1={require("../assets/rectangle-110.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="31"
                rectangle1={require("../assets/rectangle-111.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#272d37"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="1"
                rectangle1={require("../assets/rectangle-17.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
              <ThemeLightTypeActiveStat
                date="2"
                rectangle1={require("../assets/rectangle-18.png")}
                underline={false}
                themeLightTypeActiveStatBackgroundColor="unset"
                themeLightTypeActiveStatFlex={1}
                themeLightTypeActiveStatMarginLeft={4}
                themeLightTypeActiveStatBorderRadius={5}
                dateColor="#dae0e6"
                rectangleIconMarginLeft="unset"
                rectangleIconLeft={10}
                rectangleIconWidth="unset"
                rectangleIconRight={10}
                rectangleIconMaxWidth="100%"
                rectangleIconOverflow="hidden"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.augustParent, styles.parentLayout]}>
        <Text style={[styles.august, styles.textTypo]}>August</Text>
        <Text style={[styles.september, styles.textTypo]}>September</Text>
        <Text style={[styles.text, styles.textTypo]}>-</Text>
      </View>
      <View style={[styles.weekParent, styles.parentLayout]}>
        <Text style={[styles.week, styles.weekTypo]}>Week</Text>
        <Text style={[styles.annual, styles.weekTypo]}>Annual</Text>
        <Text style={styles.month}>Month</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.textSMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.textSMedium_size,
    top: 0,
    position: "absolute",
  },
  weekTypo: {
    color: Color.mediumslateblue_100,
    fontSize: FontSize.regular1_size,
    textAlign: "center",
    fontFamily: FontFamily.textSMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  date: {
    alignSelf: "stretch",
  },
  row: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  datesContent: {
    alignSelf: "stretch",
  },
  calendarContent: {
    flex: 1,
  },
  rightCalendar: {
    marginLeft: -168.5,
    top: 72,
    justifyContent: "center",
    flexDirection: "row",
    width: 337,
    left: "50%",
    position: "absolute",
  },
  august: {
    left: 0,
  },
  september: {
    left: 135,
  },
  text: {
    marginLeft: -16.5,
    left: "50%",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.textSMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.textSMedium_size,
  },
  augustParent: {
    left: 81,
    width: 209,
    top: 0,
    height: 20,
  },
  week: {
    left: 0,
  },
  annual: {
    left: 189,
  },
  month: {
    marginLeft: -23.5,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.defaultSystemBlueLight,
    fontSize: FontSize.regular1_size,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  weekParent: {
    top: 36,
    left: 62,
    width: 229,
  },
  rightCalendarParent: {
    marginLeft: -172,
    top: 65,
    height: 308,
    width: 337,
    position: "absolute",
    left: "50%",
  },
});

export default ContainerWrapper;
