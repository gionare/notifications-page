import React, { useState } from "react";
import "../NotificationsCard";
import NathanPetersonAvatar from "/images/avatar-nathan-peterson.webp";
import { StyledUserNames } from "../../../styled-components/StyledUserNames";

export default function NathanPeterson({ count, setCount }) {
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
          src={NathanPetersonAvatar}
          alt="NathanPeterson"
          className="user-avatar"
        />
      </div>

      <div className="user-div-letters">
        <StyledUserNames className="user-name">Nathan Peterson</StyledUserNames>
        <span className="interactive-message">reacted to your recent post</span>
        <span className="reaction-content">
          5 end-game strategies to increase your win rate
        </span>
        <span className="time-ago">
          <br />2 weeks ago
        </span>
      </div>
    </div>
  );
}
