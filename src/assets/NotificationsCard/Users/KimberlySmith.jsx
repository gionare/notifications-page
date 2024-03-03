import React, { useState } from "react";
import "../NotificationsCard";
import KimberlySmithAvatar from "/images/avatar-kimberly-smith.webp";

export default function KimberlySmith({ count, setCount }) {
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
        <img
          src={KimberlySmithAvatar}
          alt="KimberlySmith"
          className="user-avatar"
        />
      </div>
      <div className="user-div-letters">
        <span className="user-name">KImberly Smith</span>
        <span className="interactive-message">commented on your picture</span>
        <span className="time-ago">
          <br />1 week ago
        </span>
      </div>
    </div>
  );
}
