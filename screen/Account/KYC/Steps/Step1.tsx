import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from "react-native";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 667) * size;

export default function Step1({
  onNext,
  formData,
}: {
  onNext: any;
  formData: any;
}) {
  const [firstName, setFirstName] = useState(formData.firstName);
  const [lastName, setLastName] = useState(formData.lastName);
  const [dob, setDob] = useState(formData.dob);
  const [state, setState] = useState(formData.state);
  const [address, setAddress] = useState(formData.address);
  const [postal, setPostal] = useState(formData.postal);

  const handleNext = () => {
    if (!firstName || !lastName || !dob || !state || !address || !postal) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    onNext({ firstName, lastName, dob, state, address, postal });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#999"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#999"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="D.O.B"
          placeholderTextColor="#999"
          value={dob}
          onChangeText={setDob}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          placeholderTextColor="#999"
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#999"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Postal"
          placeholderTextColor="#999"
          value={postal}
          onChangeText={setPostal}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: Colors.purpleNavigation,
    borderRadius: scale(20),
    paddingHorizontal: scale(16), // padding adjusted to use scale
    color: "white",
    fontSize: scale(18), // fontSize adjusted to use scale
    width: "100%",
    textAlign: "left",
    marginBottom: verticalScale(15),
    paddingVertical: verticalScale(18), // paddingVertical adjusted to use verticalScale
  },
  button: {
    backgroundColor: Colors.golden,
    borderRadius: scale(20),
    paddingVertical: verticalScale(7), // paddingVertical adjusted to use verticalScale
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: scale(18), // fontSize adjusted to use scale
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    marginBottom: verticalScale(15), // marginBottom adjusted to use verticalScale
  },
});
