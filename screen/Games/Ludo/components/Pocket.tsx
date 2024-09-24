import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import Pile from "./Pile";
import { useDispatch } from "react-redux";
import { unfreezDice, updatePlayerPieceValue } from "@/store/Reducers/gameSlice";
import { startingPoint } from "@/utils/PlotData";

interface PocketProps {
  color: any;
  player: any;
  data: any;
}

interface PlotProps {
  pieceNo: number;
  player: any;
  color: any;
  data: any;
  onPress: any;
}

const Plot = ({ pieceNo, player, color, data, onPress }: PlotProps) => {
  console.log('this is the pieceNo', data[pieceNo]?.pos);
  
  return (
    <View style={[styles.plot, { backgroundColor: color }]}>
      {data && data[pieceNo]?.pos === 0 && (
        <Pile pieceId={pieceNo} player={player} color={color} onPress={() => onPress(data[pieceNo])} />
      )}
    </View>
  );
};

const Pocket = React.memo(({ color, player, data }: PocketProps) => {
  const dispatch = useDispatch();

  const handlePress = async (value: any) => {
    let playerNo = value?.id[0];
    switch (playerNo) {
      case "A":
        playerNo = "player1";
        break;
      case "B":
        playerNo = "player2";
        break;
      case "C":
        playerNo = "player3";
        break;
      case "D":
        playerNo = "player4";
        break;
    }

    dispatch(updatePlayerPieceValue({
      playerNo,
      pieceId: value.id,
      pos: startingPoint[parseInt(playerNo.match(/\d+/)[0]) - 1],
      travelCount: 1,
    }))

    dispatch(unfreezDice());
  };
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.childFrame}>
        <View style={styles.flexRow}>
          <Plot pieceNo={0} player={player} color={color} data={data} onPress={handlePress}/>
          <Plot pieceNo={1} player={player} color={color}  data={data} onPress={handlePress} />
        </View>
        <View style={[styles.flexRow, { marginTop: 20 }]}>
          <Plot pieceNo={2} player={player} color={color}  data={data} onPress={handlePress} />
          <Plot pieceNo={3} player={player} color={color}  data={data} onPress={handlePress} />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: "100%",
  },
  childFrame: {
    backgroundColor: "white",
    width: "70%",
    height: "70%",
    borderColor: Colors.checkboxBorder,
    padding: 15,
    borderWidth: 0.4,
  },
  flexRow: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "40%",
    flexDirection: "row",
  },
  plot: {
    height: "80%",
    width: "36%",
    borderRadius: 120,
  },
});

export default Pocket;
