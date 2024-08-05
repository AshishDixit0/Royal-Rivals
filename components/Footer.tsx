import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get('window');

const Curve = ({ position }: { position: number }) => (
  <Svg
    width="150"
    height="150"
    viewBox="3 -10 110 92"
    fill="none"
    style={[styles.curve, { left: position }]}
  >
    <Path
      d="M110 40C73.5 40 106 91.4365 55 91.4365C4 91.4365 33.5 40 0 40C0 17.9086 24.6243 0 55 0C85.3757 0 110 17.9086 110 40Z"
      fill="#4E1E49"
    />
  </Svg>
);

export default function Footer({ navigation, currentScreen }: { navigation: any, currentScreen: string }) {
  const curvePosition = (screen: string) => {
    switch (screen) {
      case 'Profile':
        return width * 0.13 - 55;
      case 'HomeScreen':
        return width * 0.35 - 55;
      case 'NotificationsScreen':
        return width * 0.57 - 55;
      case 'HelpScreen':
        return width * 0.79 - 55;
      default:
        return -9999; // Hide it off-screen if no screen is selected
    }
  };

  return (
    <View style={styles.footerContainer}>
      <LinearGradient
        colors={['#000000', '#2F0836']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.footer}
      >
        <Curve position={curvePosition(currentScreen)} />
        <View style={styles.iconWrapper}>
          {currentScreen === 'Profile' && (
            <>
              <View style={styles.highlightedBackground} />
            </>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={[
              styles.iconContainer,
              currentScreen === 'Profile' && styles.selectedIconContainer,
            ]}
          >
            <FontAwesome 
              name="user" 
              size={28} 
              color={currentScreen === 'Profile' ? Colors.cardBackground : 'white'} 
              style={currentScreen === 'Profile' && styles.selectedIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconWrapper}>
          {currentScreen === 'HomeScreen' && (
            <>
              <View style={styles.highlightedBackground} />
            </>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={[
              styles.iconContainer,
              currentScreen === 'HomeScreen' && styles.selectedIconContainer,
            ]}
          >
            <MaterialIcons 
              name="home" 
              size={34} 
              color={currentScreen === 'HomeScreen' ? Colors.cardBackground : 'white'} 
              style={currentScreen === 'HomeScreen' && styles.selectedIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconWrapper}>
          {currentScreen === 'NotificationsScreen' && (
            <>
              <View style={styles.highlightedBackground} />
            </>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsScreen')}
            style={[
              styles.iconContainer,
              currentScreen === 'NotificationsScreen' && styles.selectedIconContainer,
            ]}
          >
            <FontAwesome 
              name="bell" 
              size={24} 
              color={currentScreen === 'NotificationsScreen' ? Colors.cardBackground : 'white'} 
              style={currentScreen === 'NotificationsScreen' && styles.selectedIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconWrapper}>
          {currentScreen === 'HelpScreen' && (
            <>
              <View style={styles.highlightedBackground} />
            </>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('HelpScreen')}
            style={[
              styles.iconContainer,
              currentScreen === 'HelpScreen' && styles.selectedIconContainer,
            ]}
          >
            <AntDesign 
              name="questioncircle" 
              size={24} 
              color={currentScreen === 'HelpScreen' ? Colors.cardBackground : 'white'} 
              style={currentScreen === 'HelpScreen' && styles.selectedIcon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 95, // Adjusted to ensure the SVG and highlighted circle are not cut off
    width: width,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  curve: {
    position: 'absolute',
    bottom: 32.5, // Adjusted position to ensure it's not cut off
    zIndex: -2,
  },
  iconWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
  },
  highlightedBackground: {
    position: 'absolute',
    bottom: 0,
    width: 70,
    height: 70,
    backgroundColor: Colors.golden,
    borderRadius: 35,
    zIndex: -1,
    transform: [{ translateY: -15 }], // Elevated slightly to the top
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 53,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'transparent',
    transform: [{ translateY: -10 }],
  },
  selectedIconContainer: {
    backgroundColor: 'transparent', // Make the background transparent
    transform: [{ translateY: -15 }], // Move the icon container up to match highlightedBackground
  },
  selectedIcon: {
    opacity: 1, // Ensure the icon is visible
    marginBottom: 15,
  },
});
