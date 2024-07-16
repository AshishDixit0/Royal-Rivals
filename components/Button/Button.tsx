import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface ButtonProps {
  onPress: () => void;
  title?: string;
  textStyles?: {};
  containerStyles?: {};
  bgColor?: string;
}

const Button = ({
  onPress,
  title,
  textStyles = {},
  containerStyles = {},
  bgColor = Colors.golden
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...styles.containerStyles, ...containerStyles, backgroundColor: bgColor }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, ...textStyles }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  containerStyles: {
    height: 50,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
