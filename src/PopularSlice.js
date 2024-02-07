import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const popularity = createAsyncThunk('popularitem/popularity', async () => {
    try {
        const response = await axios.post('https://sylcon.howincloud.com/public/api/get-all-home-datas');
        console.log(response, "asdfghjk");
        const data = response.data.data.PopularProducts;
        return data;
    } catch (error) {
        throw Error('Error fetching users');
    }
});

const PopularSlice= createSlice({
    name:'popularitem',
    initialState:{
        data:null,
        loading:false,
        error:null,
        popularity:[],
        
    },
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(popularity.pending, (state) => {
        state.loading = true;
        state.error = null;
    }).addCase(popularity.fulfilled, (state, action) => {
        state.loading = false;
        state.popularity = action.payload;
    }).addCase(popularity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
},

})


export default PopularSlice.reducer;
