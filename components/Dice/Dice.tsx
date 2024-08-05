import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { BackgroundImages } from "@/Utils/GetIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPlayerChance, selectDiceNo, selectDiceRolled } from "@/store/Reducers/gameSelection";
import { RootState } from "@/store";
import { current } from "@reduxjs/toolkit";
import { enablePileSelection, updateDiceNo, updatePlayerChance } from "@/store/Reducers/gameSlice";
// import LottieView from "lottie-react-native";
// interface diceState{
//   color:any,
//   player:Number,
//   data:{},
//   rotate:any,
// }

const Dice = React.memo(({ color, player, data, rotate }:any) => {
  const dispatch = useDispatch()
  const currentPlayerChance=useSelector(selectCurrentPlayerChance)
  const isDiceRolled= useSelector(selectDiceRolled)

  const diceNo=useSelector((state:RootState)=>state.game.diceNo)
  const playerPieces=useSelector(
    (state:any)=>state.game[`player${currentPlayerChance}`],
  )

  const pileIcon = BackgroundImages.GetImage(color);
  const diceIcon = BackgroundImages.GetImage(diceNo);

  const delay=(ms:any)=>new Promise(resolve=>setTimeout(resolve,ms));
  const handelDicePress =async ()=>{
    const newDiceNo=Math.floor(Math.random()*6)+1
    console.log(newDiceNo)
    await delay(800)
    dispatch(updateDiceNo({diceNo:newDiceNo}))

    const isAnyPieceAlive=data?.findIndex((i:any)=>i.pos!=0 && i.pos!=57);
    const isAnyPieceLocked= data?.findIndex((i:any)=>i.pos==0)

    if(isAnyPieceAlive==-1)
    {
      if(newDiceNo==6)
      {dispatch(enablePileSelection({playerNo:player}))}
      else
      {
        let chancePlayer=player+1;
        if(chancePlayer>4)
        {
          chancePlayer=1
        }
        await delay(600)
        dispatch(updatePlayerChance({chancePlayer:chancePlayer}))
      }
    }
    else{
      const canMove= playerPieces.some((pile:any)=>pile.travelCount+newDiceNo<=57 && pile.pos!=0)
    }
  }
 

  return (
    <View
      style={[styles.flexRow, { transform: [{ scaleX: rotate ? -1 : 1 }] }]}
    >
      <View style={styles.border1}>
        <Image
          source={require("../../assets/images/spidy.jpg")}
          style={styles.userImage}
        />
      </View>
      <View style={styles.border2}>
        { currentPlayerChance==player ? (
          <TouchableOpacity
          onPress={handelDicePress}
          >
          <Image source={diceIcon} style={styles.Dice} />
        </TouchableOpacity>
         ) :<></> 

}
      </View>
      {/* <LottieView
      source={}
      style={styles.RollingDice}
      loop={false}
      autoplay
      cacheComposition={true}
      
      /> */}
    </View>
  );
});

export default Dice;

const styles = StyleSheet.create({
  flexRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  border1: {
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "white",
    height: 55,
    width: 56,
  },
  border2: {
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    borderRadius: 20,
    borderLeftWidth: 3,
    width: 66,
    height: 63,
    borderColor: Colors.golden,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  Dice: {
    width: 51,
    height: 48,
  },

  linerGrdient: {},
  diceGrdient: {},
  diceContainer: {},
  pileIcon: {
    // width:35,
    // height:35,
  },
  // RollingDice:{
  //   height:80,
  //   width:80,
  //   zIndex:99,
  //   top:-25,
  //   position:"absolute"
  // },
  pileContainer: {
    paddingHorizontal: 3,
  },
});
