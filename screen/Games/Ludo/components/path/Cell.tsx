import { View, Text, StyleSheet, Image } from "react-native";
import React, { useCallback, useMemo } from "react";
import { Colors } from "@/constants/Colors";

import { arrowSpot, safeSpot, starSpot } from "@/utils/PlotData";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPostions } from "@/store/Reducers/gameSelection";
import Pile from "../Pile";
import { handleForwardThunk } from "@/store/Reducers/gameAction";

interface CellProps {
  id: any;
  color: any;
}

const Cell = ({ id, color }: CellProps) => {
  const dispatch = useDispatch()<any>;
  const isSafeSpot = useMemo(() => safeSpot.includes(id), [id]);
  const isStarSpot = useMemo(() => starSpot.includes(id), [id]);
  const isArrowSpot = useMemo(() => arrowSpot.includes(id), [id]);

  const plottedPieces = useSelector(selectCurrentPostions);

  const piecesAtPosition = useMemo(
    () => plottedPieces.filter((item: any) => item.pos == id),
    [plottedPieces, id]
  );

  const handlePress = useCallback(
    (playerNo: any, pieceId: any) => {
      // forward march tokens
      dispatch(handleForwardThunk(playerNo, pieceId, id));
    },
    [dispatch, id]
  );

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

      {(piecesAtPosition as any)?.map((piece: any, index: any) => {
        const playerNo =
          piece.id[0] === "A"
            ? 1
            : piece.id[0] === "B"
            ? 2
            : piece.id[0] === "C"
            ? 3
            : piece.id[0] === "D"
            ? 4
            : 4;

        const pieceColor =
          playerNo === 1
            ? Colors.Red
            : playerNo === 2
            ? Colors.Green
            : playerNo === 3
            ? Colors.Yellow
            : playerNo === 4
            ? Colors.Blue
            : Colors.Blue;

        return (
          <View
            key={piece.id}
            style={[
              styles.pieceContainer,
              {
                transform: [
                  {
                    scale: (piecesAtPosition as any)?.length === 1 ? 1 : 0.7,
                  }, {
                    translateX: piecesAtPosition.length === 1 ? 0 : index % 2 === 0 ? -6 : 6,
                  }, {
                    translateY: piecesAtPosition.length === 1? 0: index < 2? -6: 6,
                  }
                ],
              },
            ]}
          >
            <Pile
              pieceId={piece.id}
              color={pieceColor}
              cell={true}
              player={playerNo}
              onPress={() => handlePress(playerNo, piece.id)}
            />
          </View>
        );
      })}
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
