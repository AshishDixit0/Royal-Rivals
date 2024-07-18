import { Colors } from "@/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
  },
  scrollContainer: {
    paddingTop: height * 0.08, // Padding to move content below the navbar
    paddingBottom: height * 0.05, // Padding to ensure last text isn't hidden
    paddingHorizontal: width * 0.05,
  },
  logoContainer: {
    marginBottom: height * 0.02,
  },
  alignLeft: {
    alignItems: "flex-start",
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
    marginBottom: height * 0.03,
    fontFamily: "Montserrat",
  },
  sectionTitle: {
    fontSize: width * 0.06,
    fontWeight: "600",
    color: "white",
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
    fontFamily: "Montserrat",
  },
  text: {
    fontSize: width * 0.04,
    color: "white",
    marginBottom: height * 0.02,
    fontFamily: "Montserrat",
    marginTop: height * 0.02,
    lineHeight: width * 0.04 * 1.22, // line height of 22% more than font size
  },
  subText: {
    fontSize: width * 0.035,
    color: "white",
    marginBottom: height * 0.01,
    paddingLeft: width * 0.05,
    fontFamily: "Montserrat",
    lineHeight: width * 0.035 * 1.22, // line height of 22% more than font size
  },
});
