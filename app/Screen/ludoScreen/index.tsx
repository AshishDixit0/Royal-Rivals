import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
// import GameHeader from "@/components/GameHeader/GameHeader";
// import React from "react";
import Dice from "@/components/Dice/Dice";
import { Colors } from "@/constants/Colors";
import Pocket from "@/components/Pocket/Pocket";
import VerticalPath from "@/components/VerticalPath/VerticalPath";
import { plot1Data, Plot2Data, plot3Data, plot4Data } from "@/utils/PlotData";
import HorizontalPath from "@/components/HorizontalPath/HorizontalPath";
import FourTriangles from "@/components/FourTriangles/FourTriangles";
import { useSelector } from "react-redux";
import { selectDiceTouch, selectPlayer1, selectPlayer2, selectPlayer3, selectPlayer4 } from "@/store/Reducers/gameSelection";
import Timer from "@/components/Timer/Timer";

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
    <SafeAreaView style={styles.container}>
      
     
      <View style={styles.container2}>
      <View style={styles.timer}>
      <Timer/>
      </View>
        <View style={styles.innerContainer}>
          <View style={styles.flexRow} pointerEvents={isDiceTouch?'none':'auto'}>
            <Dice color={Colors.Red} player={2} data={player2} />
            <Dice color={Colors.Green} rotate  player={3} data={player3}/>
          </View>
          <View style={styles.ludoBoard}>
            <View style={styles.plotContainer}>
              <Pocket color={Colors.Red} player={2} data={player2}/>
              <VerticalPath cells={Plot2Data} color={Colors.Green} />
              <Pocket color={Colors.Green} player={3} data={player3} />
            </View>
            <View style={styles.pathContainer}>
              <HorizontalPath cells={plot1Data} color={Colors.Red} />
              <FourTriangles
              player1={player1}
              player2={player2}
              player3={player3}
              player4={player4}

              />
              <HorizontalPath cells={plot3Data} color={Colors.Yellow} />
            </View>
            <View style={styles.plotContainer}>
              <Pocket color={Colors.Blue} player={1} data={player1}/>
              <VerticalPath cells={plot4Data} color={Colors.Blue} />
              <Pocket color={Colors.Yellow} player={4} data={player4} />
            </View>
          </View>
          <View style={styles.flexRow} pointerEvents={isDiceTouch?'none':'auto'}  >
            <Dice color={Colors.Blue} player={1} data={player1}/>
            <Dice color={Colors.Yellow} rotate player={4} data={player4}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
  timer:{
    position:"absolute",
    top:130,
    right:60,
    // backgroundColor:"red"
  },
  container2: {
    top:50,
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width,
    // backgroundColor:"green"
  },
  innerContainer: {
    alignSelf: "center",
    justifyContent:"center",
    height: height * 0.45,
    width: width,
    // backgroundColor:"red"
  },
  pathContainer: {
    flexDirection: "row",
    // width: "100%",
    height: "16%",
    alignItems:"center",
    justifyContent: "center",
    paddingLeft:0,
    // paddingRight:5,
    
    // backgroundColor: "#1E5162",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
   
  },
  ludoBoard: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifyContent:"center",

    // backgroundColor:"red"
    // gap:2
   
    //  flexDirection:"row",
  },
  plotContainer: {
    flexDirection: "row",
    // width: "100%",
    // height: "40%",
    alignItems:"center",
    justifyContent: "center",
    // margin:2,
    // gap:2,
    // backgroundColor: "#ccc",
  },
});
