import React, { useState } from "react";
import "../NotificationsCard";
import AngelaGrayAvatar from "/images/avatar-angela-gray.webp";
import { StyledUserNames } from "../../../styled-components/StyledUserNames";

export default function AngelaGray({ count, setCount }) {
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
        <img src={AngelaGrayAvatar} alt="MarkWebber" className="user-avatar" />
      </div>
      <div className="user-div-letters">
        <StyledUserNames className="">Angela Gray</StyledUserNames>
        <span className="interactive-message">followed you </span>
        <div className="Oval"></div>
        <span className="time-ago">
          <br />
          5m ago
        </span>
      </div>
    </div>
  );
}
