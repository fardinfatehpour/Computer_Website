import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
  name: "Shop",
  initialState: {
    id: 1,
    name: "",
    image: {},
    score: "",
    price: 1,
    available: false,
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
