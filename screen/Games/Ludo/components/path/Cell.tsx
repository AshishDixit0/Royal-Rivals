import { View, Text, StyleSheet, Image } from "react-native";
import React, { useMemo } from "react";
import { Colors } from "@/constants/Colors";
import Pile from "../Pile";
import { arrowSpot, safeSpot, starSpot } from "@/utils/PlotData";

interface CellProps {
  key: string;
  id: any;
  color: any;
}

const Cell = ({ key, id, color }: CellProps) => {
  const isSafeSpot = useMemo(() => safeSpot.includes(id), [id]);
  const isStarSpot = useMemo(() => starSpot.includes(id), [id]);
  const isArrowSpot = useMemo(() => arrowSpot.includes(id), [id]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isSafeSpot ? color : "white" },
      ]}
    >
      {isStarSpot && (
        <Image
          source={require("@/assets/images/star.png")}
          height={20}
          width={20}
        />
      )}
      {isArrowSpot && id === 38 && (
        <Image source={require("@/assets/images/arrow.png")} />
      )}
      {isArrowSpot && id === 25 && (
        <Image source={require("@/assets/images/arrow1.png")} />
      )}
      {isArrowSpot && id === 12 && (
        <Image source={require("@/assets/images/arrow2.png")} />
      )}
      {isArrowSpot && id === 51 && (
        <Image source={require("@/assets/images/arrow3.png")} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: Colors.checkboxBorder,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pieceContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    zIndex: 99,
  },
});

export default React.memo(Cell);
