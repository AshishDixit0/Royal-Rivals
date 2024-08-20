import {
  safeSpot,
  startingPoint,
  turningPoint,
  victoryStart,
} from "@/Utils/PlotData";
import { selectCurrentPostions, selectDiceNo } from "./gameSelection";
import {
  announceWinner,
  disableTouch,
  unfreezDice,
  updatePlayerChance,
  updatePlayerPieceValue,
} from "./gameSlice";
const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleForwardThunk =
  (playerNo: any, id: any, pos: any) =>
  async (dispatch: any, getState: any) => {
    const state = getState();
    const plotedPieces = selectCurrentPostions(state);
    const diceNo = selectDiceNo(state);
    let alpha =
      playerNo == 1 ? "A" : playerNo == 2 ? "B" : playerNo == 3 ? "C" : "D";
    const piecesAtPostion = plotedPieces?.filter(
      (item: any) => item.pos === pos
    );

    const piece =
      piecesAtPostion[
        piecesAtPostion.findIndex((item: any) => item.id[0] == alpha)
      ];
    dispatch(disableTouch());
    if (!piece) {
      return;
    }
    let finalPath = (piece as any).pos;
    const beforePlayerpiece = state.game[`player${playerNo}`].find(
      (item: any) => item.id == id
    );
    let travelCount = beforePlayerpiece.travelCount;
    for (let i = 0; i < diceNo; i++) {
      const updatedPosition = getState();
      const playerPiece = updatedPosition?.game[`player${playerNo}`].find(
        (item: any) => item.id == id
      );
      let path = playerPiece.pos + 1;
      if (turningPoint.includes(path) && turningPoint[playerNo - 1] == path) {
        path = victoryStart[playerNo - 1];
      }
      if (path == 53) {
        path = 1;
      }
      finalPath = path;
      travelCount += 1;
      dispatch(
        updatePlayerPieceValue({
          playerNo: `player${playerNo}`,
          pieceId: playerPiece.id,
          pos: path,
          travelCount: travelCount,
        })
      );
      await delay(200);
    }
    const updateState = getState();
    const updatedPlottedPieces = selectCurrentPostions(updateState);

    // Check collision
    const finalPlot = updatedPlottedPieces?.filter(
      (item: any) => item.pos === finalPath
    );
    const ids = finalPlot.map((item: any) => item.id[0]);
    const uniqueIds = new Set(ids);
    const areDifferentIds = uniqueIds.size > 1;
    if (safeSpot.includes(finalPath)) {
      // Do nothing if it's a safe spot
    } else if (areDifferentIds) {
      const enemyPiece = finalPlot.find((piece: any) => piece.id[0] !== id[0]);
      const enemyId = (enemyPiece as any).id[0];
      let no = enemyId == "A" ? 1 : enemyId == "B" ? 2 : enemyId == "C" ? 3 : 4;
      let backwardPath = startingPoint[no - 1];
      let i = (enemyPiece as any).pos;
      while (i !== backwardPath) {
        dispatch(
          updatePlayerPieceValue({
            playerNo: `player${no}`,
            pieceId: (enemyPiece as any).id,
            pos: i,
            travelCount: 0,
          })
        );
        await delay(400);
        i--;
        if (i == 0) {
          i = 52;
        }
      }
      dispatch(
        updatePlayerPieceValue({
          playerNo: `player${no}`,
          pieceId: (enemyPiece as any).id,
          pos: 0,
          travelCount: 0,
        })
      );
      dispatch(unfreezDice());
      return;
    }
    if (diceNo == 6 || travelCount == 57) {
      dispatch(updatePlayerChance({ chancePlayer: playerNo }));
      if (travelCount == 57) {
        const finalPayerState = getState();
        const playerAllPieces = finalPayerState.game[`player${playerNo}`];
        if (checkWinningCriteria(playerAllPieces)) {
          dispatch(announceWinner(playerNo));
          return;
        }
        dispatch(unfreezDice());
        return;
      }
    } else {
      let chancePlayer = playerNo + 1;
      if (chancePlayer > 4) {
        chancePlayer = 1;
      }
      dispatch(updatePlayerChance({ chancePlayer }));
    }
  };

function checkWinningCriteria(pieces: any) {
  for (let piece of pieces) {
    if (piece.travelCount < 57) {
      return false;
    }
  }
  return true;
}
