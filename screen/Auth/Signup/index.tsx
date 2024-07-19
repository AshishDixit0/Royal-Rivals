import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import KeypadButton from "../../../components/Button/KeypadButtons";
import { styles } from "./Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "@/components/Button/Button";

export default function SignUp({ navigation, route}: { route: any, navigation: any }) {
  const [mobileNumber, setMobileNumber] = useState("");
  
  const handleKeyPress = (value: string) => {
    if (value === "backspace") {
      setMobileNumber(mobileNumber.slice(0, -1));
    } else {
      setMobileNumber(mobileNumber + value);
    }
  };

  const handleSignUp = async() => {
    if (validateForm()) {
      await AsyncStorage.setItem("phoneNumber", mobileNumber);
      navigation.navigate('Gamescreen', { phone: mobileNumber });
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
      <Image source={require('../../../assets/images/appLogo.png')} style={styles.appLogo} />
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
