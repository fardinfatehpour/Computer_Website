import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
    name:'info',
    initialState:{
        barcode:"",
    },
    reducers:{
        setInfo:(state,action)=>{
            state.barcode=action.payload.barcode
        },
    }
})

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;