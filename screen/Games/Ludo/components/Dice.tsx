import { View, Image, StyleSheet, Animated, Easing, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { BackgroundImages } from "@/utils/GetIcon";
import LottieView from "lottie-react-native";
import DiceRoll from "@/assets/animation/diceroll.json";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPlayerChance, selectDiceNo, selectDiceRolled } from "@/store/Reducers/gameSelection";
import { enableCellSelection, enablePileSelection, updateDiceNo, updatePlayerChance } from "@/store/Reducers/gameSlice";

const Arrow = require("@/assets/images/arrow.png");

interface DiceProps {
  color?: any;
  rotate?: any;
  player?: any;
  data?: any;
}

const Dice = React.memo(({ color, rotate, player, data }: DiceProps) => {
  const dispatch = useDispatch()
  const currentPlayerChance = useSelector(selectCurrentPlayerChance);
  const isDiceRolled = useSelector(selectDiceRolled);
  const diceNo = useSelector(selectDiceNo);
  const playerPieces = useSelector((state: any) => state.game[`player${currentPlayerChance}`]);
  // const diceNo = 5;
  const pileIcon = BackgroundImages.GetImage(color);
  const diceIcon = BackgroundImages.GetImage(diceNo);

  const arrowAnim = React.useRef(new Animated.Value(0)).current;
  const [diceRolling, setDiceRolling] = React.useState(false);

  const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

  const handleDicePress = async () => {
    const newDiceNo = Math.floor(Math.random() * 6) + 1;
    setDiceRolling(true);
    await delay(800);
    dispatch(updateDiceNo({ diceNo: newDiceNo }));
    setDiceRolling(false);

    const isAnyPieceAlive = data?.findIndex((i: any) =>i.pos != 0 && i.pos != 57);
    const isAnyPieceLocked = data.findIndex((i: any) => i.pos == 0);

    if(isAnyPieceAlive == -1) {
      if(newDiceNo == 6) {
        dispatch(enablePileSelection({ playerNo: player }))
      } else {
        let chancePlayer = player + 1;
        if(chancePlayer > 4) { chancePlayer = 1; }
        await delay(600);
        dispatch(updatePlayerChance({ chancePlayer: chancePlayer }));
      }
    } else {
      const canMove = playerPieces.some((pile: any) => pile.travelCount + newDiceNo <= 57 && pile.pos != 0);
      if((!canMove && newDiceNo == 6 && isAnyPieceLocked == -1) ||
      (!canMove && newDiceNo != 6 && isAnyPieceLocked != -1) ||
      (!canMove && newDiceNo != 6 && isAnyPieceLocked == -1)
    ) {
        let chancePlayer = player + 1;
        if (chancePlayer > 4) {
          chancePlayer = 1;
        }
        await delay(600);
        dispatch(updatePlayerChance({ chancePlayer }));
        return;
      }
      if(newDiceNo == 6) {
        dispatch(enablePileSelection({ playerNo: player }));
      }
      dispatch(enableCellSelection({ playerNo: player }));
    }
  }

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
            {currentPlayerChance === player && !diceRolling && (
              <TouchableOpacity
              disabled={isDiceRolled}
              activeOpacity={0.4}
              onPress={handleDicePress}
              >
                <Image source={diceIcon} style={styles.dice} />
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </View>

      {currentPlayerChance === player && !diceRolling && (
        <Animated.View style={{ transform: [{ translateX: arrowAnim }] }}>
          <Image source={Arrow} style={{ width: 30, height: 30 }} />
        </Animated.View>
      )}

      {currentPlayerChance === player && diceRolling && (
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
