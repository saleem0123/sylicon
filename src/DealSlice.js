import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const dealer = createAsyncThunk('DealItems/dealer', async () => {
    try {
        const response = await axios.post('https://sylcon.howincloud.com/public/api/get-all-home-datas');
        console.log(response, "asdfghjk");
        const data = response.data.data.TodaysDeals;
        return data;
    } catch (error) {
        throw Error('Error fetching users');
    }
});

const DealSlice= createSlice({
    name:'DealItems',
    initialState:{
        data:null,
        loading:false,
        error:null,
        dealer:[],
        
    },
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(dealer.pending, (state) => {
        state.loading = true;
        state.error = null;
    }).addCase(dealer.fulfilled, (state, action) => {
        state.loading = false;
        state.dealer = action.payload;
    }).addCase(dealer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
},

})


export default DealSlice.reducer
