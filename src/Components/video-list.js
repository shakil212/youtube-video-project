import React, { Component } from "react";
import VideoListItem from "./video-list-item";

class VideoList extends Component {
  render() {
    const { items } = this.props; // Destructuring props

    return (
      <div className="col-md-4">
        <ul className="list-group col-md-4">
          {
            items.map( item =>  (
                <VideoListItem 
                  imgUrl={item.snippet.thumbnails.high.url} 
                  videoId={item.id.videoId} 
                  description={item.snippet.thumbnails.description} 
                  title={item.snippet.title} 
              />
          ))}
        </ul>
  </div>
    );
  }
}

export default VideoList;
