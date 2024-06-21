import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { handleChange, serachTerm }= this.props;// Destructuring props

    return (

      <div 
            style={{ margin: "20px", textAlign: "center" }}>
            <input onChange={handleChange} style={{ width: "75%" }} />
            <br /> <span>{serachTerm}</span>
     </div>
    );
  }
}

export default SearchBar;
