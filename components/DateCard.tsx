import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const DateCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={styles.august2023Parent}>
        <Text style={styles.august2023}>25 August 2023</Text>
        <View style={[styles.event, styles.eventPosition]}>
          <Text style={[styles.am, styles.amTypo]}>8 AM</Text>
          <Text style={[styles.booking1, styles.amTypo]}>Booking 1</Text>
        </View>
        <View style={[styles.event1, styles.eventPosition]}>
          <Text style={[styles.am, styles.amTypo]}>10 AM</Text>
          <Text style={[styles.booking1, styles.amTypo]}>Booking 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventPosition: {
    overflow: "hidden",
    left: 0,
    width: 303,
    position: "absolute",
  },
  amTypo: {
    fontFamily: FontFamily.textSMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.ghostwhite_300,
    top: 0,
    height: 206,
    width: 350,
    left: "50%",
    marginLeft: -175,
    position: "absolute",
  },
  august2023: {
    marginLeft: -65.5,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
    width: 130,
    textAlign: "left",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  am: {
    fontSize: FontSize.regular1_size,
    color: Color.lightSecondary,
  },
  booking1: {
    fontSize: FontSize.textSMedium_size,
    color: Color.lightPrimary,
    marginTop: 8,
  },
  event: {
    top: 34,
  },
  event1: {
    top: 94,
  },
  august2023Parent: {
    marginLeft: -152,
    top: 16,
    height: 134,
    width: 303,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 422,
    height: 206,
    width: 350,
    left: "50%",
    marginLeft: -175,
    position: "absolute",
  },
});

export default DateCard;
