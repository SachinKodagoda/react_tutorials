import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../../api/youtube';


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onTermSubmit('love');
    }

    onTermSubmit = async term => {
        const KEY = 'AIzaSyAInpShRL5NgwIdDP8XXz8k9FZPdqdFpLY';
        
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet', 
                type: 'video',
                maxResults: 5,
                key: `${KEY}`
            },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '1rem' }}>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;