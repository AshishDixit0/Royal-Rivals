import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import KeypadButton from "../../../components/Button/KeypadButtons";
import AppLogo from "../../../assets/images/appLogo.png";
import { styles } from "./Styles";
import Button from "@/components/Button/Button";

export default function SignUp() {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleKeyPress = (value: string) => {
    if (value === "backspace") {
      setMobileNumber(mobileNumber.slice(0, -1));
    } else {
      setMobileNumber(mobileNumber + value);
    }
  };

  const handleSignUp = () => {
    if (validateForm()) {
      // Handle sign-up logic here
      Alert.alert("Success", "Form submitted successfully!");
    }
  };

  const validateForm = () => {
    const mobileNumberPattern = /^[0-9]{10}$/;
    if (!mobileNumberPattern.test(mobileNumber)) {
      Alert.alert("Error", "Please enter a valid 10-digit mobile number.");
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

  return (
    <View style={styles.container}>
      <Image source={AppLogo} style={styles.appLogo} />
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{mobileNumber? mobileNumber: 'Enter your mobile number'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => Alert.alert("Redirect", "Navigate to sign in screen.")}
      >
        <Text style={styles.signInText}>
          Existing User?{" "}
          <Text style={{ color: "rgba(239,156,31,255)" }}>Sign In Here</Text>{" "}
        </Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        Welcome! By clicking{" "}
        <Text style={{ fontWeight: "bold" }}>Accept And Continue</Text>, you
        agree to our terms and conditions. Let's get started on your gaming
        journey!
      </Text>
      <View style={styles.breakLine} />
      <Button title="Accept And Continue" textStyles={styles.buttonText} onPress={handleSignUp} containerStyles={styles.button}/> 
      {/* <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Accept And Continue</Text>
      </TouchableOpacity> */}
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
