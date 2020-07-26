import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../../hooks/useVideos';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('building');

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos]);

    return (
        <div className="ui container" style={{ marginTop: '1rem' }}>
            <SearchBar onTermSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={selectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;