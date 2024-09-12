import { View, Image, StyleSheet, Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { BackgroundImages } from "@/utils/GetIcon";
import LottieView from "lottie-react-native";
import DiceRoll from "@/assets/animation/diceroll.json";

const Arrow = require("@/assets/images/arrow.png");

interface DiceProps {
  color?: any;
  rotate?: any;
  player?: any;
  data?: any;
}

const Dice = React.memo(({ color, rotate, player, data }: DiceProps) => {
  const diceNo = 5;
  const pileIcon = BackgroundImages.GetImage(color);
  const diceIcon = BackgroundImages.GetImage(diceNo);

  const arrowAnim = React.useRef(new Animated.Value(0)).current;
  const [diceRolling, setDiceRolling] = React.useState(false);

  useEffect(() => {
    const animateArrow = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(arrowAnim, {
            toValue: 10,
            duration: 600,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(arrowAnim, {
            toValue: -10,
            duration: 600,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateArrow();
  }, []);
  return (
    <View
      style={[styles.flexRow, { transform: [{ scaleX: rotate ? -1 : 1 }] }]}
    >
      <View style={styles.border1}>
        <LinearGradient
          style={styles.linearGrad}
          colors={["#0052be", "#5f9fcb", "#97c6c9"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View>
            <Image
              source={pileIcon}
              style={styles.pileIcon}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.border2}>
        <LinearGradient
          style={styles.diceGrad}
          colors={["#aac8b", "#aac8b", "#aac8b"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View style={styles.diceContainer}>
            <Image source={diceIcon} style={styles.dice} />
          </View>
        </LinearGradient>
      </View>

      {diceRolling && (
        <Animated.View style={{ transform: [{ translateX: arrowAnim }] }}>
          <Image source={Arrow} style={{ width: 30, height: 30 }} />
        </Animated.View>
      )}

      {diceRolling && (
        <LottieView
          source={DiceRoll}
          style={styles.rollingDice}
          loop={false}
          autoPlay
          cacheComposition={true}
          hardwareAccelerationAndroid
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  flexRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  border1: {
    borderWidth: 3,
    borderRightWidth: 0,
    borderColor: "#f0ce2c",
  },
  border2: {
    borderWidth: 3,
    padding: 1,
    backgroundColor: "#aac8ab",
    borderRadius: 10,
    borderLeftWidth: 3,
    borderColor: "#aac8ab",
  },
  linearGrad: {
    padding: 10,
    borderRadius: 10,
  },
  pileIcon: {
    width: 35,
    height: 35,
  },
  pileContainer: {
    paddingHorizontal: 3,
  },
  diceContainer: {
    backgroundColor: "#e8c0c1",
    borderWidth: 1,
    borderRadius: 5,
    width: 55,
    height: 55,
    paddingHorizontal: 8,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  diceGrad: {
    borderWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#f0ce2c",
    justifyContent: "center",
    alignItems: "center",
  },
  dice: {
    height: 45,
    width: 45,
  },
  rollingDice: {
    height: 80,
    width: 80,
    zIndex: 99,
    top: -25,
    position: "absolute",
  },
});

export default Dice;
