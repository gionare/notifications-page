import React, { useState } from "react";
import "../NotificationsCard";
import AnnaKimAvatar from "/images/avatar-anna-kim.webp";
import { StyledUserNames } from "../../../styled-components/StyledUserNames";

export default function AnnaKim({ count, setCount }) {
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
        <img src={AnnaKimAvatar} alt="MarkWebber" className="user-avatar" />
      </div>
      <div className="user-div-letters">
        <StyledUserNames className="">Anna Kim</StyledUserNames>
        <span className="interactive-message">left the group</span>
        <span className="group">Chess Club</span>
        <span className="time-ago">
          <br />2 weeks ago
        </span>
      </div>
    </div>
  );
}
