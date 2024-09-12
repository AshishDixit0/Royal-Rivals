import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useCallback } from "react";
import { BackgroundImages } from "@/utils/GetIcon";
import { useSelector } from "react-redux";
import {
  selectCellSelection,
  selectDiceNo,
  selectPocketPileSelection,
} from "@/store/Reducers/gameSelection";
import { useMemo } from "react";
import { RootState } from "@/store";

const Pile = ({ color, player, pieceId, onPress, cell }: any) => {
  console.log('this is the player: ', player);
  
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
  const isCellEnabled = useMemo(() => 
    player === currentPlayerCellSelection,
    [player, currentPlayerCellSelection]
  );

  const isForwardable = useCallback(() => {
    const piece = playerPieces?.find((item: any) => item.id === pieceId);

    return piece && piece.travelCount + diceNo <= 57;
  }, [playerPieces, pieceId, diceNo]);

  return (
    <TouchableOpacity
      style={styles.continer}
      disabled={!(cell ? isCellEnabled && isForwardable() : isPileEnabled)}
      onPress={onPress}
    >
      <Image source={pileImage} style={styles.image} />
    </TouchableOpacity>
  );
};

export default React.memo(Pile);

const styles = StyleSheet.create({
  continer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
  },
  image: {
    width: 23,
    height: 34,
    marginBottom: 10,
  },
});
