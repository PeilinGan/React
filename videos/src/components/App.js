import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Youtube from '../apis/youtube';

const KEY = 'AIzaSyDVsXenxxmJA3pu21g7KUoGQ36045kPf7Q';

class App extends React.Component {
  state = { videos: [], videoSelected: null };

  componentDidMount() {
    this.onQuerySubmit('building');
  }

  onQuerySubmit = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResult: 5,
        key: KEY,
      },
    });
    this.setState({ videos: response.data.items, videoSelected: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onQuerySubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
