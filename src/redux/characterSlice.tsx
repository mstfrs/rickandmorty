import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Characters, ICharacters } from "../types/Type";
import { rickAndMortyService } from "../services/rickandmorty.service";

export const getCharacters = createAsyncThunk("getCharacters", async () => {
  if (localStorage.getItem("characters")) {
    return JSON.parse(localStorage.getItem("characters") || "false");
  } else {
    let characters: ICharacters[] = [];
    for (let x = 0; x < 43; x++) {
      const data = await rickAndMortyService.getAllCharacters(x);
      characters = [...characters, ...data.results];
      localStorage.setItem("characters", JSON.stringify(characters));
    }
    return characters;
  }
});

export const setCharacter = createAsyncThunk(
  "setCharacter",
  async (character: ICharacters) => {
    return character;
  }
);
export const setOtherCharacters = createAsyncThunk(
  "setOtherCharacters",
  async (characters: ICharacters[]) => {
    return characters;
  }
);
export const loadFilteredCharacters = createAsyncThunk(
  "loadFilteredCharacters",
  async (characters: ICharacters[]) => {
    return characters;
  }
);
export const setLocation = createAsyncThunk(
  "setLocation",
  async (name: string) => {
    return name;
  }
);

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
  otherCharacters: [],
  loading: false,
  error: "",
  selectedCharacter: initialCharacter,
  allLocations: [],
  filteredCharactersByLocation: [],

};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
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
    builder.addCase(setOtherCharacters.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(setOtherCharacters.fulfilled, (state, action) => {
      state.otherCharacters = action.payload;
      state.loading = false;
    });
    builder.addCase(loadFilteredCharacters.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loadFilteredCharacters.fulfilled, (state, action) => {
      const filtered = state.allCharacters.filter(
        (character: ICharacters) => character.location.name === "Earth"
      );
      console.log(filtered);
      state.filteredCharactersByLocation = action.payload;
      state.loading = false;
    });

  },
});

export const selectAllCharacters = (state: RootState) =>
  state.characters.allCharacters;
export default characterSlice.reducer;
