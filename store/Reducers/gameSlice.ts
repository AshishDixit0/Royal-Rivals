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
        disableTouch:(state)=>{
            state.touchDiceBlock=true,
            state.pileSelectionPlayer=-1
            state.cellSelectionPlayer=-1
        },
        unfreezDice:(state)=>{
            state.touchDiceBlock=false
        },
       announceWinner :(state,action)=>{
            state.winner=action.payload
        },
        updatePlayerChance :(state,action)=>{
            state.chancePlayer=action.payload.chancePlayer,
            state.touchDiceBlock=false
        },
        updatePlayerPieceValue:(state:any,action)=>{
            const {playerNo,pieceId,pos,travelCount}=action.payload;
            const playerPieces=state[playerNo];
            const piece=playerPieces.find((p:any)=>p.id===pieceId)
            state.pileSelectionPlayer=-1
            if(piece)
            {
                piece.pos=pos
                piece.travelCount=travelCount
                const currentPositionIndex=state.currentPositions.findIndex((p:any)=>p.id===pieceId)
                if(pos==0)
                {
                    if(currentPositionIndex!==-1)
                    {
                        state.currentPositions.splice(currentPositionIndex,1)
                    }          
            }
            else{
                if(currentPositionIndex!==-1)
                {
                    state.currentPositions[currentPositionIndex]={
                        id:pieceId,
                        pos
                    }
                }
                else{
                    state.currentPositions.push({id:pieceId,pos})
                }
            }
        }
        }
    },
})
export const {startGame,updateDiceNo,updatePlayerChance,announceWinner,unfreezDice,disableTouch,enableCellSelection,enablePileSelection,updatePlayerPieceValue}=gameSlice.actions
export default gameSlice.reducer