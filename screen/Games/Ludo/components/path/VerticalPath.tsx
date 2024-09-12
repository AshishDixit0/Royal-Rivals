import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Cell from './Cell'

interface VerticalPathProps {
    color: any,
    cells: any
}

const VerticalPath = React.memo(({ color, cells }: VerticalPathProps) => {
    const groupedCell = React.useMemo(() => {
        const groups = []
        for(let i = 0; i < cells.length; i+=3) {
            groups.push(cells.slice(i, i + 3 ))
        }
        return groups
    }, [cells])

  return (
    <View style={styles.continer}>
        <View style={styles.flexCol}>
            {groupedCell.map((group, groupIndex) => (
                <View key={`group=${groupIndex}`} style={styles.cellMap}>
                    {group.map((id: any) => {
                       return (
                            <Cell key={`cell-${id}`} id={id} color={color} />
                       )
                    })}
                </View>
            ))}
        </View>
    </View>
  )
})

const styles = StyleSheet.create({
    continer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
        height: '100%' 
    },
    flexCol: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    cellMap: {
        flexDirection: 'row',
        width: '33.3%',
        height: '16.7%'
    }
})

export default VerticalPath