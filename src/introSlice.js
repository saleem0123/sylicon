import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const IntreoConnection = createAsyncThunk('Intro/IntreoConnection', async () => {
    try {
        const response = await axios.post('https://sylcon.howincloud.com/public/api/get-all-home-datas');
        console.log(response, "dataBanner");
        const data = response.data.data.AllCategories;
        return data;
    } catch (error) {
        throw Error('Error fetching users');
    }
});
const introSlice = createSlice({
    name: 'Intro',
    initialState: {
        IntreoConnection: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(IntreoConnection.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(IntreoConnection.fulfilled, (state, action) => {
            state.loading = false;
            state.IntreoConnection = action.payload;
        }).addCase(IntreoConnection.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default introSlice.reducer;

