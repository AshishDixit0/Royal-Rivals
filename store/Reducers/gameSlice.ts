import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialstate";


export const gameSlice = createSlice({
    name:'game',
    initialState:initialState,
    reducers:{
        startGame:()=>initialState,
        updateDiceNo:(state,action)=>{
            state.diceNo=action.payload.diceNo
        },
        enablePileSelection:(state,action)=>{
            state.touchDiceBlock=true,
            state.pileSelectionPlayer=action.payload.playerNo
        },
        enableCellSelection:(state,action)=>{
            state.touchDiceBlock=true,
            state.cellSelectionPlayer=action.payload.playerNo
        },
        disableTouch:(state,action)=>{
            state.touchDiceBlock=true,
            state.pileSelectionPlayer=-1
            state.cellSelectionPlayer=-1
        },
        unfreezDice:(state,action)=>{
            state.touchDiceBlock=false
        },
       announceWinner :(state,action)=>{
            state.winner=action.payload
        },
        updatePlayerChance :(state,action)=>{
            state.chancePlayer=action.payload.chancePlayer,
            state.touchDiceBlock=false
        },
    },
})
export const {startGame,updateDiceNo,updatePlayerChance,announceWinner,unfreezDice,disableTouch,enableCellSelection,enablePileSelection}=gameSlice.actions
export default gameSlice.reducer