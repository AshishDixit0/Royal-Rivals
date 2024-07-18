import React from "react";
import { View, Text, TextInput, Switch } from "react-native";
import { styles } from "./styles";

export default function Withdraw() {
  const [amount, setAmount] = React.useState("");
  const [isUPISelected, setIsUPISelected] = React.useState(false);
  const [isBankSelected, setIsBankSelected] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₹ 10000</Text>
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
        <Switch value={isUPISelected} onValueChange={setIsUPISelected} />
      </View>
      <View style={styles.modeContainer}>
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeText}>Bank account Linked</Text>
          <Text style={styles.linkedValue}>2011XXXXXXXXXX298</Text>
        </View>
        <Switch value={isBankSelected} onValueChange={setIsBankSelected} />
      </View>
    </View>
  );
}
