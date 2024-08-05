import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";

const data = {
  AppLogo: require("@/assets/images/appLogo.png"),
  WalletLogo: require("@/assets/images/wallet.png"),
  Ludo: require("@/assets/images/ludo.png"),
  Snake: require("@/assets/images/snake.png"),
  LogotextLudo: require("@/assets/images/logotext1.png"),
  LogotextSnake: require("@/assets/images/logotext2.png"),
  Bg: require("@/assets/images/bg.png"),
};

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [bannerImage, setBannerImage] = useState(data.LogotextLudo);
  const dispatch = useDispatch()<any>;

  const ludoScaleAnim = useRef(new Animated.Value(1)).current;
  const snakeScaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerImage((prevImage: any) =>
        prevImage === data.LogotextLudo ? data.LogotextSnake : data.LogotextLudo
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
                <Image source={data.Bg} style={styles.bg} />
                <Animated.Image
                  source={data.Ludo}
                  style={[
                    styles.Ludo,
                    { transform: [{ scale: ludoScaleAnim }] },
                  ]}
                />
                <Text style={styles.gameText}>Ludo Supreme</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(snakeScaleAnim)}
              onPressOut={() => handlePressOut(snakeScaleAnim)}
              onPress={handleNav}
            >
              <View>
                <Image source={data.Bg} style={styles.bg} />
                <Animated.Image
                  source={data.Snake}
                  style={[
                    styles.Snake,
                    { transform: [{ scale: snakeScaleAnim }] },
                  ]}
                />
                <Text style={styles.gameText}>Snakes & Ladder</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
}
