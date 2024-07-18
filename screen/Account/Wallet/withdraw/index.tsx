import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";
import { styles } from "./styles";
import { withdrawData } from "../../data/WithdrawData";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [isUPISelected, setIsUPISelected] = useState(
    withdrawData.find((item) => item.type === "UPI" && item.status)
      ? true
      : false
  );
  const [isBankSelected, setIsBankSelected] = useState(
    withdrawData.find((item) => item.type === "Bank" && item.status)
      ? true
      : false
  );
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
        withdrawData[0].linked = upiId;
        withdrawData[0].status = true;
      }
    } else {
      if (bankAccount) {
        setIsBankSelected(true);
        withdrawData[1].linked = bankAccount;
        withdrawData[1].status = true;
      }
    }
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceAmount}>
          <Image
            source={require("@/assets/images/walletLogo.png")}
            style={styles.balanceTitle}
          />{" "}
          ₹ 10000
        </Text>
        <Text style={styles.winningsText}>Winnings: ₹ 6000</Text>
        <Text style={styles.withdrawableText}>
          Available for withdrawal: ₹ 6000
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          placeholderTextColor="#999"
          keyboardType="default"
          value={amount}
          onChangeText={setAmount}
        />
        <Text style={styles.minMaxText}>Min ₹20 - Max ₹10000</Text>
      </View>
      <Text style={styles.withdrawalModesTitle}>Withdrawal Modes</Text>
      <View style={styles.modeContainer}>
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeText}>UPI ID linked</Text>
          {isUPISelected && (
            <Text style={styles.linkedValue}>{withdrawData[0].linked}</Text>
          )}
          {!isUPISelected && (
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => handleModal("UPI")}
            >
              <Text style={styles.linkButtonText}>Link</Text>
            </TouchableOpacity>
          )}
        </View>
        <Switch
          value={isUPISelected}
          onValueChange={() => handleModal("UPI")}
        />
      </View>
      <View style={styles.modeContainer}>
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeText}>Bank account Linked</Text>
          {isBankSelected && (
            <Text style={styles.linkedValue}>{withdrawData[1].linked}</Text>
          )}
          {!isBankSelected && (
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => handleModal("Bank")}
            >
              <Text style={styles.linkButtonText}>Link</Text>
            </TouchableOpacity>
          )}
        </View>
        <Switch
          value={isBankSelected}
          onValueChange={() => handleModal("Bank")}
        />
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
