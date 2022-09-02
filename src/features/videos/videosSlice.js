import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getVideos} from "./videosAPI";
import {totalVideosAPI} from "./totalVideosAPI";

const initialState = {
    videos: [],
    videoCount: 0,
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({tags, search, author, page, limit})=>{
    const videos = await getVideos({tags, search, author, page, limit});
    return videos;
})

export const fetchTotalVideos = createAsyncThunk('videos/fetchTotalVideos', async ()=>{
    const videoCount = await totalVideosAPI();
    return videoCount;
})

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload
        }).addCase(fetchVideos.rejected, (state, action) => {
            state.videos = []
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        }).addCase(fetchTotalVideos.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchTotalVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videoCount = action.payload
        }).addCase(fetchTotalVideos.rejected, (state, action) => {
            state.videoCount = 0
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })

    }
})



export default videosSlice.reducer;









