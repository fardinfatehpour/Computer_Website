import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
  name: "Shop",
  initialState: {
    id: null,
    name: null,
    image: null,
    score: null,
    price: null,
    available: null,
  },
  reducers: {
    setShop: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.score = action.payload.score;
      state.price = action.payload.price;
      state.available = action.payload.available;
    },
  },
});

export const { setShop } = ShopSlice.actions;
export default ShopSlice.reducer;
