import React, { useState } from "react";
import "../NotificationsCard";
import MarkWebberAvatar from "/images/avatar-mark-webber.webp";

export default function MarkWebber({ count, setCount }) {
  const [isRead, setIsRead] = useState(false);

  function handleNotification() {
    setIsRead(!isRead);
    // Decrease count if notification is false
    if (!isRead) {
      setCount(count - 1);
    }
  }

  return (
    <div
      onClick={handleNotification}
      className={`user-div ${!isRead ? "" : "notification-opened"} `}
    >
      <div className="user-avatar-div">
        <img src={MarkWebberAvatar} alt="MarkWebber" className="user-avatar" />
      </div>

      <div className="user-div-letters">
        <span className="user-name">Mark Webber</span>
        <span className="interactive-message">reacted to your recent post</span>
        <span className="reaction-content">My first tournament today!</span>
        <div className="Oval"></div>
        <span className="time-ago">
          <br />
          1m ago
        </span>
      </div>
    </div>
  );
}
