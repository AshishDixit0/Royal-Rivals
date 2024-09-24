import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from "react-native";
import React, { useCallback, useEffect, useMemo } from "react";
import { BackgroundImages } from "@/utils/GetIcon";
import { Svg, Circle } from "react-native-svg";
import { useSelector } from "react-redux";
import {
  selectCellSelection,
  selectDiceNo,
  selectPocketPileSelection,
} from "@/store/Reducers/gameSelection";

interface PileProps {
  player: any;
  color: any;
  onPress: any;
  pieceId: any;
  cell: any
}

const Pile = ({ cell, player, color, onPress, pieceId }: PileProps) => {
  const rotation = React.useRef(new Animated.Value(0)).current;
  const pileImage = BackgroundImages.GetImage(color);

  const currentPlayerPileSelection = useSelector(selectPocketPileSelection);
  const currentPlayerCellSelection = useSelector(selectCellSelection);
  const diceNo = useSelector(selectDiceNo);
  const playerPieces = useSelector(
    (state: any) => state.game[`player${player}`]
  );

  const isPileEnabled = useMemo(
    () => player === currentPlayerPileSelection,
    [player, currentPlayerPileSelection]
  );

  const isCellEnabled = useMemo(
    () => player === currentPlayerCellSelection,
    [player, currentPlayerCellSelection]
  );

  const isForwardable = useCallback(() => {
    const piece = playerPieces?.find((item: any) => item.id === pieceId);
    return piece && piece.travelCount + diceNo <= 57;
  }, [playerPieces, pieceId, diceNo])

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    rotateAnimation.start();

    return () => rotateAnimation.stop();
  }, []);

  const rotateInterpolate = React.useMemo(
    () =>
      rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      }),
    [rotation]
  );

  return (
    <TouchableOpacity style={styles.container}
      activeOpacity={0.5}
      disabled={!(cell ? isCellEnabled && isForwardable(): isPileEnabled)}
      onPress={onPress}
    >
      <View style={styles.hollowCircle}>
        {(cell ? isCellEnabled && isForwardable(): isPileEnabled) && 
        <View style={styles.dashedCircleContainer}>
          <Animated.View
            style={[
              styles.dashedCircle,
              { transform: [{ rotate: rotateInterpolate }] },
            ]}
          >
            <Svg height={18} width={18}>
              <Circle
                cx={9}
                cy={9}
                r="8"
                stroke={"white"}
                strokeWidth={2}
                strokeDasharray="4 4"
                strokeDashoffset="0"
                fill={"transparent"}
              />
            </Svg>
          </Animated.View>
        </View>
        }
      </View>
      <Image source={pileImage} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "center",
  },
  image: {
    width: 32,
    height: 32,
    position: "absolute",
    top: -16,
  },
  hollowCircle: {
    width: 15,
    height: 15,
    position: "absolute",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  dashedCircleContainer: {},
  dashedCircle: {},
});
export default Pile;
