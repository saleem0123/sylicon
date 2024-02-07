import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const discovering = createAsyncThunk('Category/discovering', async () => {
    try {
        const response = await axios.post('https://sylcon.howincloud.com/public/api/get-all-home-datas');
        console.log(response, "asdfghjk");
        const data = response.data.data.DiscoverItems;
        return data;
    } catch (error) {
        throw Error('Error fetching users');
    }
});

const DiscoverproductsSlice= createSlice({
    name  :'Category',
    initialState:{
        data:null,
        loading:false,
        error:null,
        discovering:[],
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(discovering.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(discovering.fulfilled, (state, action) => {
            state.loading = false;
            state.discovering = action.payload;
        }).addCase(discovering.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default DiscoverproductsSlice.reducer;