// AboutUs.tsx
import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";

interface AboutUsProps {
  logoAlignment?: "right" | "left" | string;
}

export default function AboutUs({ logoAlignment = "center" }: AboutUsProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.logoContainer,
            logoAlignment === "right" ? styles.alignRight : styles.alignCenter,
          ]}
        >
          <Image
            source={require("../../../assets/images/appLogo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>
          Welcome to Royal Rivals, the ultimate destination for classic board
          game enthusiasts! Our platform brings together two timeless favorites:
          Ludo and Snakes and Ladders, with an exciting twist. Here, not only
          can you relive the fun and nostalgia of these games, but you also have
          the chance to win real money!
        </Text>

        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.text}>
          At Royal Rivals, our vision is to create a fun, engaging, and
          rewarding gaming experience for players of all ages. We believe in
          fair play, transparency, and delivering a seamless gaming experience.
        </Text>

        <Text style={styles.sectionTitle}>How It Works</Text>
        <Text style={styles.numberedText}>
          1. Deposit Money: Start by adding funds to your Royal Rivals account.
          Our secure payment gateway ensures your transactions are safe and
          protected.
        </Text>
        <Text style={styles.numberedText}>
          2. Play the Game: Choose between Ludo and Snakes and Ladders and start
          playing. Compete with players from around the world, or invite your
          friends for a friendly match.
        </Text>
        <Text style={styles.numberedText}>
          3. Withdraw Winnings: Win exciting rewards and withdraw your winnings
          easily. Our fast and reliable withdrawal process ensures you get your
          money without any hassle.
        </Text>

        <Text style={styles.sectionTitle}>Why Choose Royal Rivals?</Text>
        <Text style={styles.bulletText}>
          • Exciting Games: Enjoy the classic games of Ludo and Snakes and
          Ladders with a modern twist.
        </Text>
        <Text style={styles.bulletText}>
          • Real Money Prizes: Play and win real cash prizes.
        </Text>
        <Text style={styles.bulletText}>
          • Secure Transactions: Our platform uses advanced security measures to
          keep your transactions and data safe.
        </Text>
        <Text style={styles.bulletText}>
          • User-Friendly Interface: Easy-to-navigate interface for a seamless
          gaming experience.
        </Text>
        <Text style={styles.bulletText}>
          • 24/7 Support: Our dedicated support team is always here to help you
          with any queries or issues.
        </Text>

        <Text style={styles.sectionTitle}>Join the Royal Rivals Community</Text>
        <Text style={styles.text}>
          Become a part of the Royal Rivals community today and experience the
          thrill of classic board games like never before. Whether you’re
          looking to relive childhood memories or win big, Royal Rivals has
          something for everyone.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
