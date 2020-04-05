import React from "react";
import "./Contact.css";

const Contact = ({ name, avatar, online }) => {
  return (
    <>
      <div className="Contact">
        <img className="avatar" src={avatar} alt="avatar" />
        <div>
          <p className="name">{name}</p>
          <div className="status">
            <p className={online ? "status-online" : "status-offline"} />
            <p className="status-text">{online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
