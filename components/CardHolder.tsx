import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import CardComponent from './Card';
import { Colors } from '@/constants/Colors';

const { height } = Dimensions.get('window');

const cardsData = [
  { title: 'My Wallet', onPress: () => {}, link: 'Wallet' },
  { title: 'Details', onPress: () => {}, link: 'Details' },
  { title: 'About Us', onPress: () => {}, link: 'AboutUs' },
  { title: 'KYC', onPress: () => {}, link: 'KYC' },
  { title: 'Settings', onPress: () => {}, link: 'Settings' },
];

interface NavigationProps {
  navigation: any;
}

const CardsHolderComponent: React.FC<NavigationProps> = ({ navigation }) => {
  const userId = 'BC78XXXXXXX7';

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/images/userLogo.png')} style={styles.userLogo} />
        <Text style={styles.userId}>ID-  {userId || 'BC78XXXXXXXXX7'}</Text>
      </View>
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  userLogo: {
    width: 75,
    height: 68,
    borderRadius: 25,
    marginRight: 10,
  },
  userId: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});

export default CardsHolderComponent;
