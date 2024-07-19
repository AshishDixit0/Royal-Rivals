import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 667) * size;

export default function Step3({
  onNext,
  formData,
}: {
  onNext: any;
  formData: any;
}) {
  const [drivingLicence, setDrivingLicence] = useState(formData.drivingLicence);
  const [drivingLicenceImage, setDrivingLicenceImage] = useState(
    formData.drivingLicenceImage
  );
  const [isFocused, setIsFocused] = useState(false);

  const handleNext = () => {
    if (!drivingLicence) {
      Alert.alert("Error", "Please enter your Driving Licence number");
      return;
    }
    if (!drivingLicenceImage) {
      Alert.alert("Error", "Please upload your Driving Licence image");
      return;
    }
    onNext({ drivingLicence, drivingLicenceImage });
  };

  const handleImageUpload = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access gallery is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setDrivingLicenceImage(result.assets[0]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Driving Licence Verification</Text>
        <Text style={styles.subtitle}>
          Provide with us a means of identification eg Driving License number.
        </Text>
        <View style={styles.inputContainer}>
          {isFocused || drivingLicence ? (
            <Text style={styles.placeholder}>Driving Licence</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder={!isFocused ? "Driving Licence Number" : ""}
            placeholderTextColor="#999"
            value={drivingLicence}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={setDrivingLicence}
          />
        </View>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleImageUpload}
        >
          <Text style={styles.uploadButtonText}>
            {drivingLicenceImage ? (
              <Image
                source={{ uri: drivingLicenceImage.uri }}
                style={styles.uploadImage}
              />
            ) : (
              <>
                <Image
                  source={require("@/assets/images/uploadLogo.png")}
                  style={styles.uploadImage}
                />{" "}
                Upload Image of ID
              </>
            )}
          </Text>
        </TouchableOpacity>
        <Text style={styles.note}>
          Ensure information on image of id proof should be clear
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
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
    marginTop: verticalScale(25),
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
    fontSize: scale(18.75), // width * 0.05
    fontWeight: "bold",
    marginBottom: verticalScale(13.34), // height * 0.02
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: scale(15), // width * 0.04
    textAlign: "left",
    marginBottom: verticalScale(13.34), // height * 0.02
  },
  inputContainer: {
    width: "100%",
    marginBottom: verticalScale(13.34), // height * 0.02
  },
  placeholder: {
    position: "absolute",
    left: scale(15),
    top: verticalScale(6.67),
    color: "#999",
    fontSize: scale(13.125),
  },
  input: {
    backgroundColor: Colors.accountsPurplePage,
    borderRadius: scale(20),
    padding: scale(15),
    color: "white",
    fontSize: scale(16.875),
    width: "100%",
    textAlign: "left",
  },
  uploadButton: {
    backgroundColor: Colors.accountsPurplePage,
    borderRadius: scale(20),
    paddingVertical: verticalScale(13.34), // height * 0.02
    alignItems: "center",
    marginBottom: verticalScale(13.34), // height * 0.02
    width: "100%",
  },
  uploadButtonText: {
    color: "#a09ba6",
    fontSize: scale(16.875), // width * 0.045
    marginBottom: verticalScale(6.67), // height * 0.01
    marginLeft: scale(15), // width * 0.04
  },
  button: {
    backgroundColor: Colors.golden,
    borderRadius: scale(10),
    paddingVertical: verticalScale(13.34), // height * 0.02
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: scale(16.875), // width * 0.045
    fontWeight: "bold",
  },
  note: {
    color: "white",
    fontSize: scale(13.125), // width * 0.035
    textAlign: "center",
    marginBottom: verticalScale(13.34), // height * 0.02
  },
  uploadImage: {
    width: scale(37.5), // width * 0.1
    height: verticalScale(26.67), // height * 0.04
    marginTop: verticalScale(-6.67), // -height * 0.01
    marginRight: scale(18.75), // width * 0.05
  },
});
