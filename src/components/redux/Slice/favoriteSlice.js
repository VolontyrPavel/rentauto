import { createSlice } from "@reduxjs/toolkit";

export const initialState = { favorite: [] };

const favoriteSlice = createSlice({
  name: "favorite",

  initialState,

  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorite.push(payload);
    },
    delFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter((car) => car.id !== payload);
    },
  },
});

export const { addFavorite, delFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
