import React from 'react';
import { View, StyleSheet } from 'react-native';
import AccountNavbar from './AccountNavbar'; // Adjust the import path accordingly
import { Colors } from '@/constants/Colors';

const AccountHeader: React.FC<{ navigation: any, title: string, showBarsIcon: any | boolean }> = ({ navigation, title = 'Account', showBarsIcon = true }) => {
  return (
    <View style={styles.container}>
      <AccountNavbar navigation={navigation} title={title} showBarsIcon={showBarsIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: Colors.purpleNavigation, // Match the navbar background color
  },
});

export default AccountHeader;
