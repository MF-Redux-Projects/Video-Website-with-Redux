import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    likedVideos: [],
    dislikedVideos: []
}

const likeUnlikeSlice = createSlice({
    name: 'likeUnlike',
    initialState,
    reducers: {
        likeVideo: (state, action) => {
            //if video is not in likedVideos, add it with like count 1
            if(!state.likedVideos.find(video => video.id === action.payload.id)){
                state.likedVideos.push({...action.payload, likeCount: 1});
            } else {
                //if video is in likedVideos, increment like count
                state.likedVideos = state.likedVideos.map(video => {
                    if(video.id === action.payload.id){
                        return {...video, likeCount: video.likeCount + 1}
                    }
                    return video;
                })
            }
        },
        unlikeVideo: (state, action) => {
            //if video is not in dislikedVideos, add it with dislike count 1
            if(!state.dislikedVideos.find(video => video.id === action.payload.id)){
                state.dislikedVideos.push({...action.payload, dislikeCount: 1});
            } else {
                //if video is in dislikedVideos, increment dislike count
                state.dislikedVideos = state.dislikedVideos.map(video => {
                    if(video.id === action.payload.id){
                        return {...video, dislikeCount: video.dislikeCount + 1}
                    }
                    return video;
                })
            }
        }
    }
})

export default likeUnlikeSlice.reducer;
export const {likeVideo, unlikeVideo} = likeUnlikeSlice.actions;
