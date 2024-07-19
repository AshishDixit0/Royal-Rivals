import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND_COLOR,
    paddingHorizontal: 20,
  },
  appLogo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoText: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "gold",
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: "white",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  otpDash: {
    width: width * 0.12,
    height: 2,
    backgroundColor: "white",
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  otpText: {
    position: "absolute",
    top: -40,
    fontSize: width * 0.08,
    color: "white",
  },
  resendOtp: {
    marginBottom: 20,
    width: "50%",
    fontSize: width * 0.04,
    textAlign: "center",
  },
  breakLine: {
    width: "90%",
    height: 1,
    backgroundColor: "white",
    marginVertical: 10,
  },
  button: {
    backgroundColor: Colors.golden,
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.1,
    marginTop: 20,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: width * 0.04,
    textAlign: "center",
  },
  keypad: {
    width: "80%",
  },
  keypadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  iconButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    height: width * 0.15, // Responsive height
    width: width * 0.15, // Responsive width
    shadowColor: "#171717",
    shadowOffset: { width: -5, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
