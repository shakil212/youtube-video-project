import React, { Component } from "react";

class VideoListItem extends Component {
  render() {
    const { imgUrl, videoId, description, title } = this.props;
    return (
          <li
              className="list-group-item media videolist" style={ {width:" 100%"} }
              onClick ={() => {this.handleSelect(videoId, title, description)}}
          >
              <img
                  className="mr-3"
                  src={imgUrl}
                  height="202"
                  width="360"
                  alt="video not found"
            />
              <div className = "media-body"> { title } </div>
        </li>
    );
  }
}

export default VideoListItem;

// src="https://www.youtube.com/embed/nPnZ-T8j2sc"
//Here another code
// import("../css/index.css");

// class VideoListItem extends Component {
//   render() {
//     const { src, title } = this.props; // Destructuring props
//     return (
//       <li className="list-group-item media videolist">
//       <img
//         className="mr-3"
//         src={imgUrl}
//         height="202"
//         width="360"
//       />
//       <div className="media-body">{title}</div>
//     </li>
//     );
//   }
// }

// export default VideoListItem;
