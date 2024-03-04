import React, { useState } from "react";
import "../NotificationsCard";
import JacobThompsonAvatar from "/images/avatar-jacob-thompson.webp";
import { StyledUserNames } from "../../../styled-components/StyledUserNames";

export default function JacobThompson({ count, setCount }) {
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
          src={JacobThompsonAvatar}
          alt="JacobThompson"
          className="user-avatar"
        />
      </div>
      <div className="user-div-letters">
        <StyledUserNames className="user-name">Jacob Thompson</StyledUserNames>
        <span className="interactive-message">has joined your group</span>
        <span className="group">Chess Club</span>
        <span className="time-ago">
          <br />1 day ago
        </span>
      </div>
    </div>
  );
}
