import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
    paddingHorizontal: "5%",
    paddingTop: "10%",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%",
    marginBottom: "44%",
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    marginTop: "30%",
    marginBottom: "5%",
  },
  tabButton: {
    borderRadius: 20,
    paddingVertical: "2%",
    paddingHorizontal: "10%",
  },
  activeTabButton: {
    backgroundColor: Colors.golden,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.purpleNavigation,
    borderRadius: 20,
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    marginBottom: "2%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginRight: "5%",
  },
  icon: {
    width: 40, // Adjusted size for the icon
    height: 40,
  },
  detailsContainer: {
    flex: 1,
  },
  status: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  type: {
    color: "white",
    fontSize: 14,
  },
  dateTime: {
    color: "white",
    fontSize: 14,
  },
  amount: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
