import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header/Header";
import MainHeader from "../../components/Header/MainHeader";
import Subscribe from "./Subscribe";
import Industry from "./industry";
import ContentSection from "../../components/Content/ContentSection";
import { SafeAreaView } from "react-native-safe-area-context";
import SideMenu from "../../components/Menu/SideMenu";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ArticleCard from "@/components/Content/ArticleCard";
import AdSection from "@/components/Content/AdSection";
import ArticlePreview from "@/components/Content/ArticlePreview";
const { width } = Dimensions.get("window");

const featuredArticle = {
  id: 1,
  title:
    "Nexus Venture Partners scripting over $350-mn exit with a multi-bagger",
  summary:
    "Nexus Venture Partners, a venture capital firm that invests in early- and growth-stage startups in India and the US, has...",
  category: "Healthcare",
  date: "01 July",
  author: "Malvika Maloo",
  imageUrl:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
  isPro: true,
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedCountry, setSelectedCountry] = useState("IND");
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log("Menu toggled");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <View style={styles.fullScreenContainer}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <View style={styles.topSubscribeRegion}>
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={() => navigation.navigate("Subscribe")}
          >
            <Text style={styles.subscribeText}>Subscribe</Text>
          </TouchableOpacity>

          <View style={styles.languageToggle}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedCountry === "IND" && styles.selectedButton,
              ]}
              onPress={() => setSelectedCountry("IND")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedCountry === "IND" && styles.selectedText,
                ]}
              >
                IND
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedCountry === "MEA" && styles.selectedButton,
              ]}
              onPress={() => setSelectedCountry("MEA")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedCountry === "MEA" && styles.selectedText,
                ]}
              >
                MEA
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.brandingSection}>
          <TouchableOpacity
            onPress={() =>
              scrollViewRef.current?.scrollTo({ y: 0, animated: true })
            }
          >
            <Image
              source={require("../../assets/VCC.jpg")}
              style={styles.vccImage}
            />
          </TouchableOpacity>
          <SafeAreaView style={styles.container}>
            <Header />
            <MainHeader onMenuPress={handleMenuToggle} />
            <ContentSection />
            <SideMenu visible={isMenuOpen} onClose={handleMenuClose} />
          </SafeAreaView>
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <ArticleCard article={featuredArticle} />

        <AdSection />

        <ArticlePreview category={"Finance"} />

        <ArticleCard article={featuredArticle} />
        {/* <View style={styles.latestStoriesContainer}>
          <Text style={styles.latestStoriesTitle}>Latest Stories</Text>

          <View style={styles.latestStoryCard}>
            <Image
              source={require("../../assets/latest.jpg")}
              style={styles.latestStoryImage}
            />
            <View style={styles.premiumBadgeOverlayLatest}>
              <Text style={styles.premiumBadgeText}>PREMIUM</Text>
            </View>

            <View style={styles.latestStoryContent}>
              <View style={styles.LatestStoriesItemMeta}>
                <Text style={styles.latestStoryCategory}>GENERAL</Text>
                <Text style={styles.LatestStoriesItemDate}>16 July</Text>
              </View>
              <Text style={styles.latestStoryTitle}>
                Grapevine: Zelestra, The Executive Centre, AceVector in news
              </Text>
              <View style={styles.LatestStoriesAuthorRow}>
                <Ionicons name="person-circle-outline" size={12} color="gray" />
                <Text style={styles.articleListItemAuthor}>Nitesh Kumar</Text>
              </View>
            </View>
          </View>
        </View> */}

        <View style={styles.articleListItem}>
          <Image
            source={require("../../assets/healthcare_item.jpg")}
            style={styles.articleListItemImage}
          />
          <View style={styles.articleListItemContent}>
            <View style={styles.articleListItemMeta}>
              <Text style={styles.articleListItemCategory}>HEALTHCARE</Text>
              <Text style={styles.articleListItemDate}>15 July</Text>
            </View>
            <Text style={styles.articleListItemTitle}>
              GIC-backed Asia Healthcare eyes majority stake in diagnostic chain
            </Text>
            <View style={styles.articleListItemAuthorRow}>
              <Ionicons name="person-circle-outline" size={12} color="gray" />
              <Text style={styles.articleListItemAuthor}>
                Debjyoti Roy, Prithvi Durai
              </Text>
            </View>
          </View>
          <View style={styles.premiumBadgeOverlay}>
            <Text style={styles.premiumBadgeText}>PREMIUM</Text>
          </View>
        </View>

        <View style={styles.articleListItem}>
          <Image
            source={require("../../assets/kettleborough_item.jpg")}
            style={styles.articleListItemImage}
          />
          <View style={styles.articleListItemContent}>
            <View style={styles.articleListItemMeta}>
              <Text style={styles.articleListItemCategory}>FINANCE</Text>
              <Text style={styles.articleListItemDate}>16 July</Text>
            </View>
            <Text style={styles.articleListItemTitle}>
              Kettleborough VC makes first close of second early-stage fund
            </Text>
            <View style={styles.articleListItemAuthorRow}>
              <Ionicons name="person-circle-outline" size={12} color="gray" />
              <Text style={styles.articleListItemAuthor}>Aman Rawat</Text>
            </View>
          </View>
        </View>

        <View style={styles.articleListItem}>
          <Image
            source={require("../../assets/consumer_item.jpg")}
            style={styles.articleListItemImage}
          />
          <View style={styles.articleListItemContent}>
            <View style={styles.articleListItemMeta}>
              <Text style={styles.articleListItemCategory}>CONSUMER</Text>
              <Text style={styles.articleListItemDate}>16 July</Text>
            </View>
            <Text style={styles.articleListItemTitle}>
              Bottomline: VC-backed Footprints Preschool rebounds strongly
              post-COVID
            </Text>
            <View style={styles.articleListItemAuthorRow}>
              <Ionicons name="person-circle-outline" size={12} color="gray" />
              <Text style={styles.articleListItemAuthor}>Prithvi Durai</Text>
            </View>
          </View>
          <View style={styles.premiumBadgeOverlay}>
            <Text style={styles.premiumBadgeText}>PREMIUM</Text>
          </View>
        </View>

        <View style={styles.articleListItem}>
          <Image
            source={require("../../assets/sebi_item.jpg")}
            style={styles.articleListItemImage}
          />
          <View style={styles.articleListItemContent}>
            <View style={styles.articleListItemMeta}>
              <Text style={styles.articleListItemCategory}>FINANCE</Text>
              <Text style={styles.articleListItemDate}>15 July</Text>
            </View>
            <Text style={styles.articleListItemTitle}>
              SEBI unveils settlement scheme for legacy VC funds that moved to
              AIF regime
            </Text>
            <View style={styles.articleListItemAuthorRow}>
              <Ionicons name="person-circle-outline" size={12} color="gray" />
              <Text style={styles.articleListItemAuthor}>Asha Menon</Text>
            </View>
          </View>
        </View>

        <View style={styles.lpHeader}>
          <Text style={styles.lpTitle}>LP Corner</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lpScroll}
        >
          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <View style={styles.premiumTag}>
              <Text style={styles.premiumText}>PREMIUM</Text>
            </View>
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/latest.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpDate}>11 July</Text>
            <Text style={styles.lpText}>
              Verlinvest’s Arjun Anand on sectors, exits, and more
            </Text>
            <Text style={styles.lpAuthor}>• Debjyoti Roy</Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <View style={styles.premiumTag}>
              <Text style={styles.premiumText}>PREMIUM</Text>
            </View>
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>
        </ScrollView>

        <View style={styles.lpHeader}>
          <Text style={styles.lpTitle}>Startups</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lpScroll}
        >
          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>
        </ScrollView>

        <View style={styles.lpHeader}>
          <Text style={styles.lpTitle}>Interview</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lpScroll}
        >
          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>
        </ScrollView>

        <View style={styles.lpHeader}>
          <Text style={styles.lpTitle}>Analysis</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lpScroll}
        >
          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>
        </ScrollView>

        <View style={styles.lpHeader}>
          <Text style={styles.lpTitle}>International</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lpScroll}
        >
          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>
        </ScrollView>

        <View style={styles.lpHeader}>
          <Text style={styles.lpTitle}>People</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lpScroll}
        >
          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.lpCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.lpImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>
        </ScrollView>

        <View style={styles.RLHeader}>
          <Text style={styles.RLTitle}>Resource Library</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.RLscroll}
        >
          <View style={styles.RLCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.RLImage}
            />
            <Text style={styles.lpText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.RLCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.RLImage}
            />
            <Text style={styles.RLText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>

          <View style={styles.RLCard}>
            <Image
              source={require("../../assets/hero.jpg")}
              style={styles.RLImage}
            />
            <Text style={styles.RLText}>
              A91 Partners makes first close of fourth India fund
            </Text>
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <Image
            source={require("../../assets/mosaic-digital-logo.png")}
            style={styles.footerLogo}
          />

          <View style={styles.socialIcons}>
            <Text style={styles.socialIcon}>F</Text>
            <Text style={styles.socialIcon}></Text>
            <Text style={styles.socialIcon}></Text>
          </View>

          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>About Us</Text>
            <Text style={styles.footerLink}>Advertise with us</Text>
            <Text style={styles.footerLink}>Contact Us</Text>
            <Text style={styles.footerLink}>Copyright</Text>
            <Text style={styles.footerLink}>Privacy Policy</Text>
            <Text style={styles.footerLink}>Terms of use</Text>
            <Text style={styles.footerLink}>Company Listing</Text>
            <Text style={styles.footerLink}>Tag Listing</Text>
          </View>

          <Text style={styles.productsHeading}>Our Products :</Text>
          <Text style={styles.footerProducts}>
            VCCircle TechCircle Events Training VCCEdge SalesEdge PartnerEdge
            Edge Insights
          </Text>

          <Text style={styles.footerCopyright}>
            Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures
            Pvt. Ltd.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: "white",
    paddingHorizontal: 140,
    paddingVertical: -90,
    right: -85,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    padding: 5,
    borderRadius: 10,
    alignSelf: "flex-end",
  },

  toggleButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 0,
    marginHorizontal: 0,
    right: 0,
  },
  selectedButton: {
    backgroundColor: "blue",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  selectedText: {
    color: "white",
  },

  header: {
    paddingHorizontal: 0,
    paddingTop: 45,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 10,
  },
  topSubscribeRegion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 2,
  },
  subscribe: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  subscribeButton: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  subscribeText: {
    color: "#e0e0e0",
    fontWeight: "bold",
    fontSize: 20,
  },
  languageToggle: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  activeLang: {
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  activeLangText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  inactiveLang: {
    backgroundColor: "transparent",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inactiveLangText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  brandingSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  vccImage: {
    width: 150,
    height: 30,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  articleCard: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: width * 0.55,
    borderRadius: 8,
    resizeMode: "cover",
  },
  proBadgeContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#007bff",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1,
  },
  proBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  premiumBadgeContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#a03b30",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1,
  },
  premiumBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  category: {
    color: "#007bff",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    lineHeight: 24,
    paddingHorizontal: 5,
  },
  date: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
    paddingHorizontal: 5,
  },
  desc: {
    fontSize: 14,
    marginTop: 8,
    color: "#444",
    lineHeight: 20,
    paddingHorizontal: 5,
  },
  teamVCCRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  teamVCCText: {
    fontSize: 12,
    color: "gray",
    marginLeft: 5,
    fontWeight: "500",
  },
  adLabel: {
    fontSize: 12,
    color: "gray",
    marginVertical: 15,
    textAlign: "center",
    textTransform: "uppercase",
  },
  adContainer: {
    backgroundColor: "#f8f8f8",
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },
  adImage: {
    width: "100%",
    height: width * 0.45,
    resizeMode: "cover",
  },
  visitWebsiteButton: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  visitWebsiteButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
  articleListItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    marginBottom: 0,
    position: "relative",
  },
  articleListItemImage: {
    width: 90,
    height: 70,
    borderRadius: 8,
    resizeMode: "cover",
    marginRight: 10,
  },
  articleListItemContent: {
    flex: 1,
    justifyContent: "center",
  },
  articleListItemMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  articleListItemCategory: {
    color: "#007bff",
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  articleListItemDate: {
    fontSize: 11,
    color: "gray",
  },
  articleListItemTitle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    marginBottom: 4,
  },
  articleListItemAuthorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  articleListItemAuthor: {
    fontSize: 11,
    color: "gray",
    marginLeft: 3,
  },
  premiumBadgeOverlay: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "#ff6a00",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  latestStoriesContainer: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 10,
  },

  latestStoriesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  latestStoryCard: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: 15,
  },

  latestStoryImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  latestStoryContent: {
    padding: 5,
  },

  latestStoryCategory: {
    color: "#3269ff",
    fontSize: 12,
    fontWeight: "bold",
  },

  latestStoryTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
    marginBottom: 8,
  },
  LatestStoriesItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    marginBottom: 0,
    position: "relative",
  },
  LatestStoriesItemImage: {
    width: 90,
    height: 70,
    borderRadius: 8,
    resizeMode: "cover",
    marginRight: 10,
  },
  LatestStoriesItemContent: {
    flex: 1,
    justifyContent: "center",
  },
  LatestStoriesItemMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  LatestStoriesItemCategory: {
    color: "#007bff",
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  LatestStoriesItemDate: {
    fontSize: 11,
    color: "gray",
  },
  LatestStoriesItemTitle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    marginBottom: 4,
  },
  LatestStoriesAuthorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  LatestStoriesAuthor: {
    fontSize: 11,
    color: "gray",
    marginLeft: 3,
  },

  premiumBadgeOverlayLatest: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ff6a00",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 10,
  },
  lpHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  lpTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewMore: {
    color: "#000",
    fontSize: 14,
  },
  lpScroll: {
    marginTop: 10,
  },
  lpCard: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: 20,
  },
  lpImage: {
    width: "100%",
    height: 190,
    borderRadius: 10,
  },
  lpText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "600",
  },
  lpDate: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
  },
  lpAuthor: {
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },
  premiumTag: {
    position: "absolute",
    bottom: 6,
    right: 5,
    backgroundColor: "#FFA500",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  premiumText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  footerContainer: {
    backgroundColor: "#000",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 10,
    marginBottom: 200,
  },

  footerLogo: {
    width: 1500,
    height: 30,
    resizeMode: "contain",
    marginBottom: 10,
  },

  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },

  socialIcon: {
    fontSize: 24,
    marginHorizontal: 10,
  },

  footerLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 15,
  },

  footerLink: {
    color: "white",
    marginHorizontal: 8,
    marginVertical: 5,
    fontSize: 14,
    textDecorationLine: "underline",
  },

  productsHeading: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
    marginBottom: 5,
  },

  footerProducts: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },

  footerCopyright: {
    textAlign: "center",
    fontSize: 12,
    color: "#888",
    marginTop: 10,
  },
  RLHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  RLTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  RLscroll: {
    marginTop: 10,
  },
  RLCard: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "Gray",
    overflow: "hidden",
    marginBottom: 20,
  },
  RLImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  RLText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "600",
  },
  RLDate: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
  },
  RLAuthor: {
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },
});
