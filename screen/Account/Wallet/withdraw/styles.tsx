import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
    padding: width * 0.05,
    paddingTop: height * 0.2, // Adjust paddingTop for responsiveness
    alignItems: "center",
  },
  balanceCard: {
    width: "112%",
    borderRadius: 20,
    padding: width * 0.05,
    marginVertical: height * 0.001,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 0.7,
    borderRightWidth: 0.7,
    borderColor: Colors.golden,
    // backgroundColor: Colors.purpleNavigation,
  },
  balanceTitle: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: height * 0.01,
  },
  balanceAmount: {
    color: "white",
    fontSize: width * 0.08,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.01,
  },
  winningsText: {
    color: "white",
    fontSize: width * 0.045,
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  withdrawableText: {
    color: "white",
    fontSize: width * 0.045,
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  input: {
    backgroundColor: Colors.accountsPurplePage,
    borderRadius: 20,
    padding: width * 0.03,
    color: "white",
    fontSize: width * 0.045,
    textAlign: "center",
    marginBottom: height * 0.01,
  },
  minMaxText: {
    color: "white",
    fontSize: width * 0.035,
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  withdrawalModesTitle: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "600",
    marginBottom: height * 0.02,
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.purpleNavigation,
    borderRadius: 20,
    padding: width * 0.05,
    marginBottom: height * 0.02,
    width: "100%",
  },
  modeTextContainer: {
    flex: 1,
  },
  modeText: {
    color: "white",
    fontSize: width * 0.045,
  },
  linkedValue: {
    color: Colors.golden,
    fontWeight: "600",
    fontSize: width * 0.04,
  },
  withdrawButton: {
    backgroundColor: Colors.golden,
    borderRadius: 20,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    alignSelf: "center",
    marginTop: height * 0.02,
  },
  withdrawButtonText: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "600",
  },
});
