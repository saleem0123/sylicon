import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const banner = createAsyncThunk('users/banner', async () => {
    try {
        const response = await axios.post('https://sylcon.howincloud.com/public/api/get-all-home-datas');
        console.log(response, "dataBanner");
        const data = response.data.data.AllFoodBanners;
        return data;
    } catch (error) {
        throw Error('Error fetching users');
    }
});
const userSlice = createSlice({
    name: 'users',
    initialState: {
        foodban: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(banner.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(banner.fulfilled, (state, action) => {
            state.loading = false;
            state.banner = action.payload;
        }).addCase(banner.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;

