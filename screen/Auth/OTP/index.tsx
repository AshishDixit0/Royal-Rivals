import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "@/store";
import KeypadButton from "../../../components/Button/KeypadButtons";
import { styles } from "./Styles";
import Button from "@/components/Button/Button";
import { Colors } from "@/constants/Colors";
import { signup } from "@/store/AuthSlice";
import { setToken, getToken } from "@/services/API";
import { checkToken } from "@/store/AuthSlice";

interface OTPProps {
  route: any;
  navigation: any;
}

export default function OTPPage({ route, navigation }: OTPProps) {
  const dispatch = useDispatch<AppDispatch | any>();
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(route.params?.phone);

  useEffect(() => {
    // Retrieve the stored phone number and token when the component mounts
    const initialize = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem("phoneNumber");
        const token = await getToken(); // This ensures the token is set
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber);
        }
      } catch (error) {
        console.error("Failed to initialize data:", error);
      }
    };

    initialize();
  }, []);

  const handleKeyPress = (value: string) => {
    if (value === "backspace") {
      setOtp(otp.slice(0, -1));
    } else {
      setOtp(otp + value);
    }
  };

  const handleContinue = async () => {
    if (validateForm()) {
      try {
        const response = await dispatch(signup({ phone: phoneNumber, otp }));
        console.log('this is the token: ', response.payload.data.token);
        await setToken();
        
        if (response.payload.data.token) {
          Alert.alert('OTP verified!');
          navigation.navigate('AccountStack');
        }
      } catch (error) {
        console.error('Error during OTP verification:', error);
        Alert.alert('Wrong OTP');
      }
    }
  };

  const validateForm = () => {
    const otpPattern = /^[0-9]{6}$/;
    if (!otpPattern.test(otp)) {
      Alert.alert('Enter a valid OTP');
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

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/appLogo.png')} style={styles.appLogo} />
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
