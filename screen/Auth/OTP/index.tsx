import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import KeypadButton from "../../../components/Button/KeypadButtons";
import AppLogo from "../../../assets/images/appLogo.png";
import { styles } from "./Styles";
import Button from "@/components/Button/Button";
import { Colors } from "@/constants/Colors";

export default function OTP({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(route.params?.phone);

  useEffect(() => {
    // Retrieve the stored phone number when the component mounts
    const getPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem("phoneNumber");
        console.log("this has been attained: ", storePhoneNumber);

        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber);
        } else {
          setPhoneNumber("998XXXXXX9");
        }
      } catch (error) {
        console.error("Failed to load phone number:", error);
      }
    };

    getPhoneNumber();
  }, []);

  const handleKeyPress = (value: string) => {
    if (value === "backspace") {
      setOtp(otp.slice(0, -1));
    } else {
      setOtp(otp + value);
    }
  };

  const handleContinue = () => {
    if (validateForm()) {
      // Handle OTP verification logic here
      Alert.alert("Success", "OTP verified successfully!");
      // Store the phone number
      storePhoneNumber("78XXXXXXXX7");
    }
  };

  const validateForm = () => {
    const otpPattern = /^[0-9]{6}$/;
    if (!otpPattern.test(otp)) {
      Alert.alert("Error", "Please enter a valid 6-digit OTP.");
      return false;
    }
    return true;
  };

  const renderKeypadRow = (keys: string[]) => (
    <View style={styles.keypadRow}>
      {keys.map((key) => (
        <KeypadButton
          key={key}
          label={key === "backspace" ? "⌫" : key}
          onPress={() => handleKeyPress(key)}
        />
      ))}
    </View>
  );

  const handleResendOtp = () => {
    Alert.alert("Resend OTP", "OTP has been resent.");
  };

  const storePhoneNumber = async (phoneNumber: string) => {
    try {
      await AsyncStorage.setItem("phoneNumber", phoneNumber);
    } catch (error) {
      console.error("Failed to save phone number:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={AppLogo} style={styles.appLogo} />
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>Enter OTP sent to {phoneNumber}</Text>
      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, i) => (
          <View key={i} style={styles.otpDash}>
            <Text style={styles.otpText}>{otp[i] || " "}</Text>
          </View>
        ))}
      </View>
      <Button
        title="Resend OTP"
        onPress={handleResendOtp}
        containerStyles={styles.resendOtp}
        bgColor={Colors.whiteButton}
      />
      <View style={styles.breakLine} />
      <Button
        title="Continue"
        onPress={handleContinue}
        containerStyles={styles.button}
      />
      <View style={styles.keypad}>
        {renderKeypadRow(["1", "2", "3"])}
        {renderKeypadRow(["4", "5", "6"])}
        {renderKeypadRow(["7", "8", "9"])}
        <View style={styles.keypadRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              Alert.alert("Please accept the terms and conditions to continue");
            }}
          >
            <Icon name="check" size={24} color="black" />
          </TouchableOpacity>
          <KeypadButton label="0" onPress={() => handleKeyPress("0")} />
          <KeypadButton label="⌫" onPress={() => handleKeyPress("backspace")} />
        </View>
      </View>
    </View>
  );
}
