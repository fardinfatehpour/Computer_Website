import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
  name: "Shop",
  initialState: {
    
    
    image: null,
    score: "",
    
    available: true,
  },
  reducers: {
    setShop: (state, action) => {

      state.image = action.payload.image;
      state.score = action.payload.score;
      state.available = action.payload.available;
    },
  },
});

export const { setShop } = ShopSlice.actions;
export default ShopSlice.reducer;
