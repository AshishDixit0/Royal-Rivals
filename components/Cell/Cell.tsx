import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useMemo } from 'react'
import Pile from '../Pile/Pile'
import { arrowSpot, safeSpot, starSpot } from '@/Utils/PlotData'

const Cell = ({cell,color,id}:any) => {

  const isSafeSpot=useMemo(()=>safeSpot.includes(id),[id])
  const isStarSpot=useMemo(()=>starSpot.includes(id),[id])
  const isArrowSpot=useMemo(()=>arrowSpot.includes(id),[id])


  return (
    <View style={[styles.container,{backgroundColor:isSafeSpot?color:"white"}]}>

{isStarSpot && <Image source={require("../../assets/images/star.png")} />}
{isArrowSpot && id===38 && <Image source={require("../../assets/images/arrow.png")}/>}
{isArrowSpot && id===25 && <Image source={require("../../assets/images/arrow1.png")}/>}
{isArrowSpot && id===12 && <Image source={require("../../assets/images/arrow2.png")}/>}
{isArrowSpot && id===51 && <Image source={require("../../assets/images/arrow3.png")}/>}


     {/* <Pile
     cell={true}
     player={2}
     onPress={()=>{

     }}
     /> */}
   
    </View>
  )
}

export default Cell

const styles = StyleSheet.create({
    container:{
        borderWidth:0.4,
        borderColor:"black",
        width:22.6,
        height:23.33,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4,
        margin:1
      
       
    },
    pieceConatiner:{
position:"absolute",
top:0,
bottom:0,
zIndex:99,
    }
})