import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
  },
  scroll: {
    flex: 1,
    marginTop: 20,
  },
  banner: {
    height: height * 0.35,
    width: width,
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomRightRadius: 200,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  logotext: {
    height: height * 0.34,
    width: width * 0.99,
  },
});
