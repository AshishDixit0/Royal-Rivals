// Step5.tsx
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const Step5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Congratulations</Text>
        <Image
          source={require("@/assets/images/checkLogo.png")}
          style={styles.checkmark}
        />
        <Text style={styles.description}>Your KYC has been completed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
    padding: width * 0.05,
    alignItems: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: height * 0.05,
  },
  progressCircle: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    backgroundColor: Colors.golden,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  contentContainer: {
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: width * 0.08,
    fontWeight: "bold",
    marginVertical: height * 0.02,
  },
  checkmark: {
    // tintColor: Colors.golden,
    marginVertical: height * 0.04,
  },
  description: {
    color: "white",
    fontSize: width * 0.05,
    textAlign: "center",
  },
});

export default Step5;
