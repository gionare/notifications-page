import React from "react";
import "../NotificationsCard";
import RizkyHasanuddinAvatar from "/images/avatar-rizky-hasanuddin.webp";

export default function RizkyHasanuddin() {
  return (
    <div className="user-div">
      <div className="user-avatar-div">
        <img
          src={RizkyHasanuddinAvatar}
          alt="MarkWebber"
          className="user-avatar"
        />
      </div>
      <div className="user-div-letters">
        <span className="user-name">Rizky Hasanuddin</span>
        <span className="interactive-message">sent you a private message</span>
        <span className="time-ago">
          <br />5 days ago
        </span>
        <div className="message-content">
          {" "}
          Hello, thanks for setting up the Chess Club. I've been a member for a
          few weeks now and I'm already having lots of fun and improving my
          game.
        </div>
      </div>
    </div>
  );
}
