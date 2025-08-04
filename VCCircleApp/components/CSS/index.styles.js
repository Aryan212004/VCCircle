import { StyleSheet } from "react-native";

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

export default styles;
