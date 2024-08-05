import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
    alignItems: "center",
    marginTop: "15%",
  },
  card: {
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND_COLOR,
    // height: 626,
    width: "100%",
    borderRadius: 20,
    gap: 20,
    paddingVertical: 20,
    top: 20,
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    // marginVertical: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 20,
  },
  input: {
    height: 50,
    width: 306,
    borderRadius: 20,
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 45,
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  help: {
    display: "flex",
    gap: 20,
  },
  helpCard: {
    width: 390,
    height: 82,
    backgroundColor: Colors.header_Color,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text1: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
  },
  contact: {
    alignItems: "center",
  },
  contactText1: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  contactText2: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
  },
});
