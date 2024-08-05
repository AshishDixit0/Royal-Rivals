import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 667) * size;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
  },
  innercontainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: height * 0.09,
  },
  homebox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  banner: {
    height: "45%",
    width: "100%",
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10, // for Android
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logotext: {
    height: 225,
    width: 300,
  },
  bannerText: {
    position: "absolute",
    top: verticalScale(20),
    fontSize: scale(24),
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
  },
  games: {
    marginTop: height * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bg: {
    width: scale(170),
    height: verticalScale(130),
  },
  Ludo: {
    top: -verticalScale(145),
    left: -scale(12),
    width: scale(190),
    height: verticalScale(160),
  },
  Snake: {
    top: -verticalScale(150),
    width: scale(160),
    height: verticalScale(160),
  },
  gameText: {
    textAlign: "center",
    marginTop: -verticalScale(150),
    color: "white",
    fontSize: scale(19),
    fontFamily: "Montserrat-Bold",
  },
});
