import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addVideo,
    removeVideo,
    selectVideos
} from '../store/reducers/videoList';
import styles from './VideoList.scss'


function VideoList() {

    const videos = useSelector(selectVideos);
    const dispatch = useDispatch();

    console.log(videos);

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Add video"
                    onClick={() => dispatch(addVideo({title: 'jose'}))}
                >
                    add video +
                </button>
                <span className={styles.value}>{videos.map(v => <div>{v.title}</div>)}</span>
                <button
                    className={styles.button}
                    aria-label="Remove video"
                    onClick={() => dispatch(removeVideo())}
                >
                   Remove video -
                </button>
            </div>
        </div>
    );
}

export default VideoList;
