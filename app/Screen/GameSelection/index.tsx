import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Card from "@/components/GameCard/Card";
import GameHeader from "@/components/GameHeader/GameHeader";
import { styles } from "./styles";

interface GameSelectProps {
  navigation: any;
  route: any;
}

const data = {
  LogoTextLudo: require("@/assets/images/logotext1.png"),
  LogoTextSnake: require("@/assets/images/logotext2.png"),
  BackgroundImage: require("@/assets/images/backgroundApp.png"),
};

export default function GameSelectScreen({ navigation }: GameSelectProps) {
  const [bannerImage, setBannerImage] = useState(data.LogoTextLudo);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerImage((prevImage: any) =>
        prevImage === data.LogoTextLudo ? data.LogoTextSnake : data.LogoTextLudo
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSignUp = async () => {
    navigation.navigate("LudoScreen");
  };

  return (
    <ImageBackground
      source={data.BackgroundImage}
      resizeMode="cover"
      style={styles.container}
    >
      <GameHeader />
      <View style={styles.banner}>
        <Image source={bannerImage} style={styles.logotext} />
      </View>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity onPress={handleSignUp}>
          <Card />
        </TouchableOpacity>
        <Card navigate={navigation} />
        <Card navigate={navigation} />
        <Card navigate={navigation} />
      </ScrollView>
    </ImageBackground>
  );
}
