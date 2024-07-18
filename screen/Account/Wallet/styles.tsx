import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
    padding: width * 0.05,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: height * 0.2,
  },
  balanceCard: {
    width: "113%",
    borderRadius: 20,
    padding: width * 0.05,
    marginVertical: height * 0.03,
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
    alignItems: "center",
  },
  innerCardDetails: {
    width: "82%",
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
    fontSize: width * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.02,
    fontFamily: "Montserrat",
    marginTop: height * 0.03,
  },
  separator: {
    height: 1,
    backgroundColor: "white",
    marginVertical: height * 0.02,
  },
  winningsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  winningsText: {
    color: "white",
    fontSize: width * 0.04,
    fontFamily: "raleway",
    fontWeight: "bold",
    marginBottom: height * 0.04,
  },
  withdrawButton: {
    backgroundColor: Colors.golden,
    borderRadius: 20,
    paddingVertical: height * 0.004,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.04,
  },
  withdrawButtonText: {
    color: "white",
    fontSize: width * 0.04,
  },
  linkedText: {
    color: "white",
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
    fontWeight: "bold",
  },
  linkedValue: {
    color: Colors.golden,
    fontWeight: "600",
    fontFamily: "Montserrat",
  },
});
