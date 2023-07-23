import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  moviesItems: [],
  featuredMovies: [],
  currentMovie: [],
   isLoading: false,
   error: false,
}


export const getItems = createAsyncThunk(
  'movies/getItems', async (url)=>{
  try{
      const resp = await axios(url);
      return resp.data;
  } catch(err){
     
  }
});


const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToFavourites(state, action) {
      let isNewMovie = state.featuredMovies.every(elem => elem.imdbID !== action.payload.data.imdbID)
      if(isNewMovie) state.featuredMovies = [...state.featuredMovies, action.payload.data];
  },
  removeFromFavourites(state, action) {
    state.featuredMovies = state.featuredMovies.filter(elem=> elem.id !== action.payload.data.id);
  },
  clearFavourites(state){
    state.featuredMovies = []
  }
  },
  
  extraReducers: (bulder)=>{
      bulder.addCase(getItems.pending, (state, action) =>{
           state.isLoading = true;
      }).addCase(getItems.fulfilled,(state, action) =>{

        if(action.payload.Rated) {
          state.currentMovie=action.payload;
          state.error = false;
          state.isLoading = false;
          return;
        }
        if(action.payload.Search){
          state.moviesItems=action.payload.Search;
          state.error = false;
          state.isLoading = false;
          return;
        } 
        state.moviesItems=[];
        state.isLoading = false;
        state.error = true;
       
      }).addCase(getItems.rejected, (state) =>{
          state.isLoading = false;
      })
  },
 
})

export const {addToFavourites, removeFromFavourites, clearFavourites} = moviesSlice.actions;
export default moviesSlice.reducer;