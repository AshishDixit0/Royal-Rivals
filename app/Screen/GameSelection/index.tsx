import React, {useState, useEffect } from 'react';
import { View, Text, Animated, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import Card from '@/components/GameCard/Card';
import GameHeader from '@/components/GameHeader/GameHeader';
import LogotextLudo from '../../../assets/images/logotext1.png';
import LogotextSnake from '../../../assets/images/logotext2.png';

const { width } = Dimensions.get('window');
export default function GameSelectScreen({ navigation, route }:any) {
  const [bannerImage, setBannerImage] = useState(LogotextLudo);


  useEffect(() => {
    const interval = setInterval(() => {
      setBannerImage((prevImage:any) => 
        prevImage === LogotextLudo ? LogotextSnake : LogotextLudo
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 

  const handleSignUp = async () => {
    navigation.navigate('LudoScreen');
  };

  return (
    <View style={styles.container}>
      <GameHeader />
      <View style={styles.banner} >
        <Image source={bannerImage} style={styles.logotext} />
      </View>
      <ScrollView style={styles.scroll}>
      <TouchableOpacity onPress={handleSignUp}>
        <Card />
        </TouchableOpacity>

        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
  },
  scroll: {
    flex: 1,
    marginTop: 20,
  },
  banner: {
    height: 270,
    width: width,
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomRightRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logotext: {
    height: 225,
    width: 300,
  },
});
