import React from "react";
import Message from "../components/message";
import Photo from "../components/photo";
import Post from "../components/post";
import connectToDb from "../db/connect";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [...this.props.messages],
    };
  }

  render() {
    return (
      <>
        <Message />
        <Photo />
        <div className="message">
          <ul>
            {this.state.message.map((item) => (
              <Post message={item.message} key={item._id} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Home;

export async function getServerSideProps() {
  await connectToDb();
  const response = await fetch("http://localhost:3000/api/messages");
  const messages = await response.json();

  return {
    props: {
      messages,
    },
  };
}
