import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

interface AccountNavbarProps {
  navigation: any;
  title: string;
  showBarsIcon?: boolean;
}

export default function AccountNavbar({ navigation, title = 'Account', showBarsIcon = true }: AccountNavbarProps) {
  return (
    <View style={styles.navbar}>
      {showBarsIcon && (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconButton}>
          <Icon name="bars" size={width * 0.07} color="white" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, showBarsIcon ? styles.titleWithBars : styles.titleWithoutBars]}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.iconButton}>
        <Icon name="arrow-right" size={width * 0.06} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: width * 0.15 + height * 0.05, // Increase height to account for top padding
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04, // Responsive padding
    backgroundColor: Colors.purpleNavigation, // Replace with your desired background color
    paddingTop: height * 0.05, // Add top padding to move content below the notch
    shadowColor: '#000', // Add shadow color
    shadowOffset: { width: 4, height: 4 }, // Add shadow offset
    shadowOpacity: 0.25, // Add shadow opacity
    shadowRadius: 4, // Add shadow blur
    elevation: 5, // Add elevation for Android shadow
  },
  iconButton: {
    padding: width * 0.02, // Responsive padding
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'white',
  },
  titleWithBars: {
    flex: 1,
    marginLeft: width * 0.05, // Align title with bars icon
    textAlign: 'center', // Center the text horizontally
  },
  titleWithoutBars: {
    flex: 1,
    paddingLeft: width * 0.03,
    textAlign: 'left', // Align the text to the left
  },
});
