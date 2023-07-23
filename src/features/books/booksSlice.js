import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const apiKey = 'AIzaSyDXT-RB7evPHoONPnQSHxmXNiwG0oEHR1A';
const url = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}`;

const initialState = {
  booksItems: [],
  featuredBooks: [],
   isLoading: false,
   error: false,
}


export const getItems = createAsyncThunk(
  'books/getItems', async (url)=>{
  try{
      const resp = await axios(url);
      return resp.data;
  } catch(err){
      console.log(err)
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addToFavourites(state, action) {
      let isNewBook = state.featuredBooks.every(elem => elem.id !== action.payload.data.id)
      if(isNewBook) state.featuredBooks = [...state.featuredBooks, action.payload.data];
  },
  removeFromFavourites(state, action) {
    state.featuredBooks = state.featuredBooks.filter(elem=> elem.id !== action.payload.data.id);
  },
  clearFavourites(state){
    state.featuredBooks = []
  }
  },
  
  extraReducers: (bulder)=>{
      bulder.addCase(getItems.pending, (state, action) =>{
           state.isLoading = true;
      }).addCase(getItems.fulfilled,(state, action) =>{
        if(action.payload.totalItems===0) {
            state.error = true;
            state.booksItems=[];
            return;
        }
        state.error = false;
        state.booksItems=action.payload.items;
        state.isLoading = false;
       
      }).addCase(getItems.rejected, (action, state) =>{
        console.log(action);
          state.isLoading = false;
          state.error = true;
      })
  },
 
})

export const {addToFavourites, removeFromFavourites, clearFavourites} = booksSlice.actions;
export default booksSlice.reducer;