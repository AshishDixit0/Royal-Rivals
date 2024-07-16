import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../constants/Colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.BACKGROUND_COLOR,
      paddingHorizontal: 20,
    },
    appLogo: {
      width: width * 0.5,
      height: width * 0.5,
      marginBottom: 20,
    },
    logoContainer: {
      marginBottom: 20,
    },
    logoText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "golden",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white",
      marginBottom: 20,
    },
    inputContainer: {
      width: "90%",
      padding: 10,
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 25,
      backgroundColor: "white",
      marginBottom: 20,
      alignItems: "flex-start",
    },
    inputText: {
      color: "black",
      fontSize: 18,
      marginLeft: 20,
    },
    signInText: {
      color: "white",
      marginBottom: 20,
    },
    termsText: {
      color: "white",
      textAlign: "center",
      fontSize: 13,
      marginBottom: 20,
    },
    breakLine: {
      width: "90%",
      height: 1,
      backgroundColor: "white",
      marginVertical: 10,
    },
    button: {
      backgroundColor: "rgba(239,156,31,255)",
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
      borderRadius: 30,
      marginBottom: 20,
    },
    buttonText: {
      color: "black",
      fontWeight: "bold",
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
  