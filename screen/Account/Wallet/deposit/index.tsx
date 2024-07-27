import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { styles } from "./styles"; // assuming you have a styles.js file for styles

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [isUPISelected, setIsUPISelected] = useState(false);
  const [isBankSelected, setIsBankSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bankAccount, setBankAccount] = useState("");

  const handleModal = (type: string) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const proceedModal = () => {
    if (modalType === "UPI") {
      if (upiId) {
        setIsUPISelected(true);
        // update your data accordingly
      }
    } else {
      if (bankAccount) {
        setIsBankSelected(true);
        // update your data accordingly
      }
    }
    closeModal();
  };

  const handleDeposit = () => {
    if (!amount) {
      Alert.alert("Error", "Please enter an amount");
      return;
    }

    if (Number(amount) < 100) {
      Alert.alert("Min amout is 100");
      return;
    }

    if (Number(amount) > 10000) {
      Alert.alert("Max amout is 10000");
      return;
    }

    if (!isUPISelected && !isBankSelected) {
      Alert.alert("Error", "Please link a UPI ID or Bank Account");
      return;
    }

    // Make the API call to handle deposit
    Alert.alert(
      "Success",
      `Deposited ₹${amount} via ${isUPISelected ? "UPI" : "Bank Account"}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.depositCard}>
        <View style={styles.amountButtons}>
          <TouchableOpacity
            style={styles.amountButton}
            onPress={() => setAmount("100")}
          >
            <Text style={styles.amountButtonText}>₹ 100</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.amountButton}
            onPress={() => setAmount("200")}
          >
            <Text style={styles.amountButtonText}>₹ 200</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.amountButton}
            onPress={() => setAmount("500")}
          >
            <Text style={styles.amountButtonText}>₹ 500</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Text style={styles.minMaxText}>Min ₹100 - Max ₹10000</Text>
        <TouchableOpacity style={styles.depositButton} onPress={handleDeposit}>
          <Text style={styles.depositButtonText}>Deposit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.depositModesTitle}>Deposit Modes</Text>
      <View style={styles.modeContainer}>
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeText}>UPI ID</Text>
          {isUPISelected ? (
            <Text style={styles.linkedValue}>Linked: {upiId}</Text>
          ) : (
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => handleModal("UPI")}
            >
              <Text style={styles.linkButtonText}>Link</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.modeContainer}>
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeText}>Bank Account</Text>
          {isBankSelected ? (
            <Text style={styles.linkedValue}>Linked: {bankAccount}</Text>
          ) : (
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => handleModal("Bank")}
            >
              <Text style={styles.linkButtonText}>Link</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <BlurView intensity={20} style={styles.absolute}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>
                Enter a Valid {modalType === "UPI" ? "UPI ID" : "Bank Account"}
              </Text>
              <TextInput
                style={styles.modalInput}
                placeholder={
                  modalType === "UPI" ? "Enter UPI ID" : "Enter Bank Account"
                }
                placeholderTextColor="#999"
                value={modalType === "UPI" ? upiId : bankAccount}
                onChangeText={modalType === "UPI" ? setUpiId : setBankAccount}
              />
              <Text style={styles.modalInfo}>
                {modalType === "UPI"
                  ? "UPI ID added once cannot be changed"
                  : "Bank Account added once cannot be changed"}
              </Text>
              <TouchableOpacity
                style={styles.proceedButton}
                onPress={proceedModal}
              >
                <Text style={styles.proceedButtonText}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}
