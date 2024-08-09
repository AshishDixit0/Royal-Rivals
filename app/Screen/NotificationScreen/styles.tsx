import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
    marginTop: 70,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  titleInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  mark: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  newText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  scroll: {
    flex: 1,
    marginTop: 20,
  },
  banner: {
    height: 270,
    width: width,
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomRightRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logotext: {
    height: 225,
    width: 300,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30%",
    // marginBottom: ,
    paddingTop: -11,
    backgroundColor: Colors.BACKGROUND_COLOR,
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
    // alignItems: "center",
    backgroundColor: Colors.purpleNavigation,
    borderRadius: 20,
    // paddingVertical: "5%",
    paddingTop: 5,
    paddingHorizontal: "5%",
    marginBottom: "2%",
    width: "100%",
    height: 82,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginRight: "5%",
    top: 15,
  },
  icon: {
    width: 47, // Adjusted size for the icon
    height: 46,
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
    fontSize: 12,
    fontWeight: "400",
  },
  dateTime: {
    color: "white",
    fontSize: 12,
    fontWeight: "400",
  },
  amount: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  bellIcon: {
    width: 15,
    height: 15,
  },
  dateContainer: {},
  date: {
    // top:-10
    color: "white",
    fontSize: 12,
    fontWeight: "400",
    paddingLeft: 15,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
