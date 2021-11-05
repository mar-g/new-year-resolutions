import React from "react";
import Message from "../components/message";
import Send from "../components/send";
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
    if (this.state.edited.message) {
      const res = await axios.post("/api/messages", this.state.edited);
      const newMessage = res.data;
      if (newMessage) {
        this.setState((prevState) => ({
          message: [...prevState.message, newMessage],
          edited: { message: "", edit: this.state.edited.edit },
        }));
      } else {
        this.setState({
          edited: { message: "Maksymalnie 25 wpisów", edit: this.state.edited.edit },
        });
      }
    }
  };

  delMessage = async (id, message) => {
    await axios.delete("/api/messages/" + id);
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
      <>
      <div className="bg"></div>
      <div className="container">
        <div className="row">
          <Send add={this.addMessage} />
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
            <label htmlFor="checkbox">bez edycji</label>
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
      </>
    );
  }
}

export default Home;

export async function getServerSideProps() {
  console.log(process.env.PRODUCTION_URL + "/api/messages")
  await connectToDb();
  const response = await axios.get(
    process.env.PRODUCTION_URL + "/api/messages"
  );
  
  const messages = response.data;

  return {
    props: {
      messages,
    },
  };
}
