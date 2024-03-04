import React, { useState } from "react";
import "../NotificationsCard";
import KimberlySmithAvatar from "/images/avatar-kimberly-smith.webp";
import { StyledUserNames } from "../../../styled-components/StyledUserNames";

export default function KimberlySmith({ count, setCount }) {
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
          src={KimberlySmithAvatar}
          alt="KimberlySmith"
          className="user-avatar"
        />
      </div>
      <div className="user-div-letters">
        <StyledUserNames className="user-name">KImberly Smith</StyledUserNames>
        <span className="interactive-message">commented on your picture</span>
        <span className="time-ago">
          <br />1 week ago
        </span>
      </div>
    </div>
  );
}
