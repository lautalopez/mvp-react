import { configureStore } from '@reduxjs/toolkit'
import videoListReducer from "./reducers/videoList";

export default configureStore({
    reducer: {
        videoList: videoListReducer
    }
})
