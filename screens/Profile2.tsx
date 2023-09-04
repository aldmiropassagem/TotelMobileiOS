import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormContainer from "../components/FormContainer";
import AccountContainer from "../components/AccountContainer";
import TopNavigationContainer from "../components/TopNavigationContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Profile2 = () => {
  return (
    <View style={styles.profile2}>
      <View style={[styles.profile2Inner, styles.frameWrapperLayout]}>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={[styles.settingsWrapper, styles.tabBarFlexBox]}>
            <Text style={styles.settings}>Settings</Text>
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
            source={require("../assets/confirmation-number1.png")}
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
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.vectorParent, styles.groupParentPosition]}>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-874.png")}
          />
          <FormContainer />
        </View>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={styles.switchToGuest}>Switch to guest mode</Text>
          </View>
        </View>
        <View style={[styles.vectorGroup, styles.groupParentPosition]}>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-874.png")}
          />
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={styles.logout}>Logout</Text>
            <Image
              style={styles.layer1Icon}
              contentFit="cover"
              source={require("../assets/layer1.png")}
            />
          </View>
        </View>
        <View style={styles.groupContainer}>
          <View style={[styles.groupView, styles.groupViewPosition]}>
            <View
              style={[
                styles.transactionHistoryParent,
                styles.groupViewPosition,
              ]}
            >
              <Text style={[styles.transactionHistory, styles.giftCardTypo]}>
                Transaction history
              </Text>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-1171275069.png")}
              />
            </View>
            <View style={styles.taxInformationParent}>
              <Text style={[styles.transactionHistory, styles.giftCardTypo]}>
                Tax information
              </Text>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-1171275070.png")}
              />
            </View>
            <View style={styles.giftCardParent}>
              <Text style={[styles.giftCard, styles.giftCardTypo]}>
                Gift card
              </Text>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-1171275071.png")}
              />
            </View>
            <View style={styles.howTotelWorksParent}>
              <Text style={[styles.howTotelWorks, styles.giftCardTypo]}>
                How Totel works
              </Text>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-1171275072.png")}
              />
            </View>
            <View style={styles.contactSupportParent}>
              <Text style={[styles.transactionHistory, styles.giftCardTypo]}>
                Contact support
              </Text>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-1171275073.png")}
              />
            </View>
            <View style={styles.legalParent}>
              <Text style={[styles.giftCard, styles.giftCardTypo]}>Legal</Text>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-1171275074.png")}
              />
            </View>
          </View>
          <AccountContainer />
        </View>
      </View>
      <TopNavigationContainer />
    </View>
  );
};

const styles = StyleSheet.create({
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
  groupParentPosition: {
    width: 350,
    left: "50%",
    marginLeft: -175,
    position: "absolute",
  },
  groupPosition: {
    height: 1,
    width: 350,
    left: "50%",
    marginLeft: -175,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    width: 350,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 165,
    height: 50,
    position: "absolute",
  },
  groupViewPosition: {
    width: 189,
    left: 0,
    position: "absolute",
  },
  giftCardTypo: {
    color: Color.darkslategray_200,
    fontWeight: "500",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  settings: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.3,
    lineHeight: 40,
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorLightPrimary,
    width: 308,
    textAlign: "left",
    fontWeight: "600",
  },
  settingsWrapper: {
    top: 20,
    left: 20,
    width: 311,
    paddingRight: Padding.p_406xl,
  },
  frameWrapper: {
    top: 0,
  },
  profile2Inner: {
    top: 47,
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
    bottom: 11,
    borderStyle: "solid",
    borderColor: "#f2f2f7",
    borderTopWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    width: 390,
    justifyContent: "center",
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  groupChild: {
    top: 77,
  },
  vectorParent: {
    height: 77,
    top: 0,
  },
  groupItem: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.defaultSystemBlueLight,
    top: 0,
  },
  switchToGuest: {
    top: 10,
    left: 91,
    letterSpacing: 0,
    color: Color.systemBackgroundLightPrimary,
    textAlign: "justify",
    width: 168,
    height: 20,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 28,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
  },
  groupWrapper: {
    top: 101,
  },
  groupInner: {
    top: 0,
  },
  rectangleView: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.tomato_200,
    top: 0,
    left: 0,
  },
  logout: {
    top: 14,
    left: 75,
    fontSize: FontSize.textSMedium_size,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.tomato_100,
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  layer1Icon: {
    height: "44%",
    width: "13.33%",
    top: "28%",
    right: "60.61%",
    bottom: "28%",
    left: "26.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 32,
    left: 93,
  },
  vectorGroup: {
    top: 707,
    height: 82,
  },
  transactionHistory: {
    left: 40,
  },
  groupIcon: {
    top: 2,
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
  },
  transactionHistoryParent: {
    height: 28,
    top: 0,
  },
  taxInformationParent: {
    top: 52,
    width: 160,
    height: 28,
    left: 0,
    position: "absolute",
  },
  giftCard: {
    left: 39,
  },
  giftCardParent: {
    top: 104,
    width: 107,
    height: 28,
    left: 0,
    position: "absolute",
  },
  howTotelWorks: {
    left: 37,
  },
  howTotelWorksParent: {
    top: 156,
    width: 164,
    height: 28,
    left: 0,
    position: "absolute",
  },
  contactSupportParent: {
    top: 208,
    width: 167,
    height: 28,
    left: 0,
    position: "absolute",
  },
  legalParent: {
    top: 260,
    width: 81,
    height: 28,
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 204,
    height: 288,
  },
  groupContainer: {
    top: 183,
    width: 330,
    height: 492,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 131,
    height: 789,
  },
  profile2: {
    width: "100%",
    height: 1022,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Profile2;
