import { StyleSheet, Text, Touchable, TouchableOpacity, View,Image } from 'react-native'
import React, { useCallback } from 'react'
import { BackgroundImages } from '@/Utils/GetIcon'
import { useSelector } from 'react-redux';
import { selectCellSelection, selectDiceNo, selectPocketPileSelection } from '@/store/Reducers/gameSelection';
import { useMemo } from 'react';
import { RootState } from '@/store';

const Pile = ({color, player, pieceId,onPress,cell }:any) => {
  console.log(pieceId,"iddddd")
  const pileImage = BackgroundImages.GetImage(color);
  const currentPlayerPileSelection=useSelector(selectPocketPileSelection)
  const currentPlayerCellSelection=useSelector(selectCellSelection)
  const diceNo=useSelector(selectDiceNo)
  const playerPieces=useSelector((state:any)=>state.game[`player${player}`])
  const isPileEnabled=useMemo(()=>player===currentPlayerPileSelection,[player,currentPlayerPileSelection])
  const isCellEnabled=useMemo(()=>player===currentPlayerCellSelection,[player,currentPlayerCellSelection])
  const isForwardable=useCallback(()=>{
    // console.log(playerPieces,"pieces........")
    const piece = playerPieces?.find((item:any)=>item.id===pieceId)
    console.log(piece ,"check...")
    return piece && piece.travelCount + diceNo<=57;
  },[playerPieces,pieceId,diceNo])

// console.log(cell,!(cell?isCellEnabled && isForwardable():isPileEnabled),"cellllll")
// console.log(isCellEnabled,"enb");
console.log(isForwardable(),"for");
// console.log(isPileEnabled,"pile");



  return (
    <TouchableOpacity style={styles.continer} 
    disabled={!(cell?isCellEnabled && isForwardable():isPileEnabled)}
    onPress={onPress} 
    >
      <Image source={pileImage} style={styles.image}/>
    </TouchableOpacity>
  )
}
 
export default React.memo(Pile)

const styles = StyleSheet.create({
  continer:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    alignSelf:"center",
   
  },
  image:{
    width:23,
    height:34,
    marginBottom:10
  },

})