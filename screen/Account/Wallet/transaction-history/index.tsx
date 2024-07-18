import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { transactionsData } from "../../data/TransactionHistoryData";
import { styles } from "./styles";

export default function TransactionHistory() {
  const [selectedTab, setSelectedTab] = useState("Deposit");

  const filteredTransactions = transactionsData.filter(
    (item) => item.type === selectedTab
  );

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Deposit" && styles.activeTabButton,
          ]}
          onPress={() => handleTabChange("Deposit")}
        >
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Withdrawl" && styles.activeTabButton,
          ]}
          onPress={() => handleTabChange("Withdrawl")}
        >
          <Text style={styles.buttonText}>Withdrawl</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredTransactions.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image
                source={require("@/assets/images/walletLogo.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.dateTime}>
                {item.time} {item.date}
              </Text>
            </View>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
