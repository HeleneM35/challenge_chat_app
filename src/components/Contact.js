import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      online: props.online
    }
  }   

  render() {
    return (
      <>
        <div className="Contact">
          <img className="avatar" src={this.props.avatar} alt="avatar" />
          <div>
            <p className="name">{this.props.name}</p>
            <div className="status" onClick={() => this.setState({online: !this.state.online})}>
              <p className={this.state.online ? "status-online" : "status-offline"} />
              <p className="status-text">{this.state.online ? "online" : "offline"}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Contact;
