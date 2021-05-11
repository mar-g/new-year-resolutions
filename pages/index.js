import React from "react";
import Message from "../components/message";
import Photo from "../components/photo";
import Post from "../components/post";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Message />
        <Photo />
        <Post />
      </>
    );
  }
}

export default Home;
