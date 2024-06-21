import React, { Component } from "react";
import SearchBar from "./Components/searchbar";
import VideoDetail from "./Components/video-details";
import VideoList from "./Components/video-list";
import axios from "axios";

class App extends Component {
  state = {
    serachTerm: "",
    data: {},
    videoId: "",
    title: "",
    description: "",
  };

  handleChange = ({ target: { value: serachTerm } }) =>this.setState({ ...this.state, serachTerm });

  handleSelect = (videoId, title, description) => this.setState({ ...this.state, videoId, title, description });

  componentDidUpdate = (prevProps, prevState) => {

    const getYoutubeVideos = () => {

      const baseUrl = "https://www.googleapis.com/youtube/v3/search";

      const key = "AIzaSyB9X-LCbu7iIW44z3lIb0hdpp0P6w00B40";

      const type = "video";

      const part = "snippet";

      const q = this.state.serachTerm; //// Trim whitespace from search term

      const url = `${baseUrl}?key=${key}&type=${type}&part=${part}&q=${q}`;

      axios.get(url)
            .then((response) => this.setState({ ...this.state, data: response.data }))
            .catch((error) => console.log(error));
    }

    if (prevState.serachTerm !== this.state.serachTerm) getYoutubeVideos();
    console.log(prevState);
  };

  render() {
    return (
      <div className="container">
        <SearchBar
            handleChange={this.state.handleChange}
            serachTerm={this.state.serachTerm}
        />
        <div className="row">

          <VideoDetail 
              videoId = { this.state.videoId } 
              description = { this.state.description } 
              title = { this.state.title }
          />
           <VideoList items ={this.state.data.items || [] }/>
        </div>
      </div>
    );
  }
}
export default App;
