import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("window");

interface CardProps {
  title: string;
  onPress: () => void;
}

const CardComponent: React.FC<CardProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{title}</Text>
      <Icon name="chevron-right" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors.cardBackground,
      padding: 15,
      borderRadius: 20, // Adjusted to 20px radius
      height: 74, // Fixed height
      width: width * 0.9, // Adjusted width based on screen size
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderBottomWidth: 2, // Border settings
      borderBottomColor: 'rgba(0, 0, 0, 0.1)',
      marginBottom: height * 0.02,
    },
    cardText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '500',
    },
  });
  

export default CardComponent;
