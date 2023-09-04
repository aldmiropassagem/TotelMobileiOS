import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import PriceFilter from "../components/PriceFilter";
import TopNavigationContainer from "../components/TopNavigationContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Business1 = () => {
  return (
    <View style={[styles.business1, styles.tabBarBg]}>
      <View style={[styles.business1Inner, styles.frameWrapperLayout]}>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={[styles.businessWrapper, styles.tabBarFlexBox]}>
            <Text style={styles.business}>Business</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={styles.groupPosition}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={[styles.earnings, styles.earningsLayout]}>
              Earnings
            </Text>
          </View>
          <Text style={[styles.reviews, styles.reviewsClr]}>Reviews</Text>
        </View>
        <View style={[styles.earnedIn2023Parent, styles.groupInnerPosition]}>
          <Text style={[styles.earnedIn2023, styles.earningsLayout]}>
            $100 earned in 2023
          </Text>
          <Text style={[styles.allEarningsAdjustments, styles.earningsLayout]}>
            All earnings adjustments included
          </Text>
        </View>
        <Image
          style={[styles.groupInner, styles.groupInnerPosition]}
          contentFit="cover"
          source={require("../assets/group-1171275102.png")}
        />
        <PriceFilter />
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View
            style={[styles.bookingEarningsParent, styles.groupContainerLayout]}
          >
            <Text style={[styles.bookingEarnings, styles.earningsLayout]}>
              <Text style={styles.text}>
                <Text style={[styles.text1, styles.text1Typo]}>$100</Text>
                <Text style={styles.text2}>{` `}</Text>
              </Text>
              <Text style={styles.reviewsClr}>Booking earnings</Text>
            </Text>
            <Image
              style={[styles.ellipseIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-1795.png")}
            />
          </View>
          <View style={[styles.upcomingEarningsParent, styles.parentPosition]}>
            <Text style={[styles.bookingEarnings, styles.earningsLayout]}>
              <Text style={styles.text}>
                <Text style={[styles.text1, styles.text1Typo]}>$0</Text>
                <Text style={styles.text2}>{` `}</Text>
              </Text>
              <Text style={styles.reviewsClr}>Upcoming earnings</Text>
            </Text>
            <Image
              style={[styles.ellipseIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-17951.png")}
            />
          </View>
          <View style={[styles.reimbursementsParent, styles.parentPosition]}>
            <Text style={[styles.bookingEarnings, styles.earningsLayout]}>
              <Text style={styles.text}>
                <Text style={[styles.text1, styles.text1Typo]}>$0</Text>
                <Text style={styles.text2}>{` `}</Text>
              </Text>
              <Text style={styles.reviewsClr}>Reimbursements</Text>
            </Text>
            <Image
              style={[styles.ellipseIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-17952.png")}
            />
          </View>
          <View style={[styles.missedEarningsParent, styles.parentPosition]}>
            <Text style={[styles.bookingEarnings, styles.earningsLayout]}>
              <Text style={styles.text}>
                <Text style={[styles.text1, styles.text1Typo]}>$0</Text>
                <Text style={styles.text2}>{` `}</Text>
              </Text>
              <Text style={styles.reviewsClr}>Missed earnings</Text>
            </Text>
            <Image
              style={[styles.ellipseIcon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-17953.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarFlexBox]}>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/confirmation-number.png")}
          />
        </View>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/notifications.png")}
          />
        </View>
        <View style={styles.lightTabItem}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/account-circle.png")}
          />
        </View>
      </View>
      <TopNavigationContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarBg: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    overflow: "hidden",
  },
  frameWrapperLayout: {
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  tabBarFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  parentPosition: {
    position: "absolute",
    left: 0,
  },
  groupChildPosition: {
    height: 44,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 195,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
  },
  earningsLayout: {
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  reviewsClr: {
    color: Color.darkslategray_200,
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  groupInnerPosition: {
    top: 64,
    position: "absolute",
  },
  groupContainerLayout: {
    width: 205,
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  business: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.3,
    lineHeight: 40,
    fontFamily: FontFamily.interSemiBold,
    width: 308,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  businessWrapper: {
    top: 20,
    width: 311,
    paddingRight: Padding.p_406xl,
    left: 20,
  },
  frameWrapper: {
    top: 0,
  },
  business1Inner: {
    top: 47,
  },
  groupChild: {
    backgroundColor: Color.ghostwhite_200,
  },
  groupItem: {
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    backgroundColor: Color.lightsteelblue,
  },
  earnings: {
    marginLeft: -33.5,
    color: Color.defaultSystemBlueLight,
    width: 68,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    left: "50%",
    top: 8,
    fontWeight: "600",
  },
  reviews: {
    marginLeft: 65,
    width: 65,
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_base,
    left: "50%",
    top: 8,
    fontWeight: "600",
  },
  earnedIn2023: {
    fontSize: 24,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    top: 0,
    left: 0,
  },
  allEarningsAdjustments: {
    top: 32,
    fontSize: FontSize.regular1_size,
    color: "#616161",
    width: 188,
    height: 18,
    fontFamily: FontFamily.defaultBoldFootnote,
    left: 0,
  },
  earnedIn2023Parent: {
    width: 243,
    height: 50,
    left: 20,
  },
  groupInner: {
    left: 338,
    width: 32,
    height: 32,
  },
  text1: {
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  text2: {
    fontWeight: "500",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  text: {
    color: Color.labelColorLightPrimary,
  },
  bookingEarnings: {
    left: 32,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    top: 0,
  },
  ellipseIcon: {
    top: 6,
    width: 16,
    height: 16,
    left: 0,
  },
  bookingEarningsParent: {
    height: 28,
    top: 0,
    left: 0,
  },
  upcomingEarningsParent: {
    top: 36,
    width: 203,
    height: 28,
    left: 0,
  },
  reimbursementsParent: {
    top: 72,
    width: 183,
    height: 28,
    left: 0,
  },
  missedEarningsParent: {
    top: 108,
    width: 179,
    height: 28,
    left: 0,
  },
  groupContainer: {
    top: 404,
    height: 136,
    left: 20,
  },
  groupParent: {
    top: 147,
    height: 540,
    width: 390,
    left: 0,
  },
  houseIcon: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  lightTabItem: {
    alignItems: "center",
    flex: 1,
  },
  tabBar: {
    bottom: 0,
    left: 1,
    borderStyle: "solid",
    borderColor: "#f2f2f7",
    borderTopWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    width: 390,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  business1: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Business1;
