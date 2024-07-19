import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 667) * size;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
    padding: scale(20), // width * 0.05
    paddingTop: verticalScale(133.4), // height * 0.2
    alignItems: "center",
  },
  depositCard: {
    width: "115%",
    borderRadius: scale(20),
    padding: scale(30),
    borderWidth: scale(2),
    borderColor: Colors.golden,
    marginVertical: verticalScale(10),
  },
  amountButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  amountButton: {
    borderWidth: scale(1),
    borderColor: Colors.golden,
    borderRadius: scale(10),
    padding: scale(10),
    alignItems: "center",
    flex: 1,
    marginHorizontal: scale(5),
  },
  amountButtonText: {
    color: "white",
    fontSize: scale(16),
  },
  input: {
    backgroundColor: Colors.purpleNavigation,
    borderRadius: scale(20),
    padding: scale(15),
    color: "white",
    fontSize: scale(16.875), // width * 0.045
    textAlign: "left",
    marginBottom: verticalScale(6.67), // height * 0.01
    paddingVertical: verticalScale(6.67), // height * 0.01
  },
  minMaxText: {
    color: "white",
    fontSize: scale(13.125), // width * 0.035
    textAlign: "center",
    marginBottom: verticalScale(13.34), // height * 0.02
  },
  depositButton: {
    backgroundColor: Colors.golden,
    borderRadius: scale(20),
    paddingVertical: verticalScale(10),
    alignItems: "center",
    marginVertical: verticalScale(10),
  },
  depositButtonText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "bold",
  },
  depositModesTitle: {
    color: "white",
    fontSize: scale(18.75), // width * 0.05
    fontWeight: "600",
    marginBottom: verticalScale(13.34), // height * 0.02
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.purpleNavigation,
    borderRadius: scale(20),
    padding: scale(20),
    marginBottom: verticalScale(13.34), // height * 0.02
    width: "100%",
  },
  modeTextContainer: {
    flex: 1,
  },
  modeText: {
    color: "white",
    fontSize: scale(16.875), // width * 0.045
  },
  linkedValue: {
    color: Colors.golden,
    fontWeight: "600",
    fontSize: scale(15), // width * 0.04
  },
  linkButton: {
    backgroundColor: Colors.golden,
    borderRadius: scale(10),
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(40),
    alignSelf: "flex-start",
    marginTop: verticalScale(5),
  },
  linkButtonText: {
    color: "white",
    fontSize: scale(13),
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: width * 0.9,
    padding: scale(20),
    borderRadius: scale(10),
    backgroundColor: Colors.accountsPurplePage,
    alignItems: "center",
    borderWidth: scale(2),
    borderColor: Colors.golden,
    height: "40%",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "white",
    fontSize: scale(24),
  },
  modalTitle: {
    color: "white",
    fontSize: scale(18),
    fontWeight: "bold",
    marginVertical: verticalScale(10),
  },
  modalInput: {
    width: "100%",
    backgroundColor: Colors.accountsPurplePage,
    borderRadius: scale(10),
    padding: scale(10),
    color: "white",
    fontSize: scale(16),
    marginVertical: verticalScale(10),
    borderBottomColor: Colors.golden,
    borderBottomWidth: scale(1),
    paddingBottom: scale(5),
  },
  modalInfo: {
    color: "white",
    fontSize: scale(14),
    textAlign: "center",
    marginVertical: verticalScale(10),
    marginTop: verticalScale(20),
  },
  proceedButton: {
    backgroundColor: Colors.golden,
    borderRadius: scale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
    width: "60%",
    height: "14%",
  },
  proceedButtonText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "bold",
    textAlign: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
