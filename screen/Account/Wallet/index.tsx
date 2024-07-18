import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CardComponent from "@/components/Card";
import { data } from "../data/WalletData";
import { styles } from "./styles";

interface WalletProps {
  navigation: any;
}

export default function Wallet({ navigation }: WalletProps) {
  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <View style={styles.innerCardDetails}>
          <Text style={styles.balanceTitle}>Total Balance</Text>
          <Text style={styles.balanceAmount}>₹ {data.balance}</Text>
          <View style={styles.separator} />
          <View style={styles.winningsContainer}>
            <Text style={styles.winningsText}>Winnings: ₹ {data.winning}</Text>
            <TouchableOpacity style={styles.withdrawButton} onPress={() => { navigation.navigate('Withdraw') }}>
              <Text style={styles.withdrawButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.linkedText}>
            UPI ID linked:{" "}
            <Text style={styles.linkedValue}>{data.UPILinked}</Text>
          </Text>
          <Text style={styles.linkedText}>
            Bank Linked: <Text style={styles.linkedValue}>{data.bank}</Text>
          </Text>
        </View>
      </View>
      <CardComponent
        title="Transaction History"
        onPress={() => {
          /* Handle navigation */
          console.log('this is navigation');
        }}
      />
    </View>
  );
}
