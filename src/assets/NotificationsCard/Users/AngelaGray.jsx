import React from "react";
import "../NotificationsCard";
import AngelaGrayAvatar from "/images/avatar-angela-gray.webp";

export default function AngelaGray() {
  return (
    <div className="user-div">
      <div className="user-avatar-div">
        <img src={AngelaGrayAvatar} alt="MarkWebber" className="user-avatar" />
      </div>
      <div className="user-div-letters">
        <span className="user-name">Angela Gray</span>
        <span className="interactive-message">followed you</span>
        <span className="time-ago">
          <br />
          5m ago
        </span>
      </div>
    </div>
  );
}
