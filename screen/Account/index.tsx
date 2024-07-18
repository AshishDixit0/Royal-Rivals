// AccountScreen.tsx
import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import CardsHolderComponent from '../../components/CardHolder';
import { Colors } from '@/constants/Colors';
import AccountNavbar from '@/components/AccountNavbar';

const { width, height } = Dimensions.get('window');

interface AccountScreenProps {
  navigation: any;
  title?: string;
  showBarsIcon?: boolean | string | any;
  route?: any;
}

const AccountScreen: React.FC<AccountScreenProps> = ({ navigation, title = 'Account', showBarsIcon = 'true', route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <AccountNavbar navigation={navigation} title={title} showBarsIcon={showBarsIcon} />
      </View>
      <View style={styles.contentContainer}>
        <CardsHolderComponent navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.accountBackground,
    height: height * 0.25,
  },
  contentContainer: {
    flex: 1,
    marginTop: -height * 0.1,
  },
});

export default AccountScreen;
