import { createSlice,PayloadAction  } from "@reduxjs/toolkit"
import {  ILocations } from "../types/Type"

const characterSlice = createSlice({
    name: 'characters',
    initialState: {
        allCharacters:[],
        allLocations:[],
        filteredCharactersByLocation:[],
        selectedCharacter:[]
    },
    reducers: {
        loadFilteredCharacters:(state,action)=>{ 
            // console.log(action.payload)           
            state.filteredCharactersByLocation=action.payload 
        },
        loadAllCharacters:(state,action)=>{   
            // console.log(action.payload)         
            state.allCharacters=action.payload 
        },
        loadAllLocations:(state,action:PayloadAction<ILocations[]>)=>{   
            // state.allLocations=action.payload 
        },
        setSelectedCharacter:(state,action)=>{   
             state.selectedCharacter=action.payload 
        },
    },
  })
  export const {loadFilteredCharacters,loadAllCharacters,loadAllLocations,setSelectedCharacter}=characterSlice.actions;

  export default characterSlice.reducer
 