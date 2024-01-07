import React, { Component } from 'react';
import videoData from '../../assets/json/yt_embed.json';

class VideoPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideoUrl: 'https://www.youtube.com/embed/N3L10jo0mTg',
      mainVideoTitle: 'Natyanjali',
      activeItem: 0
    };
  }

  handleVideoClick = (video, index) => {
    this.setState({
      mainVideoUrl: video.url,
      mainVideoTitle: video.title,
      currentVideo: video,
    });
    this.setState({ activeItem: index });
  };

  render() {
    const { mainVideoUrl, mainVideoTitle, activeItem } = this.state;

    return (
        <>
        <div className="playlist">
          <div className="Video-container">
              <div className="main-video-container">
                <iframe
                    src={mainVideoUrl}
                    className="main-video"
                    title={mainVideoTitle}
                    allowFullScreen="allowfullscreen"
                ></iframe>
                <h3 className="main-vid-title">{mainVideoTitle}</h3>
              </div>
              <div className="video-list-container">
                {videoData.map((video, index) => (
                  <div
                  className= {activeItem === index ? 'list active' : 'list'}
                  key={video.id}
                  onClick={() => this.handleVideoClick(video, index)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
                      alt={video.title}
                      className="list-video-thumbnail"
                    />
                    <h3 className="list-title">{video.title}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoPlaylist;
