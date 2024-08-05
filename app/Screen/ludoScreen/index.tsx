import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import GameHeader from "@/components/GameHeader/GameHeader";
import React from "react";
import Dice from "@/components/Dice/Dice";
import { Colors } from "@/constants/Colors";
import Pocket from "@/components/Pocket/Pocket";
import VerticalPath from "@/components/VerticalPath/VerticalPath";
import { plot1Data, Plot2Data, plot3Data, plot4Data } from "@/Utils/PlotData";
import HorizontalPath from "@/components/HorizontalPath/HorizontalPath";
import FourTriangles from "@/components/FourTriangles/FourTriangles";
import { useSelector } from "react-redux";
import { selectDiceTouch, selectPlayer1, selectPlayer2, selectPlayer3, selectPlayer4 } from "@/store/Reducers/gameSelection";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const LudoScreen = () => {

const player1= useSelector(selectPlayer1)
const player2= useSelector(selectPlayer2)
const player3= useSelector(selectPlayer3)
const player4= useSelector(selectPlayer4)

const isDiceTouch = useSelector(selectDiceTouch)
const winner = useSelector((state:any)=>state.game.winner)

  return (
    <View style={styles.container}>
      {/* <GameHeader /> */}
      <View style={styles.container2}>
        <View style={styles.innerContainer}>
          <View style={styles.flexRow}>
            <Dice color={Colors.Green} player={2} />
            <Dice color={Colors.Yellow} rotate  player={3}/>
          </View>
          <View style={styles.ludoBoard}>
            <View style={styles.plotContainer}>
              <Pocket color={Colors.Red} player={2} />
              <VerticalPath cells={Plot2Data} color={Colors.Green} />
              <Pocket color={Colors.Green} player={3} />
            </View>
            <View style={styles.pathContainer}>
              <HorizontalPath cells={plot1Data} color={Colors.Red} />
              <FourTriangles/>
              <HorizontalPath cells={plot3Data} color={Colors.Yellow} />
            </View>
            <View style={styles.plotContainer}>
              <Pocket color={Colors.Blue} player={1} />
              <VerticalPath cells={plot4Data} color={Colors.Blue} />
              <Pocket color={Colors.Yellow} player={4} />
            </View>
          </View>
          <View style={styles.flexRow}>
            <Dice color={Colors.Red} player={1}/>
            <Dice color={Colors.Yellow} rotate player={4}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LudoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.home_bg,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width,
  },
  innerContainer: {
    alignSelf: "center",
    height: height * 0.5,
    width: width,
    // backgroundColor:"red"
  },
  pathContainer: {
    flexDirection: "row",
    width: "100%",
    height: "20%",
    alignItems:"center",
    justifyContent: "space-between",
    // backgroundColor: "#1E5162",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
   
  },
  ludoBoard: {
    // width: "100%",
    // height: "100%",
    alignSelf: "center",
    // gap:2
   
    //  flexDirection:"row",
  },
  plotContainer: {
    flexDirection: "row",
    width: "100%",
    // height: "40%",
    alignItems:"center",
    justifyContent: "space-between",
    margin:2,
    // gap:2,
    // backgroundColor: "#ccc",
  },
});
