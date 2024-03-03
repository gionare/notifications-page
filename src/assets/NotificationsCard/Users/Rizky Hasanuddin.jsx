import React, { useState } from "react";
import "../NotificationsCard";
import RizkyHasanuddinAvatar from "/images/avatar-rizky-hasanuddin.webp";

export default function RizkyHasanuddin({ count, setCount }) {
  const [isRead, setIsRead] = useState(false);

  function handleNotification() {
    setIsRead(!isRead);
    // Decrease count if notification is false
    if (!isRead && count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div
      onClick={handleNotification}
      className={`user-div ${!isRead ? "" : "notification-opened"} `}
    >
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
