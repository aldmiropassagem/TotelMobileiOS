import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import ContainerCard from "./ContainerCard";
import { useNavigation } from "@react-navigation/native";
import SizeSmallIconiconChevron1 from "./SizeSmallIconiconChevron1";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

const AssistanceSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.uititlesectionParent}>
      <View style={styles.uilistdefaultSpaceBlock}>
        <Text style={[styles.information, styles.versionTypo]}>
          Information
        </Text>
        <Text style={[styles.clearAll, styles.allTypo]}>Clear All</Text>
      </View>
      <View style={styles.uilistdefaultParent}>
        <ContainerCard
          iconImageUrl="Help"
          buttonText={require("../assets/ic24book2.png")}
          contextIconText={require("../assets/help-outline.png")}
          propMarginTop="unset"
        />
        <Pressable
          style={[styles.uilistdefault, styles.uilistdefaultSpaceBlock]}
          onPress={() => navigation.navigate("SignOut")}
        >
          <Text style={[styles.version, styles.versionTypo]}>Version</Text>
          <Text style={[styles.seeAll, styles.allTypo]}>See All</Text>
          <Image
            style={styles.ic24bookIcon}
            contentFit="cover"
            source={require("../assets/ic24book1.png")}
          />
          <View style={styles.buttonParent}>
            <Image
              style={styles.buttonIcon}
              contentFit="cover"
              source={require("../assets/button.png")}
            />
            <SizeSmallIconiconChevron1
              tune={require("../assets/phone-android.png")}
              sizeSmallIconiconChevronPosition="unset"
              sizeSmallIconiconChevronMarginLeft={8}
            />
          </View>
        </Pressable>
        <ContainerCard
          iconImageUrl="Terms of Service"
          buttonText={require("../assets/ic24book1.png")}
          contextIconText={require("../assets/text-snippet.png")}
          propMarginTop={16}
        />
        <ContainerCard
          iconImageUrl="Privacy Policy"
          buttonText={require("../assets/ic24book2.png")}
          contextIconText={require("../assets/approval.png")}
          propMarginTop={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  versionTypo: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  allTypo: {
    textAlign: "right",
    display: "none",
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  uilistdefaultSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 390,
    flexDirection: "row",
  },
  information: {
    fontWeight: "500",
    color: Color.labelColorLightSecondary,
    display: "flex",
    width: 89,
    alignItems: "center",
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
  },
  version: {
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
  buttonIcon: {
    borderRadius: Border.br_81xl,
    width: 8,
    height: 8,
  },
  buttonParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  uilistdefault: {
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
  },
  uilistdefaultParent: {
    alignSelf: "stretch",
    marginTop: 8,
  },
  uititlesectionParent: {
    marginTop: 24,
  },
});

export default AssistanceSection;
