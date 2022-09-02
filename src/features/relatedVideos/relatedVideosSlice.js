import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getRelatedVideos} from "./relatedVideosAPI";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({id, tags})=>{
    const relatedVideos = await getRelatedVideos({id, tags});
    return relatedVideos;
})

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload
        }).addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.videos = []
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })

    }
})

export default relatedVideosSlice.reducer;









