import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  Characters, 
  ICharacters,
  ILocations,
} from "../types/Type";
import { rickAndMortyService } from "../services/rickandmorty.service";

export const getCharacters = createAsyncThunk("getCharacters", async () => {
  let characters: ICharacters[] = [];
  for (let x = 0; x < 43; x++) {
    const data = await rickAndMortyService.getAllCharacters(x);
    characters = [...characters, ...data.results];
  }
  return characters;
});

export const setCharacter = createAsyncThunk("setCharacter", async (character:ICharacters) => {
    return character
  });

  const initialCharacter: ICharacters = {
    id: 0,
    name: "",
    species: "",
    type: "",
    status: "",
    gender: "",
    image: "",
    origin: [],
    location: {
      name: "",
      url: "",
    },
    episode: [],
    url: "",
    created: "",
  };


const initialState: Characters = {
  allCharacters: [],
  loading: false,
  error: "",
  selectedCharacter:initialCharacter,
  allLocations: [],
  filteredCharactersByLocation: [],
  selectedLocation: "",
};

const characterSlice = createSlice({
  name: "characters",  
  initialState,
  reducers: {
    loadFilteredCharacters: (state, action) => {
        
      state.filteredCharactersByLocation=action.payload
      console.log(state.filteredCharactersByLocation)
    },
    loadAllCharacters: (state, action) => {
      state.allCharacters = action.payload;
    },
    loadAllLocations: (state, action: PayloadAction<ILocations[]>) => {
      // state.allLocations=action.payload
    },
    setSelectedCharacter: (state, action) => {
      //  state.selectedCharacter=action.payload
    },
    setSelectedLocation: (state, action) => {
      console.log(action.payload);
      //  state.selectedLocation=action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.allCharacters = action.payload;
      state.loading = false;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error while getting characters";
    });
    
    builder.addCase(setCharacter.pending, (state, action) => {
      state.loading = true;
     
    });
    builder.addCase(setCharacter.fulfilled, (state, action) => {
        state.selectedCharacter = action.payload;
      state.loading = false;
     
    });
  
  },
});
export const {
  setSelectedLocation,
  loadFilteredCharacters,
  loadAllCharacters,
  loadAllLocations,
  setSelectedCharacter,
} = characterSlice.actions;
export const selectAllCharacters = (state: RootState) =>
  state.characters.allCharacters;
//   export const filteredCharacters = (state: RootState) => state.characters.filteredCharactersByLocation;
export default characterSlice.reducer;
