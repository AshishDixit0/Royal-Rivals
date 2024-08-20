import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import Cell from '../Cell/Cell';

const HorizontalPath = React.memo(({cells,color}:any) => {
    const groupedCells = useMemo(()=>{
        const groups=[]
        for(let i=0;i<cells.length;i+=6)
        {
        groups.push(cells.slice(i,i+6))
        }
        return groups

    },[cells])
  return (
    <View style={styles.container}>
   <View style={styles.innerContainer}>
{groupedCells.map((group,groupIndex)=>(
    <View key={`group=${groupIndex}`} style={styles.group}>
{
    group.map((id:Number)=>{
        return(
        <Cell key={`cell-${id}`} cell={true} color={color} id={id}/>
        )
    })
}
    </View>
)

)}
   </View>
    </View>
  )
}); 

export default HorizontalPath

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        width:150.21,
        height:69.59,
        paddingLeft:7
    },
    innerContainer:{
        flexDirection:"column",
        // width:"100%",
        // height:"100%",
        // gap:2,
    },
    group:{
        flexDirection:"row",
        // width:"16.7%",
        // height:"33.3%",
        // gap:2,
    }
})