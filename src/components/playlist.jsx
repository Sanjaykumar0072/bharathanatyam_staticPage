import React, { Component } from 'react';
import VideoPlaylist from './sub-components/video-playlist';
import Header from './header';
import Footer from './footer';
import ScrollToTop from './sub-components/scroll-to-top';

class Playlist extends Component {
  render() {
    return (
      <>
        <Header />
        <ScrollToTop />
        <div className="playlistPage">
          <span>PLAYLIST</span>
          <h1>Explore on My Playlist</h1>
          <VideoPlaylist />
        </div>
        <Footer />
      </>
    );
  }
}

export default Playlist;
