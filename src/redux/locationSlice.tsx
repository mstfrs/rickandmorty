import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  
  ILocations,
  Locations,
} from "../types/Type";
import { rickAndMortyService } from "../services/rickandmorty.service";


export const getLocations = createAsyncThunk("getLocations", async () => {
  let locations: ILocations[] = [];
  for (let x = 0; x < 7; x++) {
    const data = await rickAndMortyService.getAllLocations(x);
    locations = [...locations, ...data.results];
  }
  return locations;
});
export const setLocation = createAsyncThunk("setLocation", async (name:string) => {
  return name
});



const initialState: Locations = {
  loading: false,
  error: "",  
  allLocations: [],
  selectedLocation: "",
};

const locationSlice = createSlice({
  name: "locations",  
  initialState,
  reducers: {
   
    loadAllLocations: (state, action: PayloadAction<ILocations[]>) => {
      // state.allLocations=action.payload
    },
    setSelectedCharacter: (state, action) => {
      //  state.selectedCharacter=action.payload
    },
    setSelectedLocation: (state, action) => {
      console.log(action.payload);
       state.selectedLocation=action.payload
    },
  },
  extraReducers: (builder) => {
    
    builder.addCase(getLocations.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getLocations.fulfilled, (state, action) => {
      state.allLocations = action.payload;
      state.loading = false;
    });
    builder.addCase(getLocations.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error while getting characters";
    });
    builder.addCase(setLocation.pending, (state, action) => {
      
      state.loading = true;
    });
    builder.addCase(setLocation.fulfilled, (state, action) => {
      state.selectedLocation = action.payload;
      state.loading = false;
    });
    builder.addCase(setLocation.rejected, (state, action) => {
      
      state.loading = false;
      state.error = "Error while setting location";

    });
  },
});
export const {
  setSelectedLocation,
 
  loadAllLocations,
  setSelectedCharacter,
} = locationSlice.actions;
export const selectAllCharacters = (state: RootState) =>
  state.characters.allCharacters;
//   export const filteredCharacters = (state: RootState) => state.characters.filteredCharactersByLocation;
export default locationSlice.reducer;
