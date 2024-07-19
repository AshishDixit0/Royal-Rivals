import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 667) * size;

export default function Step4({ onNext }: { onNext: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Undertaking</Text>
        <Text style={styles.text}>
          I, the undersigned, hereby declare that the information provided by me
          on this platform is true, accurate, and complete to the best of my
          knowledge and belief. I understand that providing false or misleading
          information may result in penalties, including the suspension or
          termination of my account.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onNext({ undertaking: true })}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.accountsPurplePage,
    marginTop: verticalScale(26.68), // height * 0.04
  },
  card: {
    backgroundColor: Colors.purpleNavigation,
    borderRadius: scale(20),
    padding: scale(22.5), // width * 0.06
    width: scale(337.5), // width * 0.9
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: scale(33.75), // width * 0.09
    fontWeight: "bold",
    marginBottom: verticalScale(26.68), // height * 0.04
  },
  text: {
    color: "white",
    fontSize: scale(16.875), // width * 0.045
    marginBottom: verticalScale(33.35), // height * 0.05
  },
  button: {
    backgroundColor: Colors.golden,
    borderRadius: scale(20),
    paddingVertical: verticalScale(6.67), // height * 0.01
    alignItems: "center",
    paddingHorizontal: scale(48.75), // width * 0.13
  },
  buttonText: {
    color: "white",
    fontSize: scale(16.875), // width * 0.045
    fontWeight: "bold",
  },
});
