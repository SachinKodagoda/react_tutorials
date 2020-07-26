import './css/VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="vide-item item" onClick={ () => onVideoSelect(video) }>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="ui image video-thumbnail"/>
            <div className="content">
                <div href="" className="header">{video.snippet.title}</div>
                <div className="description"></div>
            </div>
        </div>
    )
}

export default VideoItem;