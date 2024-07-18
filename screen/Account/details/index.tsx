import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

export interface GameRulesScreenProps {
  logoAlignment?: "left" | "center";
}

const GameRulesScreen: React.FC<GameRulesScreenProps> = ({ logoAlignment = "center" }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.logoContainer,
            logoAlignment === "left" ? styles.alignLeft : styles.alignCenter,
          ]}
        >
          <Image
            source={require("../../../assets/images/appLogo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Game Rules</Text>
        <Text style={styles.sectionTitle}>Ludo:</Text>
        <Text style={styles.text}>
          • Objective: Be the first to move all your tokens from the start to
          the home triangle.
        </Text>
        <Text style={styles.text}>
          • Gameplay: Players take turns rolling a six-sided die. Tokens move
          according to the number rolled. Capturing an opponent's token sends it
          back to the start.
        </Text>
        <Text style={styles.text}>
          • Winning: The first player to move all their tokens to the home
          triangle wins.
        </Text>
        <Text style={styles.sectionTitle}>Snakes and Ladders:</Text>
        <Text style={styles.text}>
          • Objective: Be the first to reach the final square on the board.
        </Text>
        <Text style={styles.text}>
          • Gameplay: Players take turns rolling a die and move their token the
          number of spaces rolled. Landing on a ladder moves you up; landing on
          a snake sends you down.
        </Text>
        <Text style={styles.text}>
          • Winning: The first player to reach the last square wins.
        </Text>
        <Text style={styles.sectionTitle}>Payment and Withdrawal</Text>
        <Text style={styles.text}>• Deposit Methods:</Text>
        <Text style={styles.subText}> • UPI</Text>
        <Text style={styles.subText}> • Bank Transfer</Text>
        <Text style={styles.text}>• Withdrawal Methods:</Text>
        <Text style={styles.subText}> • UPI</Text>
        <Text style={styles.subText}> • Bank Transfer</Text>
        <Text style={styles.text}>• Transaction Security:</Text>
        <Text style={styles.subText}>
          {" "}
          • We use advanced encryption to ensure your transactions are safe and
          secure.
        </Text>
        <Text style={styles.sectionTitle}>Fair Play and Security</Text>
        <Text style={styles.text}>• Random Number Generation:</Text>
        <Text style={styles.subText}>
          {" "}
          • Our games use certified random number generators for fair gameplay.
        </Text>
        <Text style={styles.text}>• Anti-Cheating Measures:</Text>
        <Text style={styles.subText}>
          {" "}
          • Strict measures are in place to detect and prevent cheating,
          ensuring a fair playing field.
        </Text>
        <Text style={styles.text}>• Data Protection:</Text>
        <Text style={styles.subText}>
          {" "}
          • Your personal and financial information is protected with
          industry-standard security practices.
        </Text>
        <Text style={styles.sectionTitle}>Customer Support</Text>
        <Text style={styles.text}>• Support Team:</Text>
        <Text style={styles.subText}>
          {" "}
          • Our dedicated customer support team is available to assist you via
          email, live chat, or phone.
        </Text>
        <Text style={styles.text}>• FAQs:</Text>
        <Text style={styles.subText}>
          {" "}
          • Check our FAQ section for quick answers to common questions about
          gameplay, payments, and withdrawals.
        </Text>
        <Text style={styles.sectionTitle}>Community and Engagement</Text>
        <Text style={styles.text}>• Player Community:</Text>
        <Text style={styles.subText}>
          {" "}
          • Join our vibrant community of players. Engage in discussions, share
          tips, and make new friends.
        </Text>
        <Text style={styles.text}>• Events and Tournaments:</Text>
        <Text style={styles.subText}>
          {" "}
          • Participate in special events and tournaments to compete for bigger
          prizes and showcase your skills.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameRulesScreen;
