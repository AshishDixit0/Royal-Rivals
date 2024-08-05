import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 667) * size;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
    marginTop: verticalScale(50),
  },
  background: {
    backgroundColor: Colors.accountsPurplePage,
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
  },
  idContainer: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(10),
    backgroundColor: Colors.accountsPurplePage,
  },
  idText: {
    color: "white",
    fontSize: scale(16),
  },
  header: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(30),
    alignItems: "center",
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    backgroundColor: Colors.profileCardBG,
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(10) },
    shadowOpacity: 0.6,
    shadowRadius: scale(10),
    elevation: 10, // for Android
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -verticalScale(25),
    bottom: 40,
    width: scale(100),
    height: scale(100),
  },
  iconWrapper: {
    position: "relative",
    borderRadius: scale(100),
  },
  profileIcon: {
    width: scale(100),
    height: scale(100),
    backgroundColor: "#4E1E49",
    padding: scale(25),
    borderRadius: scale(100),
  },
  editIconWrapper: {
    position: "absolute",
    top: -scale(5),
    right: -scale(10),
    padding: scale(5),
    borderRadius: scale(50),
    height: scale(50),
    width: scale(50),
  },
  editIcon: {
    backgroundColor: "transparent",
  },
  phoneText: {
    color: "white",
    textAlign: "center",
    marginVertical: verticalScale(5),
    fontSize: scale(18),
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "white",
    marginVertical: verticalScale(10),
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  statText: {
    color: "white",
    fontSize: scale(16),
  },
  body: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(15),
    backgroundColor: Colors.accountsPurplePage,
    paddingVertical: verticalScale(6),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
  },
  sectionTitle: {
    color: "white",
    fontSize: scale(18),
    marginBottom: verticalScale(3),
    textAlign: "center",
  },
  totalGamesText: {
    color: "white",
    fontSize: scale(14),
    textAlign: "left",
  },
  viewAllText: {
    color: "white",
    fontSize: scale(15),
    textDecorationLine: "underline",
    marginBottom: verticalScale(5),
    textAlign: "right",
  },
  scrollableGames: {
    maxHeight: verticalScale(200), // Adjust the height as needed
    minHeight: verticalScale(160),
  },
  gameItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.profileCardBG,
    padding: verticalScale(10),
    borderRadius: scale(20),
    marginBottom: verticalScale(8),
  },
  gameIcon: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(20),
  },
  gameText: {
    color: "white",
    fontSize: scale(16),
    flex: 1,
  },
  gameResult: {
    color: "white",
    fontSize: scale(16),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: Colors.accountsPurplePage,
    borderRadius: scale(20),
    padding: scale(20),
    alignItems: "center",
  },
  modalScroll: {
    alignItems: "center",
  },
  avatarsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: verticalScale(20),
  },
  avatarItem: {
    backgroundColor: Colors.profileCardBG,
    width: scale(80),
    height: scale(80),
    borderRadius: scale(20),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  modalTitle: {
    color: "white",
    fontSize: scale(18),
    marginBottom: verticalScale(10),
    textAlign: "center",
  },
  orText: {
    color: Colors.golden,
    fontSize: scale(18),
    marginBottom: verticalScale(10),
    textAlign: "center",
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.profileCardBG,
    padding: verticalScale(15),
    borderRadius: scale(10),
    marginVertical: verticalScale(10),
    width: "100%",
  },
  modalButtonText: {
    color: "white",
    fontSize: scale(16),
    marginLeft: scale(10),
  },
  closeButton: {
    marginTop: verticalScale(20),
    padding: verticalScale(10),
    backgroundColor: Colors.golden,
    borderRadius: scale(10),
  },
  closeButtonText: {
    color: "white",
    fontSize: scale(16),
  },
});
