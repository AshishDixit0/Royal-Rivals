import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Pile from "../Pile/Pile";
import { Colors } from "@/constants/Colors";
import { BgImages } from "@/Utils/GetBgImage";

const Pocket = React.memo(({ color, player }: any) => {
  const backgroundImage = BgImages.GetImage(color)
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.bgImage}
      >
        <View style={styles.childFrame}>
          <View style={styles.flexRow}>
            <Plot piecNo={0} player={player} color={color} />
            <Plot piecNo={1} player={player} color={color} />
          </View>
          <View style={[styles.flexRow,{marginTop:20}]}>
            <Plot piecNo={0} player={player} color={color} />
            <Plot piecNo={1} player={player} color={color} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
});

const Plot = ({ piecNo, player, color }: any) => {
  return (
    <View style={[styles.plot, { backgroundColor: color }]}>
      <Pile color={color} player={player}/>
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
    // height:"80%",
    // width:"36%",
    borderRadius:120,
  },
});
export default Pocket;
