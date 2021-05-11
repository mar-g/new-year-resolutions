import React from "react";
import Message from "../components/message";
import Photo from "../components/photo";
import Post from "../components/post";
import mongoose from "mongoose";

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

// export async function getServerSideProps() {

//   mongoose.connect("mongodb://127.0.0.1:27017/messages", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const response = await fetch("http://localhost:3000/api/messages");
//   const messages = await response.json();

//   return {
//     props: {
//       messages,
//     },
//   };
// }
