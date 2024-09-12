import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import Cell from "./Cell";

interface HorizontalPathProps {
  cells: any;
  color: string;
}

const HorizontalPath = React.memo(({ cells, color }: HorizontalPathProps) => {
  const groupedCells = useMemo(() => {
    const groups = [];
    for (let i = 0; i < cells.length; i += 6) {
      groups.push(cells.slice(i, i + 6));
    }
    return groups;
  }, [cells]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {groupedCells.map((group, groupIndex) => (
          <View key={`group=${groupIndex}`} style={styles.group}>
            {group.map((id: Number) => {
              return <Cell key={`cell-${id}`} color={color} id={id} />;
            })}
          </View>
        ))}
      </View>
    </View>
  );
});

export default HorizontalPath;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    height: "100%",
  },
  innerContainer: {
    flexDirection: "column",
    // gap:2,
  },
  group: {
    flexDirection: "row",
    width: "16.7%",
    height: "33.3%",
    // gap:2,
  },
});
