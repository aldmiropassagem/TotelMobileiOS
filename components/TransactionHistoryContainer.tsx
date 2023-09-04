import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TransactionHistoryContainer = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.transactionHistoryParent, styles.parentPosition]}>
        <Text style={[styles.transactionHistory, styles.giftCardTypo]}>
          Transaction history
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275069.png")}
        />
      </View>
      <View style={[styles.taxInformationParent, styles.parentPosition]}>
        <Text style={[styles.transactionHistory, styles.giftCardTypo]}>
          Tax information
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275070.png")}
        />
      </View>
      <View style={[styles.giftCardParent, styles.parentPosition]}>
        <Text style={[styles.giftCard, styles.giftCardTypo]}>Gift card</Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275071.png")}
        />
      </View>
      <View style={[styles.howTotelWorksParent, styles.parentPosition]}>
        <Text style={[styles.howTotelWorks, styles.giftCardTypo]}>
          How Totel works
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275072.png")}
        />
      </View>
      <View style={[styles.contactSupportParent, styles.parentPosition]}>
        <Text style={[styles.transactionHistory, styles.giftCardTypo]}>
          Contact support
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275073.png")}
        />
      </View>
      <View style={[styles.legalParent, styles.parentPosition]}>
        <Text style={[styles.giftCard, styles.giftCardTypo]}>Legal</Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275074.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.accountParentPosition]}>
        <View style={[styles.accountParent, styles.accountParentPosition]}>
          <Text style={[styles.transactionHistory, styles.giftCardTypo]}>
            Account
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-11712750681.png")}
          />
        </View>
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1171275356.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 28,
    left: 0,
    position: "absolute",
  },
  giftCardTypo: {
    textAlign: "left",
    color: Color.darkslategray_200,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "500",
    lineHeight: 28,
    fontSize: FontSize.size_base,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 24,
    width: 24,
    top: 2,
    position: "absolute",
  },
  accountParentPosition: {
    top: 0,
    height: 28,
    left: 0,
    position: "absolute",
  },
  transactionHistory: {
    left: 40,
  },
  groupChild: {
    left: 0,
  },
  transactionHistoryParent: {
    top: 51,
    width: 189,
  },
  taxInformationParent: {
    top: 103,
    width: 160,
  },
  giftCard: {
    left: 39,
  },
  giftCardParent: {
    top: 155,
    width: 107,
  },
  howTotelWorks: {
    left: 37,
  },
  howTotelWorksParent: {
    top: 207,
    width: 164,
  },
  contactSupportParent: {
    top: 259,
    width: 167,
  },
  legalParent: {
    top: 311,
    width: 81,
  },
  accountParent: {
    width: 104,
  },
  groupChild4: {
    left: 306,
  },
  groupContainer: {
    width: 330,
  },
  groupParent: {
    top: 184,
    height: 339,
    width: 330,
    left: 0,
    position: "absolute",
  },
});

export default TransactionHistoryContainer;
