import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Pile from "../Pile/Pile";
import { Colors } from "@/constants/Colors";
import { BgImages } from "@/Utils/GetBgImage";
import { useDispatch } from "react-redux";
import { unfreezDice, updatePlayerPieceValue } from "@/store/Reducers/gameSlice";
import { startingPoint } from "@/Utils/PlotData";

const Pocket = React.memo(({ color, player,data }: any) => {
  const backgroundImage = BgImages.GetImage(color)

  const dispatch =useDispatch()
  const handelPress=async (value:any)=>{
    let playerNo=value?.id[0]
    switch(playerNo)
    {
      case'A':
      playerNo='player1'
      break;
      case'B':
      playerNo='player2'
      break;
      case'C':
      playerNo='player3'
      break;
      case'D':
      playerNo='player4'
      break;
    }
    dispatch(updatePlayerPieceValue({
      playerNo:playerNo,
      pieceId:value.id,
      pos:startingPoint[parseInt(playerNo.match(/\d+/)[0])-1],
      travelCount:1,
    }))
    dispatch(unfreezDice())
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.bgImage}
      >
        <View style={styles.childFrame}>
          <View style={styles.flexRow}>
            <Plot piecNo={0} data={data} player={player} color={color} onPress={handelPress} />
            <Plot piecNo={1} data={data} player={player} color={color} onPress={handelPress} />
          </View>
          <View style={[styles.flexRow,{marginTop:20}]}>
            <Plot piecNo={2} data={data} player={player} color={color} onPress={handelPress}/>
            <Plot piecNo={3} data={data} player={player} color={color} onPress={handelPress}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
});

const Plot = ({ piecNo, player, color,data,onPress }: any) => {
  console.log(data,"pieceeeeee")
  return (
    <View style={[styles.plot, { backgroundColor: color }]}>
      {data && data[piecNo]?.pos===0 &&
     ( 
     <Pile color={color} player={player} onPress={()=>onPress(data[piecNo])}/>
    )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 153.43,
    height: 142.57,
    // borderColor: "#34981A",
    borderRadius: 20,
    // margin:2,
  },
  bgImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  childFrame: {
    backgroundColor: "white",
    width: 96.01,
    height: 90.8,
    padding: 15,
    // borderColor: "#34981A",
    borderRadius:20
  },
  flexRow: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "40%",
    flexDirection: "row",
  },
  plot: {
    // display:"flex",
   justifyContent:"center",
   alignItems:"center",
    height:19.52,
    width:21.53,
    borderRadius:100
  },
});
export default Pocket;
