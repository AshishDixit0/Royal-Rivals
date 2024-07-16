import Button from "@/components/Button/Button";
import SignUp from "@/screen/Auth/Signup";
import { View, Text, StyleSheet, Platform } from "react-native";
import OTP from "@/screen/Auth/OTP";

const fun = () => {
  return console.log("hello");
};

export default function HomeScreen() {
  return (
      // <OTP />
      <SignUp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
