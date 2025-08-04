import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import FAQPage from "../../components/Subscribe/FAQPage";
import KnowTeam from "../../components/Subscribe/KnowTeam";
import ChoosePlan from "../../components/Subscribe/ChoosePlan/ChoosePlan";
import { useNavigation, useRoute } from "@react-navigation/native";
import index from "./index";
import CorporatePlan from "../../components/Subscribe/CorporatePlan/CorporatePlan";

const Subscribe = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const subscriptionType = route.params?.type || "regular";

  const renderContent = () => {
    if (subscriptionType === "corporate") {
      return <CorporatePlan />;
    } else {
      return (
        <>
          <ChoosePlan />
          <KnowTeam />
          <FAQPage />
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("index")}>
          <Image
            source={require("../../assets/VCC.jpg")}
            style={styles.vccImage}
          />
        </TouchableOpacity>
        <View style={styles.emailContainer}>
          <Text style={styles.email}>📧subscription@vccircle.com</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {renderContent()}
        </ScrollView>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY</Text>
          <Text style={styles.footerText}>TERMS AND CONDITIONS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    position: "relative",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 60,
  },
  logo: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  vccImage: {
    width: 150,
    height: 34,
    resizeMode: "contain",
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mailIcon: {
    fontSize: 16,
    marginRight: 220,
  },
  email: {
    color: "Black",
    fontSize: 14,
  },
  footerContainer: {
    backgroundColor: "#3a3a3a",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 75,
    marginBottom: 20,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  footerText: {
    color: "white",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
});

export default Subscribe;
