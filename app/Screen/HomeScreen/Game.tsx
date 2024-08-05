import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import AppLogo from "../../../assets/images/appLogo.png";
import WalletLogo from "../../../assets/images/wallet.png";
import Ludo from "../../../assets/images/ludo.png";
import Snake from "../../../assets/images/snake.png";
import GameHeader from "@/components/GameHeader/GameHeader";
import LogotextLudo from "../../../assets/images/logotext1.png";
import LogotextSnake from "../../../assets/images/logotext2.png";
import Bg from "../../../assets/images/bg.png";
import Footer from "@/components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { logout } from "@/store/AuthSlice";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [bannerImage, setBannerImage] = useState(LogotextLudo);
  const dispatch = useDispatch()<any>;

  const ludoScaleAnim = useRef(new Animated.Value(1)).current;
  const snakeScaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerImage((prevImage: any) =>
        prevImage === LogotextLudo ? LogotextSnake : LogotextLudo
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePressIn = (scaleAnim: any) => {
    Animated.spring(scaleAnim, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scaleAnim: any) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleNav = async () => {
    await AsyncStorage.removeItem('token');
    await dispatch(logout());
    console.log('this is the calling');
    navigation.navigate("GameSelect");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={styles.homebox}>
          <View style={styles.banner}>
            <Image source={bannerImage} style={styles.logotext} />
          </View>
          <View style={styles.games}>
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(ludoScaleAnim)}
              onPressOut={() => handlePressOut(ludoScaleAnim)}
              onPress={handleNav}
            >
              <View>
                <Image source={Bg} style={styles.bg} />
                <Animated.Image
                  source={Ludo}
                  style={[
                    styles.Ludo,
                    { transform: [{ scale: ludoScaleAnim }] },
                  ]}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(snakeScaleAnim)}
              onPressOut={() => handlePressOut(snakeScaleAnim)}
              onPress={handleNav}
            >
              <View>
                <Image source={Bg} style={styles.bg} />
                <Animated.Image
                  source={Snake}
                  style={[
                    styles.Snake,
                    { transform: [{ scale: snakeScaleAnim }] },
                  ]}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <Footer navigation={navigation} currentScreen="HomeScreen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.home_bg,
  },
  innercontainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: height * 0.13,
  },
  homebox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  banner: {
    height: 270,
    width: 393,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  logotext: {
    height: 225,
    width: 300,
    top: 18,
    left: 24,
  },
  games: {
    marginTop: height * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bg: {
    width: 150,
    height: 141,
  },
  Ludo: {
    top: -160,
    left: -20,
    width: 190,
    height: 181,
  },
  Snake: {
    top: -160,
    width: 146,
    height: 160,
  },
});
