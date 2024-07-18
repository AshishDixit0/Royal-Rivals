import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardComponent from './Card';
import { Colors } from '@/constants/Colors';

const cardsData = [
  { title: 'My Wallet', onPress: () => {}, link: '' },
  { title: 'Details', onPress: () => {}, link: 'Details' },
  { title: 'About Us', onPress: () => {}, link: 'AboutUs' },
  { title: 'KYC', onPress: () => {}, link: '' },
  { title: 'Settings', onPress: () => {}, link: '' },
];

interface navigationProps {
    navigation: any;
}

const CardsHolderComponent: React.FC<navigationProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {cardsData.map((card, index) => (
        <CardComponent key={index} title={card.title} onPress={() => { navigation.navigate(`${card.link}`) }} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.cardHolderbackground,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden'
  },
});

export default CardsHolderComponent;