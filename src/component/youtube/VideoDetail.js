import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return <div>Loding...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} frameBorder="0" title="video player"/>
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {selectedVideo.snippet.title} </h4>
                <p> {selectedVideo.snippet.description} </p>
            </div>
        </div>
    );
};

export default VideoDetail;