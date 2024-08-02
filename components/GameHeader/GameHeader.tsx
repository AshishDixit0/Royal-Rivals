// components/HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import AppLogo from "../../assets/images/appLogo.png";
import WalletLogo from "../../assets/images/wallet.png"

const { width } = Dimensions.get('window');

interface GameHeaderProps {
  navigation?: any;
}

export default function GameHeader({ navigation }: GameHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={AppLogo} 
            style={styles.logo} 
          />
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>₹ 10000</Text>
          <TouchableOpacity>
            <Image 
              source={WalletLogo} 
              style={styles.walletIcon} 
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={() => { navigation.navigate('Account') }}>
          <View style={styles.menuIcon} />
          <View style={styles.menuIcon} />
          <View style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
  },
  header: {
    height:120,
    width:393,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent: 'space-between',
    backgroundColor: Colors.header_Color,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 72,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceContainer: {
    width:110,
    height:26,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
    backgroundColor:Colors.BACKGROUND_COLOR,
    borderRadius:10,
    paddingLeft:10,
    // gap:5
  },
  balanceText: {
    color: '#fff',
    fontSize: 12,
    // fontWeight:600,
    // marginRight: 10,
  },
  walletIcon: {
    width: 24,
    height: 24,
    backgroundColor:"#fff",
 
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    width: 27,
    height: 3,
    backgroundColor: '#fff',
    marginVertical: 2,
  },
});
