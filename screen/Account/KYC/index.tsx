import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 667) * size;

export default function KYC() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    state: "",
    address: "",
    postal: "",
    aadhaar: "",
    aadhaarImage: null,
    drivingLicence: "",
    drivingLicenceImage: null,
    undertaking: false,
  });

  useEffect(() => {
    const loadStep = async () => {
      try {
        const savedStep = await AsyncStorage.getItem("currentStep");
        if (savedStep !== null) {
          setStep(parseInt("1"));
        }
      } catch (error) {
        console.error("Failed to load step from storage", error);
      }
    };
    loadStep();
  }, []);

  const handleNext = async (data: any) => {
    const newStep = step + 1;
    const updatedFormData = { ...formData, ...data };

    try {
      // Placeholder for API call
      // await apiCallToUpdateStep(updatedFormData, newStep);

      // Update state and AsyncStorage
      setFormData(updatedFormData);
      if (newStep <= 4) {
        setStep(newStep);
        await AsyncStorage.setItem("currentStep", newStep.toString());
        await AsyncStorage.setItem("formData", JSON.stringify(updatedFormData));
      } else {
        handleSubmit(updatedFormData);
      }
    } catch (error) {
      console.error("Failed to update step", error);
      Alert.alert("Error", "Failed to update step");
    }
  };

  const handleSubmit = async (finalFormData: any) => {
    try {
      // Placeholder for API call
      // await apiCallToSubmitForm(finalFormData);

      console.log("this is the data: ", finalFormData);
      await AsyncStorage.setItem("currentStep", "5");
      await AsyncStorage.removeItem("formData");
      Alert.alert("Success", "Your KYC has been completed");
    } catch (error) {
      console.error("Failed to submit form", error);
      Alert.alert("Error", "Failed to submit form");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={handleNext} formData={formData} />;
      case 2:
        return <Step2 onNext={handleNext} formData={formData} />;
      case 3:
        return <Step3 onNext={handleNext} formData={formData} />;
      case 4:
        return <Step4 onNext={handleNext} />;
      case 5:
        return <Step5 />;
      default:
        return <Step1 onNext={handleNext} formData={formData} />;
    }
  };

  const renderStepIndicator = () => {
    return (
      <View style={styles.stepsContainer}>
        {Array.from({ length: 5 }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < step || step === 5;
          const isActive = stepNumber === step;

          return (
            <React.Fragment key={stepNumber}>
              {index > 0 && (
                <View
                  style={[
                    styles.line,
                    (isCompleted || step === 5) && styles.completedLine,
                  ]}
                />
              )}
              <View
                style={[
                  styles.step,
                  isActive && styles.activeStep,
                  isCompleted && styles.completedStep,
                ]}
              >
                {isCompleted ? (
                  <Image
                    source={require("@/assets/images/trackCheckLogo.png")}
                    style={styles.checkmarkImage}
                  />
                ) : (
                  <Text
                    style={[styles.stepText, isActive && styles.activeStepText]}
                  >
                    {stepNumber}
                  </Text>
                )}
              </View>
            </React.Fragment>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderStepIndicator()}
      {renderStep()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accountsPurplePage,
    padding: scale(20),
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(40),
    marginTop: verticalScale(100),
  },
  step: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: Colors.purpleNavigation,
    justifyContent: "center",
    alignItems: "center",
  },
  activeStep: {
    backgroundColor: Colors.golden,
  },
  completedStep: {
    backgroundColor: Colors.golden,
  },
  stepText: {
    color: "white",
    fontSize: scale(18),
  },
  activeStepText: {
    color: Colors.purpleNavigation,
  },
  line: {
    width: scale(40),
    height: 2,
    backgroundColor: Colors.purpleNavigation,
  },
  completedLine: {
    backgroundColor: Colors.golden,
  },
  checkmarkImage: {
    width: scale(20),
    height: scale(20),
  },
});
