import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
  },
  scrollContainer: {
    paddingTop: height * 0.04, // Padding to move content below the navbar
    paddingBottom: height * 0.03, // Padding to ensure last text isn't hidden
    paddingHorizontal: width * 0.05,
  },
  logoContainer: {
    marginBottom: height * 0.02,
  },
  alignRight: {
    alignItems: "flex-end",
  },
  alignCenter: {
    alignItems: "center",
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "600",
    color: "white",
    marginBottom: height * 0.02,
    fontFamily: "Montserrat",
  },
  sectionTitle: {
    fontSize: width * 0.06,
    fontWeight: "600",
    color: "white",
    marginTop: height * 0.015,
    marginBottom: height * 0.02,
    fontFamily: "Montserrat",
  },
  text: {
    fontSize: width * 0.04,
    color: "white",
    marginBottom: height * 0.015,
    fontFamily: "Montserrat",
    lineHeight: width * 0.04 * 1.22, // line height of 22% more than font size
  },
  numberedText: {
    fontSize: width * 0.04,
    color: "white",
    marginBottom: height * 0.015,
    fontFamily: "Montserrat",
    lineHeight: width * 0.04 * 1.22, // line height of 22% more than font size
    marginLeft: width * 0.05,
  },
  bulletText: {
    fontSize: width * 0.04,
    color: "white",
    marginBottom: height * 0.015,
    fontFamily: "Montserrat",
    lineHeight: width * 0.04 * 1.22, // line height of 22% more than font size
    marginLeft: width * 0.02,
  },
});
