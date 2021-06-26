/*
{
    videoList: [
        {
            title: '',
            subtitle: '',
            duration: '',
            imgPreview: '',

        }
    ]
}*/
import {createSlice} from '@reduxjs/toolkit';


export const videoListReducer = createSlice({
    name: 'videoList',
    initialState: {
        value: [{title: 'PEPE'}],
    },
    reducers: {
        addVideo: (state, action) => {
             state.value = [...state.value, action.payload];
        },
        removeVideo: (state, action) => {
            state.filter(s => s.id !== action.payload);
        }
    },
});

export const {addVideo, removeVideo} = videoListReducer.actions;

export const selectVideos = state => state.videoList.value;

export default videoListReducer.reducer;
