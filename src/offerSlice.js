import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getSliders = createAsyncThunk('users/getSliders', async () => {
    try {
        const response = await axios.post('https://sylcon.howincloud.com/public/api/get-all-home-datas');
        console.log(response, "todaysoffer");
        const data = response.data.data.AllSliders;
        return data;
    } catch (error) {
        throw Error('Error fetching users');
    }
});
const offerSlice = createSlice({
    name: 'offers',
    initialState: {
        todayoffer: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSliders.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getSliders.fulfilled, (state, action) => {
            state.loading = false;
            state.todayoffer = action.payload;
        }).addCase(getSliders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default offerSlice.reducer;

