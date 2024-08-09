import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";

export default function HelpScreen({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Help and Support</Text>
        <Image source={require("@/assets/images/help.png")} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#999"
            selectionColor="black"
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("@/assets/images/search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.help}>
          <View style={styles.helpCard}>
            <Image />
            <View>
              <Text style={styles.text1}>How to Deposit Money</Text>
              <Text style={styles.text2}>
                Your deposit of ₹500 .00 has been successfully processed
              </Text>
            </View>
          </View>
          <View style={styles.helpCard}>
            <Text style={styles.text1}>How to Withdraw Money</Text>
            <Text style={styles.text2}>
              Your deposit of ₹500 .00 has been successfully processed
            </Text>
          </View>
          <View style={styles.helpCard}>
            <Text style={styles.text1}>How to Deposit Money</Text>
            <Text style={styles.text2}>
              Your deposit of ₹500 .00 has been successfully processed
            </Text>
          </View>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contactText1}>Contact Us</Text>
          <Text style={styles.contactText2}>
            For any help contact us at wecarezupee.in
          </Text>
        </View>
      </View>
    </View>
  );
}
