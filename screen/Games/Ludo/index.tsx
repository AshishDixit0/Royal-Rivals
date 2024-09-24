import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Wrapper from "./components/Wrapper";
import { deviceHeight, deviceWidth } from "@/constants/scaling";
import Dice from "./components/Dice";
import { Colors } from "@/constants/Colors";
import Pocket from "./components/Pocket";
import VerticalPath from "./components/path/VerticalPath";
import { plot1Data, Plot2Data, plot3Data, plot4Data } from "@/utils/PlotData";
import HorizontalPath from "./components/path/HorizontalPath";
import FourTriangles from './components/FourTriangles';
import { useSelector } from "react-redux";
import { selectDiceTouch, selectPlayer1, selectPlayer2, selectPlayer3, selectPlayer4 } from "@/store/Reducers/gameSelection";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { clearStorage } from "@/store/storage";

export default function Ludo() {
  const player1 = useSelector(selectPlayer1)
  const player2 = useSelector(selectPlayer2)
  const player3 = useSelector(selectPlayer3)
  const player4 = useSelector(selectPlayer4)

  const isDiceTouched = useSelector(selectDiceTouch);
  const winner = useSelector(( state: any ) => state.game.winner)

  const isFocused = useIsFocused();

  const [showStartImage, setShowStartImage] = useState(false);
  const oacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    clearStorage();
  }, [])

  return (
    <Wrapper style={{}}>
      <View style={styles.container}>
        {/* top tokens */}
        <View style={styles.flexRow}>
          <Dice color={Colors.Green} player={2} data={player2}/>
          <Dice color={Colors.Yellow} rotate data={player3} player={3} />
        </View>
        {/* Ludo board */}
        <View style={styles.ludoBoard}>
          <View style={styles.plotContainer}>
            <Pocket color={Colors.Green} player={2} data={player2} />
            <VerticalPath cells={Plot2Data} color={Colors.Yellow}  />
            <Pocket color={Colors.Yellow} player={3} data={player3} />
          </View>

          <View style={styles.pathContainer}>
            <HorizontalPath cells={plot1Data} color={Colors.Green} />
            <FourTriangles />
            <HorizontalPath cells={plot3Data} color={Colors.Yellow} />
          </View>

          <View style={styles.plotContainer}>
            <Pocket color={Colors.Red} player={1} data={player1} />
            <VerticalPath cells={plot4Data} color={Colors.Red}  />
            <Pocket color={Colors.Blue} player={4} data={player4} />
          </View>

        </View>
        {/* Bottom tokens */}
        <View style={styles.flexRow}>
          <Dice color={Colors.Red} player={1} data={player1} />
          <Dice color={Colors.Blue} rotate player={4} data={player4} />
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "center",
    height: deviceHeight * 0.5,
    width: deviceWidth,
  },
  flexRow: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  ludoBoard: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    padding: 10,
  },
  plotContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  pathContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
    backgroundColor: '#1e5162',
  }
});
