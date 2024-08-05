import { RootState } from "@/store";
export const selectCurrentPostions = (state:RootState) =>state.game.currentPositions
export const selectCurrentPlayerChance = (state:RootState) =>state.game.chancePlayer
export const selectDiceRolled = (state:RootState) =>state.game.idDicesRolled
export const selectDiceNo = (state:RootState) =>state.game.diceNo;


export const selectPlayer1 = (state:RootState) =>state.game.player1;
export const selectPlayer2 = (state:RootState) =>state.game.player2;
export const selectPlayer3 = (state:RootState) =>state.game.player3;
export const selectPlayer4 = (state:RootState) =>state.game.player4;

export const selectPocketPileSelection = (state:RootState) =>state.game.pileSelectionPlayer;
export const selectCellSelection = (state:RootState) =>state.game.cellSelectionPlayer;
export const selectDiceTouch = (state:RootState) =>state.game.touchDiceBlock;






