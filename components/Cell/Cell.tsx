import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import Pile from '../Pile/Pile'
import { arrowSpot, safeSpot, starSpot } from '@/Utils/PlotData'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentPostions } from '@/store/Reducers/gameSelection'
import { Colors } from '@/constants/Colors'
import { handleForwardThunk } from '@/store/Reducers/gameAction'
import { AppDispatch } from '@/store'

const Cell = ({cell,color,id}:any) => {
  const dispatch = useDispatch()
  const plotedPieces = useSelector(selectCurrentPostions)

  const isSafeSpot=useMemo(()=>safeSpot.includes(id),[id])
  const isStarSpot=useMemo(()=>starSpot.includes(id),[id])
  const isArrowSpot=useMemo(()=>arrowSpot.includes(id),[id])

  const piecesAtPosition = useMemo(()=>
    plotedPieces.filter((item:any)=>item.pos==id)
  ,[plotedPieces,id])


  const handlePress = useCallback((playerNo: any, pieceId: any) => {
    (dispatch as AppDispatch)(handleForwardThunk(playerNo, pieceId, id))
  }, [dispatch, id])

  return (
    <View style={[styles.container,{backgroundColor:isSafeSpot?color:"white"}]}>

{isStarSpot && <Image source={require("../../assets/images/star.png")} />}
{isArrowSpot && id===38 && <Image source={require("../../assets/images/arrow.png")}/>}
{isArrowSpot && id===25 && <Image source={require("../../assets/images/arrow1.png")}/>}
{isArrowSpot && id===12 && <Image source={require("../../assets/images/arrow2.png")}/>}
{isArrowSpot && id===51 && <Image source={require("../../assets/images/arrow3.png")}/>}


{piecesAtPosition?.map((piece: any, index: number) => {
    const playerNo = piece.id[0] === 'A' ? 1 : piece.id[0] === 'B' ? 2 : piece.id[0] === 'C' ? 3 : 4;
    const pieceColor = piece.id[0] === 'A' ? Colors.Blue : piece.id[0] === 'B' ? Colors.Red : piece.id[0] === 'C' ? Colors.Green : Colors.Yellow;

    return (
        <View 
        key={piece.id}
        style={[
          styles.pieceConatiner,{
            transform:[{
              scale:piecesAtPosition.length===1?1:0.7
            },{
              translateX:piecesAtPosition.length===1?0: index%2===0?-6:6
            },
            {
              translateY:piecesAtPosition.length===1?0:index<2?-6:6
            }
      ]
          }
        ]}
        >
        
            <Pile cell={true} playerNo={playerNo} onPress={()=>handlePress(playerNo,piece.id)} pieceId={piece.id} color={pieceColor}/>
        </View>
    );
})}

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
        // margin:1
      
       
    },
    pieceConatiner:{
position:"absolute",
top:0,
bottom:0,
zIndex:99,
    }
})