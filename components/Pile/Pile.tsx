import { StyleSheet, Text, Touchable, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { BackgroundImages } from '@/Utils/GetIcon'

const Pile = ({color, player, pieceId,onPress,cell }:any) => {
  const pileImage = BackgroundImages.GetImage(color)
  return (
    <TouchableOpacity style={styles.continer}>
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