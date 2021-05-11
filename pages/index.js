import React from "react";
import Message from "../components/message";
import Photo from "../components/photo";
import Post from "../components/post";
import connectToDb from "../db/connect";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [...this.props.messages],
      edited: { message: "", edit: true },
    };
  }

  toggleCheck = () => {
    this.setState((prevState) => ({
      edited: { ...prevState.edited, edit: !prevState.edited.edit },
    }));
  };

  onChange = (item) => {
    this.setState((prevState) => ({
      edited: { ...prevState.edited, message: item },
    }));
  };

  addMessage = async () => {
    const res = await axios.post(
      "http://localhost:3000/api/messages",
      this.state.edited
    );
    const newMessage = res.data;
    this.setState((prevState) => ({
      message: [...prevState.message, newMessage],
      edited: { message: "", edit: this.state.edited.edit },
    }));
  };

  delMessage = async (id, message) => {
    await axios.delete("http://localhost:3000/api/messages/" + id);
    if (message) {
      this.setState((prevState) => ({
        edited: { ...prevState.edited, message: message },
      }));
    }
    this.setState((prevState) => ({
      message: prevState.message.filter((item) => item._id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Photo add={this.addMessage} />
          <Message value={this.onChange} text={this.state.edited.message} />
        </div>
        <div className="row mb-3">
          <div className="col-xs-3 col-sm-3 col-lg-3 offset-lg-1">
            <input
              type="checkbox"
              id="checkbox"
              checked={this.state.edited.erase}
              onChange={this.toggleCheck}
            />
            <label htmlFor="checkbox">Bez edycji</label>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-10 offset-lg-1 px-0">
            <div className="message">
              <ul>
                {this.state.message.map((item) => (
                  <Post
                    message={item.message}
                    key={item._id}
                    id={item._id}
                    remove={(id, edit) => this.delMessage(id, edit)}
                    checkbox={item.edit}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
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
