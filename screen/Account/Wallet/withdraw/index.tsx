import React from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import Button from "@/components/Button/Button";

export default function Withdraw() {
  const [amount, setAmount] = React.useState("");
  const [isUPISelected, setIsUPISelected] = React.useState(false);
  const [isBankSelected, setIsBankSelected] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  const handleModal = (type: string) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceAmount}>
          {" "}
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
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Text style={styles.minMaxText}>Min ₹20 - Max ₹10000</Text>
      </View>
      <Text style={styles.withdrawalModesTitle}>Withdrawal Modes</Text>
      <View style={styles.modeContainer}>
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeText}>UPI ID linked</Text>
          <Text style={styles.linkedValue}>varun1223311@oksbi</Text>
        </View>
        <Switch
          value={isUPISelected}
          onValueChange={() => handleModal("UPI")}
        />
      </View>
      <View style={styles.modeContainer}>
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeText}>Bank account Linked</Text>
          <Text style={styles.linkedValue}>2011XXXXXXXXXX298</Text>
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
            />
            <Text style={styles.modalInfo}>
              {modalType === "UPI"
                ? "UPI ID added once cannot be changed"
                : "Bank Account added once cannot be changed"}
            </Text>
            <Button
              title="Proceed"
              onPress={closeModal}
              containerStyles={styles.proceedButton}
              textStyles={styles.proceedButtonText}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
