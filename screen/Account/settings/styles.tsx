import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
    padding: width * 0.05,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: height * 0.02,
  },
  contentContainer: {
    height: height * 0.6,
    borderRadius: 20,
    padding: width * 0.05,
    backgroundColor: Colors.purpleNavigation,
    justifyContent: "center",
    marginTop: height * 0.1,
  },
});
