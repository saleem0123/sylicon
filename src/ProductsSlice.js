import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const featureditems = createAsyncThunk('Category/discovering', async () => {
    try {
        const response = await axios.post('https://sylcon.howincloud.com/public/api/get-all-home-datas');
        console.log(response, "asdfghjk");
        const data = response.data.data.FeaturedProducts;
        return data;
    } catch (error) {
        throw Error('Error fetching users');
    }
});

const ProductsSlice= createSlice({
    name  :'products',
    initialState:{
        data:null,
        loading:false,
        error:null,
        discovering:[],
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(featureditems.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(featureditems.fulfilled, (state, action) => {
            state.loading = false;
            state.featureditems = action.payload;
        }).addCase(featureditems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default ProductsSlice.reducer;